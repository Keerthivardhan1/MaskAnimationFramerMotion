"use client"
import { useScroll , motion, useTransform} from "framer-motion";
import { useRef } from "react"


export default function Word({para}) {
    const container = useRef();
    const {scrollYProgress} = useScroll({
        target:container,
        offset:["start 0.9 " , "start 0.2"]     // 0.9 is trigger the animaton at 90% starting from top  0.2 == > opacuty will be 1 at 20% starting from top
    });

    

    const words = para.split(" ");


  return (
    <p 
    ref={container} 
    className="para"
    // style={{opacity:scrollYProgress}}
    >
        {
            words.map((word , i)=>{
                const start = i/words.length;
                const end = start + (1/words.length)
               return <IndWord key={i} range={[start , end]} progress={scrollYProgress} value={word} />
            })
        }
    </p>
  )
}

const IndWord = ({range , progress , value})=>{
    const opacity = useTransform(progress , range , [0,1]);
    return(
        <span className="word">
            <span className="wordShadow" >{value}</span>
            <motion.span style={{opacity}} className="word" >{value}</motion.span>
        </span>
    )
}
