import { useState } from "react";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [TPNumber, setTPNumber] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    try {
      const response = await axios.post("http://localhost:3000/api/users/forgot-password", { email, TPNumber }, {
        headers: { "Content-Type": "application/json" },
      });

      setMessage(response.data.message);
    } catch (error: any) {
      setMessage(error.response?.data?.error || "Failed to send reset email.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F5F5F5] p-4">
      <div className="p-6 bg-white shadow-lg rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-[#493628] mb-4">Forgot Password</h2>
        {message && <p className="text-center text-red-500">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter your phone number"
            className="w-full p-2 border rounded mb-3"
            value={TPNumber}
            onChange={(e) => setTPNumber(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-[#493628] text-white p-2 rounded hover:bg-[#AB886D] transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
