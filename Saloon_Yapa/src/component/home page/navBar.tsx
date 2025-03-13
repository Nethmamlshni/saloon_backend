import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Register from "./register";
import Signin from "./signin";

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <motion.nav 
        className="bg-[#493628] p-4 flex justify-between items-center text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold">Saloon Yapa</h1>
        <div className="flex space-x-6">
          <span 
            className="text-3xl cursor-pointer hover:text-[#AB886D] transition"
            onClick={() => setIsLoginOpen(true)}
          >
            <FaUser />
          </span>
        </div>
      </motion.nav>

      {/* Login & Register Modal */}
      {isLoginOpen && (
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
              <Register />
            </div>
            
            {/* Login Form */}
            <div className="w-1/2 p-4">
             <Signin />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
