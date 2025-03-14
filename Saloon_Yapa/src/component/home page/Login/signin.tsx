import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface SigninProps {
  onSuccess: () => void; // Callback for success
}

function Signin({ onSuccess }: SigninProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // For navigation

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

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
      navigate("/"); // Redirect to the home page
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Try again.");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Sign In</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-[#493628] text-white p-2 rounded hover:bg-[#AB886D] transition">
          Login
        </button>
      </form>
    </div>
  );
}

export default Signin;
