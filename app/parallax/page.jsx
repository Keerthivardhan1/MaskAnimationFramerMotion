"use client"
import { useScroll, useTransform , motion } from 'framer-motion'
import  { useRef , useEffect } from 'react'
import Word from '../components/Paragraph';
import WordsAnime from '../paraAnime/WordsAnime';
import Image from 'next/image';
import {java} from '../../public/next.svg'


function page() {

    const container = useRef();


    const {scrollYProgress} = useScroll({
        target:container,
        offset : ["start start" , "end end"]
    })

    // useEffect(()=>{
    //     console.log(scrollYProgress);
    // }, [scrollYProgress])


  return (
    <main ref={container} className=' relative h-[200vh] font-bold  text-bolder ' >
        <span className=' absolute top-5 left-5  text-white z-10 text-5xl ' >KV</span>
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress}/>
        <WordsAnime/>
    </main>
  )
}

const Section1 =({scrollYProgress})=>{
    const scale = useTransform(scrollYProgress , [0,1] , [1 , 0.8]) // transform 
    // const opacity = useTransform(scrollYProgress , [0,0.5] , [1 , 0.4]) // opacity
    const rotate = useTransform(scrollYProgress , [0,1] , [0, -5])

    
    return(
        <motion.div style={{scale , rotate}} className='sticky rounded-md top-0 h-screen bg-black-900   flex flex-col text-white justify-center items-center
        pb-[10vh]' >
            <div className=' flex justify-between items-center gap-4'>
            <div className='flex flex-col items-center justify-center'>
            <p className='text-7xl'>Keerthivardhan</p>
            <span className='font-bold text-3xl '>Full Stack Developer</span>
            </div>
            <div className='border-3 border-spacing-0 w-1/3 h-3/4  border-white'> 
                <Image 
                 src={java}
                alt="GFG logo served with static path of public directory"
                height="100"
                width="400"
                />
            </div  >



            </div>
        </motion.div>
    )
}

const Section2 =({scrollYProgress})=>{
    const scale = useTransform(scrollYProgress , [0, 1] , [0.8 , 1])
    const rotate = useTransform(scrollYProgress , [0, 1] , [7 , 0])
    return(
        <motion.div style={{scale , rotate}} className='relative rounded-lg h-screen bg-zinc-800  text-[5rem]  flex flex-col text-white justify-center items-center
        pb-[10vh]' >
            
            <div>
            <p>Using</p>
            <p>Framer Motion</p>
            </div>

        </motion.div>
    )
}



export default page