'use client';

import { motion } from 'framer-motion'
import Skill from './Skill';
import React from 'react'
import { Skill as SkillType } from '@/typings';

type Props = {
  skills: SkillType[]
}

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex relative flex-col text-center md:text-left xl:flex-row
      max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className='absolute top-20 sm:top-10 uppercase text-[#333333] text-2xl'>
        <span className={'tracking-[20px]'}>Skill</span><span>s</span>
      </h3>

      <h3 className='absolute top-32 sm:top-24 uppercase tracking-[3px] text-[#333333] text-sm'>
        Hover over a skill for current proficiency
      </h3>

      <div className='grid grid-cols-5 gap-5 py-32'>
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  )
}