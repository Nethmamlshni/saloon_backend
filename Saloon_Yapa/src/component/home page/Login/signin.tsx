import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface SigninProps {
  onSuccess: () => void; // Callback for success
}

function Signin({ onSuccess }: SigninProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To store validation errors
  const navigate = useNavigate(); // For navigation

  // Email validation function
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset errors before validation

    // Validation checks before sending request
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    if (!isValidEmail(email)) {
      
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/users/login", {
        email,
        password,
      });

      console.log("Login successful:", response.data);
      alert("Login successful. Welcome!");

      // Save JWT token
      localStorage.setItem("token", response.data.token);

      // Close the modal and navigate to the home page
      onSuccess();
      setTimeout(() => navigate("/"), 100); // Redirect with a slight delay
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Login failed:", error.response?.data);
        setError(error.response?.data?.message || " Login failed. Try again.");
      } else {
        console.error("An unknown error occurred", error);
        setError(" An unknown error occurred. Please try again.");
      }
    }
  };

  const forgotPassword = () => {
    navigate("/forgot-password"); // Navigate to Forgot Password page
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Sign In</h2>
      {error && <p className="text-red-600 mb-2">{error}</p>} {/* Show error messages */}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-3 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-3 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* Forgot password link */}
        <div className="flex justify-end mb-3">
          <a
            href="#"
            className="text-[#493628] hover:underline"
            onClick={(e) => {
              e.preventDefault();
              forgotPassword();
            }}
          >
            Forget Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-[#493628] text-white p-2 rounded hover:bg-[#AB886D] transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Signin;
