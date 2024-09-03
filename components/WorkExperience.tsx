'use client';

import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'
import type { Experience } from '@/typings';

type Props = {
  experiences: Experience[]
}

export default function Experience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
      max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-20 sm:top-10 uppercase text-[#333333] text-2xl'>
        <span className={'tracking-[20px]'}>Work Experienc</span><span>e</span>
      </h3>

      <div className='w-full h-3/4 sm:h-4/5 flex space-x-5 overflow-x-scroll scroll-smooth p-10 snap-x snap-proximity
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#004D99]/80'>
        {experiences?.map(experience => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  )
}