'use client';

import { urlFor } from '@/sanity';
import { PageInfo } from '@/typings';
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center 
      md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-20 sm:top-10 uppercase text-[#333333] text-2xl'>
        <span className={'tracking-[20px]'}>Abou</span><span>t</span>
      </h3>

      <motion.img
        initial={{
          x: -200
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          x: 0
        }}
        viewport={{
          once: true
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
        object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
      />

      <div className="max-h-[350px] overflow-y-auto scroll-smooth scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#004D99]/80">
        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-2xl font-semibold'>Here is a <span className='underline decoration-[#004D99]/50'>little</span> background</h4>
          <p className='text-base'>
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  )
}