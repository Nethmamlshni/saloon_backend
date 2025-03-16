import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Register from "../Login/register";
import Signin from "../Login/signin";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state
  const navigate = useNavigate(); // For navigation

  // Check if the user is authenticated by looking for a token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  
  const handleLogout = () => {
    // Clear token and set authentication to false
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/"); // Redirect to home or login page
  };
  const token = localStorage.getItem("token");
  const handleProfilePage = (token : any) => {
    localStorage.setItem("id", token.id); 
    console.log(token.id); // Set userId in localStorage
    const userId = localStorage.getItem("id");
    console.log("Retrieved userId from localStorage:", userId); // Debugging line
    if (userId) {
      navigate(`/profile/${userId}`); // Navigate to profile with userId
    } else {
      console.log("User not logged in or userId not found.");
      navigate("/signin"); // Redirect to signin page if userId is not found
    }
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav 
  className="p-4 flex justify-between items-center text-white fixed top-0 left-0 w-full z-50 shadow-lg "
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <h1 className="text-2xl font-bold text-black">Saloon Yapa</h1> {/* Changed text color to black */}

  <div className="flex space-x-6">
    {isAuthenticated ? (
      <div className="flex items-center space-x-4">
        <span 
        className="text-3xl text-black cursor-pointer hover:text-gray-600 transition"
        onClick={() => handleProfilePage(true)}
        >
          <FaUser />
        </span>
        <button
          className="bg-transparent text-black border border-black p-2 rounded hover:bg-black hover:text-white transition"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    ) : (
      <span 
        className="text-3xl text-black cursor-pointer hover:text-gray-600 transition"
        onClick={() => setIsLoginOpen(true)}
      >
        <FaUser />
      </span>
    )}
  </div>
</motion.nav>


      {/* Login & Register Modal */}
      {isLoginOpen && !isAuthenticated && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsLoginOpen(false)}
        >
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg w-2/3 flex"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()} 
          >
            {/* Register Form */}
            <div className="w-1/2 p-4 border-r">
              <Register onSuccess={() => setIsLoginOpen(false)} />
            </div>
            
            {/* Login Form */}
            <div className="w-1/2 p-4">
              <Signin onSuccess={() => setIsLoginOpen(false)} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
