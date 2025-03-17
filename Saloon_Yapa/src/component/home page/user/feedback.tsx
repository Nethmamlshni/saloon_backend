import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import axios from "axios";

const Feedback = () => {
  const navigate = useNavigate(); // Initialize useNavigate for redirection
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rate: 0,
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [user, setUser] = useState<any>(null); // To store fetched user data
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("User not authenticated");
          return;
        }

        // Decode JWT token to get userId
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        const userId = decodedToken.userId;

        // Fetch user data using userId
        const response = await axios.get(`http://localhost:3000/api/users/user/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(response.data);
        setFormData((prevData) => ({
          ...prevData,
          email: response.data.email, // Set email from fetched data
        }));
      } catch (error: any) {
        setError(error.response?.data?.message || "Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleRating = (rate: number) => {
    if (rate >= 0 && rate <= 5) {
      setFormData({ ...formData, rate });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/feedbacks/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage("Thank you for your feedback!");
        setFormData({ name: "", email: user?.email || "", message: "", rate: 0 }); // Clear form
        alert("Feedback submitted successfully!");
        navigate("/profile"); // Redirect to /profile page using navigate
      } else {
        const errorData = await response.json();
        setResponseMessage(errorData.error || "Failed to submit feedback.");
      }
    } catch (error) {
      setResponseMessage("Error submitting feedback. Please try again.");
    }
  };

  return (
    <motion.section
      id="feedback"
      className="mt-16 p-8 rounded-lg shadow-lg mx-4 bg-white text-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <h2 className="text-3xl font-semibold mb-6 text-center">We Value Your Feedback</h2>

      <motion.div
        className="flex flex-col items-center space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="text-center text-lg mb-4">
          Please let us know how we can improve our service. Your feedback is important to us!
        </p>

        {/* Feedback Form */}
        <motion.form
          className="w-full max-w-lg space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-sm font-semibold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-semibold">
              Email:
            </label>
            {/* Display email as readonly */}
            <input
              type="email"
              id="email"
              className="p-2 border border-gray-300 rounded-md"
              value={formData.email}
              readOnly
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-sm font-semibold">
              Your Feedback:
            </label>
            <textarea
              id="message"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Share your thoughts here"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          {/* Rating Section */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="rate">
            </label>
            <div className="flex space-x-2">
              {/* Star Rating */}
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`p-2 ${formData.rate >= star ? "text-yellow-400" : "text-gray-300"}`}
                  onClick={() => handleRating(star)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md mt-4"
          >
            Submit Feedback
          </motion.button>
        </motion.form>

        {/* Response Message */}
        {responseMessage && <p className="text-center mt-4 text-lg">{responseMessage}</p>}
      </motion.div>
    </motion.section>
  );
};

export default Feedback;
