"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import "../nextPage/pageStyle.css"

export default function page() {
  const [isOpen, setIsOpen] = useState(false);
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" }
    },
    closed: { opacity: 0, y: 30, transition: { duration: 0.1 } }
  };
  return (
    <motion.div className="  bg-white text-white flex justify-center  items-center  w-screen h-screen"
    animate={isOpen ? "open" : "closed"}
    >
      <div className="w-1/3 menu">
        <div className=" w-full flex  justify-between items-center rounded-lg ">
          
          <button onClick={()=>setIsOpen(!isOpen)}>
            <svg width="15" height="15" color="#fff" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </button>
        </div>
        <div 
        className="w-full  rounded-lg p-2"
        >
          <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
              }
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                duration: 0.2
              }
            }
          }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            <motion.li variants={itemVariants}>list 1</motion.li>
            <motion.li variants={itemVariants}>list 2</motion.li>
            <motion.li variants={itemVariants}>list 3</motion.li>
            <motion.li variants={itemVariants}>list 4</motion.li>
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
}
