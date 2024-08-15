"use client";
import { motion, useMotionValue, useScroll, useTransform , AnimatePresence, useIsPresent} from "framer-motion";
import Link from "next/link";

export default function page() {
  const list = { hidden: { opacity: 0 } };
  const item = { hidden: { x: -10, opacity: 0 } };
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);
  const { scrollYProgress } = useScroll()
  const visible = {opacity:1}
  const notvisible = {hidden : {x:10 , opacity:0}}
  const isPresent = useIsPresent();
  // const {x , y} = useFollow
  // const {scrollYProgress} =
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerDirection: -1
      }
    }
  }
  
  const item1 = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  } 


  return (
    <motion.div
      variants={container}
      className="flex flex-col gap-5 justify-center items-center  bg-zinc-50 text-black"
      // d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
      // style={{ pathLength: scrollYProgress }}
    >
      <motion.div
      className="progress-bar"
      style={{scaleX:scrollYProgress}}
      />
      <motion.div
        className="box rounded-lg h-screen bg-red-600"
        //  animate={{ x: 100 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        transition={{ type: "spring" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {/* Keerthi */}
      </motion.div>

      <Link href="/nextPage" >Go To Next Page</Link>
      <div className="h-screen">
        <motion.ul
          animate="hidden"
          variants={list}
          className=" font-extrabold text-2xl text-pretty "
        >
          <motion.li variants={item}>food</motion.li>
          <motion.li variants={item}>chiken</motion.li>
          <motion.li variants={item}>Matton</motion.li>
        </motion.ul>
      </div>
      <AnimatePresence>
      <div className="h-screen flex flex-col justify-center  items-center gap-4">
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{x:-10, opacity:0.2}}
        //   drag="x"
        //   style={{ x, opacity }}
          className="box w-1/3  rounded-2xl bg-orange-600"
        ></motion.div>
      </div>
      </AnimatePresence>
      <div className="border-3 flex felx-col justify-center items-center h-screen bg-violet-600 w-full ">
        <motion.div
          className="w-1/3 h-1/3 bg-white"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["10%", "10%", "50%", "50%", "10%"],
          }}
        />
      </div>

      <div className="h-[90vh] w-[90vw] rounded-xl bg-blue-600 flex justify-center items-center">
        <motion.div
        className="w-1/5 h-1/3 bg-white rounded-2xl"
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          viewport={{once:true}}
        />
      </div>

      <div>
        <div className="h-screen"></div>
        <div className=" relative h-[90vh] w-[90vw] rounded-2xl  bg-fuchsia-700 flex items-center justify-start">
        <motion.div 
        className="w-1/5 h-1/3 bg-white rounded-2xl mb-10 shadow-md "
        // variants={notvisible}
        initial={{opacity:0}}
        whileInView={{x:100, y:-50 , opacity:1}}
        
        ></motion.div>
        <motion.div 
        className=" absolute bottom-0 w-1/5 h-1/3 bg-white rounded-2xl "
        // variants={notvisible}
        initial={{opacity:0}}
        whileInView={{x:100, y:-50, animationDelay:100 , opacity:1}}
        
        ></motion.div>
        </div>
        <div className=" relative h-[90vh] w-[90vw] rounded-2xl flex  justify-center items-end p-5">

            <motion.div
            className="bg-pink-500 rounded-2xl privacy-screen"
            // initial={{width:80 , height:80 , radius:100}}
            // whileTap={{className:"absolute t-0 w-full h-full " , width:["100%"], height:["100%"] , top:0} }
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
            exit={{ scaleX: 1, transition: { duration: 1, ease: "circIn" } }}
            style={{ originX: isPresent ? 0 : 1 }}
            // className=""
            ></motion.div>
        </div>
      </div>
    </motion.div>
  );
}
