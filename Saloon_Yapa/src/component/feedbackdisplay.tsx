import { motion } from 'framer-motion';

const DisplayFeedback = () => {
  const feedbackData = [
    "Great service! Will definitely come again.",
    "Loved the ambiance and the staff was friendly!",
    "The experience was okay, but the wait was long.",
    "Amazing experience! Highly recommend this place."
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
        className="space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Loop through the feedback data */}
        {feedbackData.map((feedback, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-4 rounded-md shadow-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.3 }} // Staggered animation for each feedback
          >
            <p className="text-lg">{feedback}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default DisplayFeedback;
