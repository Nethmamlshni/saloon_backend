import React from "react";
import { motion } from "framer-motion";
import Navbar from "./navBar";

const services = [
  { name: "Haircuts", price: "Rs.300", image: "https://img.freepik.com/free-photo/young-man-barbershop-trimming-hair_1303-26254.jpg?t=st=1742272524~exp=1742276124~hmac=0e9ddecd5efb7cfe11563c728e1487b009d6d745432a439141b433ea1fa7de5a&w=996" },
  { name: "Hair & Beard Cutting", price: "Rs.400", image: "https://img.freepik.com/free-photo/concept-barbershop-elegant-man-gets-hair-trimming-from-female-hairdresser_613910-15091.jpg?t=st=1742272574~exp=1742276174~hmac=ee6f46c74a7f92837c2c7ca8510783837e23ca6269740a17725fb5a0a1fff9cb&w=996" },
  { name: "Shaving", price: "Rs.200", image: "https://img.freepik.com/free-photo/portrait-pensive-man-with-receive-moustache-beard-trimming-procedure-barbershop_613910-15051.jpg?t=st=1742272599~exp=1742276199~hmac=1dad5cac4f164a68212c774c8c158459907e717d481ffcfc44601a348c03d08d&w=996" },
  { name: "Outline Cut", price: "Rs.150", image: "https://img.freepik.com/free-photo/side-view-costumer-beauty-salon_23-2148242855.jpg?t=st=1742272646~exp=1742276246~hmac=e68aaf0e684fb9df9bb77650d00d4b43256bb8227d50c110fc6e874ad7423f51&w=996" },
  { name: "Haircut & Massage", price: "Rs.400", image: "https://img.freepik.com/free-photo/customer-getting-wash-after-haircut_23-2148256876.jpg?t=st=1742272678~exp=1742276278~hmac=67def9cf0a3676fc8ceb07a2c01b3fec2ee6212499805fd5582be1f8f6a1203b&w=996" },
  { name: "Oil Massage", price: "Rs.200", image: "https://img.freepik.com/free-photo/hairstylist-looking-costumer-mirror_23-2148242869.jpg?t=st=1742272958~exp=1742276558~hmac=afb29492337d8d493ffa34586b7f15cfb32fdd69827035460ffe713807343f55&w=996" },
  { name: "Facial Scrub", price: "Rs.300", image: "https://img.freepik.com/free-photo/relaxed-man-having-thai-herbal-head-massage-wellness-center_637285-1715.jpg?t=st=1742272918~exp=1742276518~hmac=fa17fad648b87aebbbf257c86723cad6763d84da849d69a0eb662600bfdfe138&w=996" },
  { name: "Toner Face Cleaner", price: "Rs.350", image: "https://img.freepik.com/free-photo/barber-using-shaving-cream-contour-male-customer-s-beard_23-2148985735.jpg?t=st=1742272886~exp=1742276486~hmac=468824f1e426992b5550623868b57528752f2c59394bd1db6702d4661314b8e6&w=996" },
  { name: "Remove Dead Skin Cells", price: "Rs.400", image: "https://img.freepik.com/free-photo/high-angle-man-getting-groomed_23-2150668469.jpg?t=st=1742272863~exp=1742276463~hmac=6e915e8ae9d92933c1e2f6bc31caae7693f8308e1dbfb7aa493013a7505aed68&w=996" },
  { name: "Hair Cream Massage", price: "Rs.350", image: "https://img.freepik.com/free-photo/unrecognizable-barber-washing-head-client_23-2147737055.jpg?t=st=1742272727~exp=1742276327~hmac=b3179e5284dd336a38c8f8f29be5efa44b5ee74e2a8bfb71f39314340c48b381&w=996" },
];

const PriceList = () => {
  return (
    <div className="w-full bg-black text-black pt-6 h-screen shadow-lg flex flex-col  ">
      <Navbar />
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black text-white p-6 rounded-lg shadow-lg mt-6"
    >
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="text-2xl  mb-6 text-center mt-6 font-serif"
      >
        Price List
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img 
              src={service.image} 
              alt={service.name} 
              className="w-full h-40 object-cover "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <div className="p-4 text-center">
              <motion.h3 
                className="text-lg font-semibold font-serif"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {service.name}
              </motion.h3>
              <motion.p 
                className="text-blue-400 font-serif"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {service.price}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
    </div>
  );
};

export default PriceList;
