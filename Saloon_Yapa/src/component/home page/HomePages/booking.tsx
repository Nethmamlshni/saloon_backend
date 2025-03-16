import { useState } from "react";
import axios from "axios";

interface BookingProps {
  onSuccess?: () => void; // Optional callback for success
}

function Booking({ onSuccess }: BookingProps) {
  const [bookingData, setBookingData] = useState({
    customerName: "", // Changed 'name' to 'customerName' to match backend
    phone: "",
    date: "",
    time: "",
    note: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    console.log("Sending booking data:", bookingData);

    // Get token from localStorage
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/bookings/booking", 
        bookingData, 
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,  // Add the token in the header
          },
        }
      );

      console.log("Booking Success:", response.data);
      alert("Booking Submitted Successfully!");

      // Reset form
      setBookingData({
        customerName: "",
        phone: "",
        date: "",
        time: "",
        note: "",
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (err: any) {
      console.error("Booking Error:", err);
      setError(err.response?.data?.error || "Failed to submit booking. Please try again.");
      alert("Failed to submit booking. first you can log the web side .");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" text-[#0c0707] p-4 rounded-lg shadow-lg flex flex-col items-center mt-12 ">
      <h2 className="text-xl font-bold mb-4">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
        <input
          type="text"
          name="customerName"
          placeholder="Your Name"
          className="p-3 m-2 border rounded-lg w-60"
          value={bookingData.customerName}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="p-3 m-2 border rounded-lg w-60"
          value={bookingData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          className="p-3 m-2 border rounded-lg w-60"
          value={bookingData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          className="p-3 m-2 border rounded-lg w-60"
          value={bookingData.time}
          onChange={handleChange}
          required
        />
        <textarea
          name="note"
          placeholder="Additional Notes"
          className="p-3 m-2 border rounded-lg w-60"
          value={bookingData.note}
          onChange={handleChange}
        />

        <button
          type="submit"
          className=" text-[#080101] p-3 m-2 rounded-lg hover:bg-[#D6C0B3] transition border-1"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Book Now"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}

export default Booking;
