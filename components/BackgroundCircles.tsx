import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5
      }}
      className='relative flex justify-center items-center'>
      <div className="absolute border rounded-full mt-52 animate-ping border-[rgb(205,204,222)] h-[200px] w-[200px]" />
      <div className="absolute border rounded-full mt-52 animate-ping border-[rgb(205,204,222)] h-[300px] w-[300px]" />
      <div className="absolute border rounded-full mt-52 animate-ping border-[rgb(205,204,222)] h-[500px] w-[500px]" />
      <div className="absolute border rounded-full mt-52 animate-pulse border-[rgb(205,204,222)] opacity-20 h-[650px] w-[650px]" />
      <div className="absolute border rounded-full mt-52 border-[rgb(205,204,222)] h-[800px] w-[800px]" />
    </motion.div>
  )
}