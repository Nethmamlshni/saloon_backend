import { useState } from "react";
import axios from "axios";

interface RegisterProps {
  onSuccess: () => void; // Callback for success
}

function Register({ onSuccess }: RegisterProps) {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Payload being sent:", registerData); // Log the request data

    try {
      const response = await axios.post("http://localhost:3000/api/users/register", registerData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Registration Success:", response.data);
      alert("Registration successful. Please login.");

      // Close the modal upon success
      onSuccess();
    } catch (error) {
      console.error("Registration Error:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Full Name"
          className="w-full p-2 border mb-3"
          value={registerData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border mb-3"
          value={registerData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 border mb-3"
          value={registerData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="w-full bg-[#493628] text-white p-2 rounded hover:bg-[#AB886D] transition">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
