import { useState } from "react";
import axios from "axios";

function Register() {
  const [registerData, setRegisterData] = useState({ name: "", email: "", password: "" });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  // Send Register Data to Backend
  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/users/register", registerData);
      console.log("Registration Successful:", response.data);
      alert("Registration successful!"); // Display success message
    } catch (error) {
      console.error("Registration Failed:", error);
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input type="text" name="name" placeholder="Full Name" className="w-full p-2 border mb-3" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" className="w-full p-2 border mb-3" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" className="w-full p-2 border mb-3" onChange={handleChange} />
      <button className="w-full bg-[#493628] text-white p-2 rounded hover:bg-[#AB886D] transition" onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
