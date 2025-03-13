import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <div className="text-center mb-6">
        <p>If you have any questions or want to book an appointment, feel free to contact us!</p>
      </div>

      <motion.div
        className="flex justify-center space-x-8 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >

        {/* WhatsApp Link */}
        <motion.a
          className="text-xl"
          whileHover={{ scale: 1.2 }}
        >
          <i className="fab fa-whatsapp"></i>  076 8511 941 | 078 863 9589 
        </motion.a>
      </motion.div>
      <motion.div
      className="flex justify-center space-x-8 mb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      
      {/* WhatsApp Group Link */}
      <motion.a
        href="https://chat.whatsapp.com/YourGroupLinkCode" // Replace with your WhatsApp group link
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl flex items-center space-x-2"
        whileHover={{ scale: 1.2 }}
      >
         <i className="fab fa-whatsapp text-green-500 text-3xl" />
        <span>Join Now</span>
      </motion.a>
    </motion.div>


      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>We are located at:</p>
        <p>| Rabukpotha road,Near to Knuckles A Hostal |</p><p> | Open Daily | </p>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
