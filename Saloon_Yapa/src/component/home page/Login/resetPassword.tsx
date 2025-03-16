import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ResetPassword() {
  const { token } = useParams(); // Get token from URL
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!token) {
      setMessage("Invalid or missing reset token.");
      return;
    }

    if (newPassword.length < 7) {
      setMessage("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/reset-password",
        { token, newPassword },
        { headers: { "Content-Type": "application/json" },
       },
        
      );

      setMessage(response.data.message); 
    } catch (error: any) {
      setMessage(error.response?.data?.message || " An unexpected error occurred.");
    }
  };
  const homePage = () => {
    (window.location.href = "/");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F5F5F5] p-4">
      <div className="p-6 bg-white shadow-lg rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-[#493628] mb-4">Reset Password</h2>
        {message && <p className="text-center text-red-500">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full p-2 border rounded mb-3"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <p className=" text-[#493628] cursor-pointer underline " onClick={homePage}>Back to Home</p>
          <button
            type="submit"
            className="w-full bg-[#493628] text-white p-2 rounded hover:bg-[#AB886D] transition"
          >
            Reset Password
          </button>
         
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
