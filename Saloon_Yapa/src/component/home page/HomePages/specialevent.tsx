import { motion } from "framer-motion";
import { useState } from "react";

const EventPage = () => {
  const images = [
    "/WhatsApp Image 2025-03-11 at 22.41.25.jpeg",
    "/WhatsApp Image 2025-03-11 at 22.42.21.jpeg",
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Function to go to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-6"
    >
      {/* Event Title */}
      <motion.h1
        className="text-xl font-bold text-center text-[#493628] mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Special Event Event
      </motion.h1>

      {/* Carousel Section */}
      <motion.div
        id="gallery"
        className="relative w-full"
        data-carousel="slide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* Only show the current image */}
          <motion.div
            key={currentIndex}
            className="absolute block w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={images[currentIndex]}
              alt={`Carousel Image ${currentIndex + 1}`}
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </motion.div>

      {/* Event Description */}
      <motion.p
        className="text-lg text-center text-[#7C5A44] mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        Because you deserve to shine wherever you go! At Saloon Yapa, we are here to make you look good and feel good.
      </motion.p>
    </motion.div>
  );
};

export default EventPage;
