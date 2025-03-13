import React from "react";
import { motion } from "framer-motion";

const PriceList: React.FC = () => {
  return (
    <div>
      
      <motion.div 
        className="bg-[#AB886D] text-[#FBFBFB] p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
      >
        <ul className="space-y-4 text-lg">
          <li className="flex justify-between"><span>Shaving</span><span>$15</span></li>
          <li className="flex justify-between"><span>Hair & Beard Cutting</span><span>$30</span></li>
          <li className="flex justify-between"><span>Outline Cut</span><span>$20</span></li>
          <li className="flex justify-between"><span>Haircut & Massage</span><span>$35</span></li>
          <li className="flex justify-between"><span>Oil Massage Facial Scrub</span><span>$40</span></li>
          <li className="flex justify-between"><span>Toner Face Cleaner</span><span>$25</span></li>
          <li className="flex justify-between"><span>Removes Dead Skin Cells</span><span>$30</span></li>
          <li className="flex justify-between"><span>Hair Cream Massage</span><span>$28</span></li>
        </ul>
      </motion.div>

    </div>
  );
};

export default PriceList;
