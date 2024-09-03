'use client';

import { Social } from '@/typings';
import { motion } from 'framer-motion'
import Link from 'next/link';
import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {
  socials: Social[];
}

export default function Header({ socials }: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex flex-row items-center'>
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor='[#333333]'
            bgColor='transparent'
            target="_blank"
            rel="noopener noreferrer"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex flex-row items-center cursor-pointer'>
        <SocialIcon
          url='#contact'
          className='cursor-pointer'
          network='email'
          fgColor='[#333333]'
          bgColor='transparent'
        />
        <Link href='#contact'>
          <p className='uppercase hidden md:inline-flex text-sm text-[#333333]'>
            Get In Touch
          </p>
        </Link>
      </motion.div>
    </header>
  )
}