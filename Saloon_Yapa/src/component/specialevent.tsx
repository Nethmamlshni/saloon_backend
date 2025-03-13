import { motion } from 'framer-motion';

const EventPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      {/* Featured Image */}
      <motion.section
        className="featured-image mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <img
          src="https://via.placeholder.com/1200x600"
          alt="Event Featured Image"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </motion.section>
    </motion.div>
  );
};

export default EventPage;
