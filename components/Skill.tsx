import { motion } from 'framer-motion'
import type { Skill } from '@/typings'
import React from 'react'
import { urlFor } from '@/sanity';

type Props = {
  skill: Skill;
  directionLeft?: boolean
}

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -50 : 50,
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={urlFor(skill?.image).url()}
        className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24
      xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out'/>
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
      ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24 xl:w-24 xl:h-24 
      rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
        </div>
      </div>
    </div>
  )
}