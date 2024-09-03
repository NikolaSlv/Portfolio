import { urlFor } from '@/sanity'
import { Experience } from '@/typings'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className='text-white flex flex-col rounded-sm items-center space-y-7 flex-shrink-0
    w-[400px] md:w-[600px] xl:w-[800px] snap-center bg-[#5C7693] p-8 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-y-auto scrollbar-thin 
    scrollbar-track-gray-400/20 scrollbar-thumb-[#004D99]/80'>

      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 xl:w-[300px] xl:h-[200px] object-cover'
        src={urlFor(experience.companyImage).url()}
        alt=""
      />

      <div className='px-0 md:px-10 mx-auto w-full max-w-3xl'>
        <h4 className='text-2xl font-light'>{experience?.jobTitle}</h4>
        <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
        <div className='flex space-x-2 my-2'>
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className='w-10 h-10 rounded-full'
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>
        <p className='uppercase py-5 text-white'>
          {new Date(experience.dateStarted).toLocaleDateString(undefined, { year: 'numeric', month: 'long' })} - {" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toLocaleDateString(undefined, { year: 'numeric', month: 'long' })}
        </p>

        <div>
          <ul className="list-disc space-y-4 ml-5 text-base">
            {experience.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
