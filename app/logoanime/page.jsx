'use client'
import React from 'react'
import {motion} from 'framer-motion'

export default function page() {
  return (
    <main className='h-full w-full '>
        <motion.div 
        className='herotext'
         initial={{ opacity: 1, scale: 2  }}
         animate={{ opacity: 1, scale: 1 , top:30 , left:30  }}
         transition = {{type:"linear" , ease:"backOut" , duration:2 , delay:2}}
        >
            <h1 className='font-bold  text-3xl '>Hello</h1>
        </motion.div>
    </main>
  )
}
