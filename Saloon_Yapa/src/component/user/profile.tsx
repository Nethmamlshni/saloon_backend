import { motion } from 'framer-motion';

const UserProfile = () => {
  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        {/* Profile Picture */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />
        </motion.div>

        {/* User Information */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
          <p className="text-gray-600 mt-2">Full Stack Developer</p>
        </motion.div>

        <div className="mt-6">
          {/* User Details */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-center">
              <span className="mr-4 text-gray-600 font-semibold">Phone:</span>
              <p className="text-gray-800">+94 123 456 789</p>
            </div>
            <div className="flex items-center">
              <span className="mr-4 text-gray-600 font-semibold">Email:</span>
              <p className="text-gray-800">johndoe@email.com</p>
            </div>
          </motion.div>
        </div>

        {/* Button to Edit Profile */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <button
            className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
            onClick={() => alert('Edit Profile Clicked')}
          >
            Edit Profile
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UserProfile;
