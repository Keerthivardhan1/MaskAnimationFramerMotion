'use client'
import { useState } from 'react';  
import useMousePosition from './utils/useMousePosition';
import {motion} from 'framer-motion'
import git from '../public/git.svg'
import repo from '../public/repo.svg'
import Image from 'next/image';

export default function Home() {

  const {x,y} = useMousePosition()

  const [isHovered , setIsHovered] = useState(false);

  const size = isHovered?300:40



  return (
    <main className="main">
      <motion.div 
        className="mask"
        animate ={{
          WebkitMaskPosition : `${x - (size/2)}px ${y-(size/2)}px `,
          WebkitMaskSize : `${size}px`
        }}
        transition = {{type:"tween" , ease:"backOut" , duration:0.8}}
      >
          <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
            A Full Stack Developer - with Decent skills, love building unique products and designs..
          </p>
      </motion.div>

      <div className="body">
        <p>I'm a <span>Keerthivardhan</span> web designer with strong focus on producing high quality & impactful digital experience.</p>
      </div>
      <footer className="footer flex flex-col justify-center gap-5">
    <span >Inspired form <span className='font-bold'>Olivier Larose</span> </span>
    <div  className="flex justify-center gap-10">
      <a href="https://github.com/Keerthivardhan1/MaskAnimationFramerMotion">
      <Image 
                    src={repo}
                    height="30"
                    width="30"
                    alt="REPO"
                /> 
      </a>
      <a href="https://github.com/Keerthivardhan1">
      <Image 
                    src={git}
                    height="30"
                    width="30"
                    alt="GitHub Profile"
                /> 
      </a>
    </div>
  </footer>
    </main>
   
  );
}
