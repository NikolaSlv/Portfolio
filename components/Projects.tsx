'use client';

import { urlFor } from '@/sanity';
import { Project } from '@/typings';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left
      md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-20 sm:top-10 uppercase text-[#333333] text-2xl'>
        <span className={'tracking-[20px]'}>Project</span><span>s</span>
      </h3>

      <div
        ref={scrollContainerRef}
        className='relative w-full flex overflow-x-scroll scroll-smooth overflow-y-hidden snap-x
      snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#004D99]/80'
      >
        {projects.map((project, i) => (
          <div
            key={project._id}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
            items-center justify-center p-20 md:p-44 h-screen'
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0
              }}
              className='w-100 h-auto sm:h-64'
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=''
            />

            <div className='space-y-2 px-0 md:px-10 max-w-3xl'>
              <h4 className='text-2xl font-semibold text-center'>
                <span className='underline decoration-[#004D99]/50'>
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className='flex items-center space-x-2 justify-center'>
                {project?.technologies.map((technology) => (
                  <img
                    className='w-5 h-5'
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=''
                  />
                ))}
              </div>

              <div className="max-h-[200px] overflow-y-auto scroll-smooth scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#004D99]/80">
                <p className='text-base text-center md:text-left'>
                  {project?.summary} <br/>
                  Visit at <a className='underline' href={project?.linkToBuild} target="_blank" rel="noopener noreferrer">{project?.linkToBuild}</a>.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        className='w-10 z-30 font-bold absolute top-1/2 left-5 sm:left-10 transform -translate-y-1/2 bg-[#004D99] text-white p-2 rounded-full hover:bg-[#003366] transition-colors'
        onClick={scrollLeft}
      >
        &lt;
      </button>

      {/* Right Arrow */}
      <button
        className='w-10 z-30 font-bold absolute top-1/2 right-5 sm:right-10 transform -translate-y-1/2 bg-[#004D99] text-white p-2 rounded-full hover:bg-[#003366] transition-colors'
        onClick={scrollRight}
      >
        &gt;
      </button>

      <div className='w-full absolute top-[30%] bg-[#004D99]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  );
}
