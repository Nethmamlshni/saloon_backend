import React from "react";
import { motion } from "framer-motion";

const serviceList = [
  { name: "Haircuts", price: 300 },
  { name: "Shaving", price: 200 },
  { name: "Hair & Beard Cutting", price: 400 },
  { name: "Outline Cut", price: 150 },
  { name: "Haircut & Massage", price: 400 },
  { name: "Oil Massage ", price: 200 },
  { name: "Facial Scrub", price:300},
  { name: "Toner Face Cleaner", price: 350 },
  { name: "Remove Dead Skin Cells", price: 400 },
  { name: "Hair Cream Massage", price: 350 },
];

const PriceList: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="bg-[#AB886D] text-[#FBFBFB] p-4 rounded-lg shadow-lg flex flex-col items-center mt-6">
        <h2 className="text-xl font-bold mb-4 text-center">Services We Offer</h2>
        <ul className="space-y-4 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-4 lg:space-y-0 text-lg">
          {serviceList.map((service, index) => (
            <motion.li
              key={index}
              className="flex justify-between p-3 bg-[#7C5A44] rounded-lg shadow-md cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span>{service.name}</span>
              <span>Rs.{service.price}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default PriceList;
