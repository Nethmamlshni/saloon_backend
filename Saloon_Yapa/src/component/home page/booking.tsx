import React, { useState } from "react";
import { motion } from "framer-motion";
function Booking () {
      const [booking, setBooking] = useState({
        name: "",
        phone: "",
        date: "",
        time: "",
        note: "",
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBooking({ ...booking, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Booking Details:", booking);
        alert("Booking Submitted!");
      };
    
    return (
        <>
        {/* Booking Form */}
      <motion.div 
        className="bg-[#AB886D] text-[#FBFBFB] p-4 rounded-lg shadow-lg flex flex-wrap justify-center items-center mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <input type="text" name="name" placeholder="Your Name" className="p-3 m-2 border rounded-lg w-60" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" className="p-3 m-2 border rounded-lg w-60" onChange={handleChange} required />
        <input type="date" name="date" className="p-3 m-2 border rounded-lg w-60" onChange={handleChange} required />
        <input type="time" name="time" className="p-3 m-2 border rounded-lg w-60" onChange={handleChange} required />
        
       <button type="submit" className="bg-[#493628] text-[#FBFBFB] p-3 m-2 rounded-lg hover:bg-[#D6C0B3]" onClick={handleSubmit}>Book Now</button>
      </motion.div>
        </>
    )}
    export default Booking;