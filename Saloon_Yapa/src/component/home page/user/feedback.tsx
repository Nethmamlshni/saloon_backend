import { motion } from 'framer-motion';

const Feedback = () => {
  return (
    <motion.section
      id="feedback"
      className="mt-16 p-8 rounded-lg shadow-lg mx-4 bg-white text-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }} // Ensures animation runs every time it comes into view
    >
      <h2 className="text-3xl font-semibold mb-6 text-center">We Value Your Feedback</h2>

      <motion.div
        className="flex flex-col items-center space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="text-center text-lg mb-4">Please let us know how we can improve our service. Your feedback is important to us!</p>

        {/* Feedback Form */}
        <motion.form
          className="w-full max-w-lg space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-sm font-semibold">Name:</label>
            <input
              type="text"
              id="name"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-semibold">Email:</label>
            <input
              type="email"
              id="email"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="feedback" className="text-sm font-semibold">Your Feedback:</label>
            <textarea
              id="feedback"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Share your thoughts here"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md mt-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Submit Feedback
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Feedback;
