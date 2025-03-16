import { useState } from "react";
import axios from "axios";

interface RegisterProps {
  onSuccess: () => void;
}

function Register({ onSuccess }: RegisterProps) {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    TPNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = e.target.value;
    
    // Check if password and confirm password match during typing
    if (registerData.password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError(null); // Clear error if passwords match
    }

    setRegisterData({ ...registerData, confirmPassword });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (registerData.password !== registerData.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/users/register", registerData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Registration Success:", response.data);
      alert("Registration successful. Please login.");
      onSuccess();
    } catch (error: any) {
      console.error("Registration Error:", error);
      setError(error.response?.data?.error || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center  ">
      <div className="  rounded-lg   w-full">
        <h2 className="text-2xl font-bold text-center text-[#493628] mb-4">Register</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Full Name"
            className="w-full p-2 border rounded mb-3"
            value={registerData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-3"
            value={registerData.email}
            onChange={handleChange}
            required
          />
         
          <input
            type="password"
            name="password"
            placeholder="Password (min 8 chars)"
            className="w-full p-2 border rounded mb-3"
            value={registerData.password}
            onChange={handleChange}
            required
            minLength={8}
          />  
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-2 border rounded mb-3"
            value={registerData.confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            minLength={8}
          />
          <input
            type="text"
            name="TPNumber"
            placeholder="TP Number"
            className="w-full p-2 border rounded mb-3"
            value={registerData.TPNumber}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-[#493628] text-white p-2 rounded hover:bg-[#AB886D] transition"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
