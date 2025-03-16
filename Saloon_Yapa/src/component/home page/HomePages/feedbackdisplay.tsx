import { motion } from 'framer-motion';

const DisplayFeedback = () => {
  const feedbackData = [
    {
      name: "John Doe",
      message: "I loved my haircut at Saloon Yapa! The stylist was amazing and really took the time to understand what I wanted.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "2025-03-12",
    },
    {
      name: "Jane Smith",
      message: "The ambiance was so relaxing! My facial was so rejuvenating, and I felt like I was treated like royalty.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/46.jpg",
      date: "2025-03-10",
    },
    {
      name: "Bob Johnson",
      message: "Service was okay, but I had to wait a bit longer than expected. The staff was friendly though.",
      rating: 3,
      avatar: "https://randomuser.me/api/portraits/men/21.jpg",
      date: "2025-03-08",
    },
    {
      name: "Emily Davis",
      message: "Had an amazing massage! The best experience at a salon I've ever had. Highly recommend it to everyone!",
      rating: 3,
      avatar: "https://randomuser.me/api/portraits/women/15.jpg",
      date: "2025-03-05",
    }
  ];

  return (
    <motion.section
      id="feedback"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }} // Animates every time it comes into view
    >
      <motion.div
        className="flex space-x-8 overflow-x-auto py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Loop through the feedback data */}
        {feedbackData.map((feedback, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex-none w-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.3 }} // Staggered animation for each feedback
          >
            <div className="flex items-center space-x-4">
              <img
                src={feedback.avatar}
                alt="User Avatar"
                className="w-12 h-12 rounded-full border-2 border-gray-200"
              />
              <div>
                <h4 className="font-semibold text-lg">{feedback.name}</h4>
                <p className="text-gray-500 text-sm">{feedback.date}</p>
              </div>
            </div>
            <p className="text-lg mt-4">{feedback.message}</p>
            <div className="flex items-center mt-2">
              {/* Display rating stars */}
              {[...Array(feedback.rating)].map((_, starIndex) => (
                <svg
                  key={starIndex}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15.27l4.95 2.61-1.26-5.27L18 7.74l-5.39-.47L10 2 7.39 7.27 2 7.74l3.31 4.87-1.26 5.27L10 15.27z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default DisplayFeedback;
