'use client';

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  pageInfo: PageInfo;
}

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I am ${pageInfo?.name}`,
    ],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        className='relative rounded-fill h-52 w-52 mx-auto object-cover'
        src={urlFor(pageInfo?.heroImage).url()}
        width={800}
        height={800}
        alt="A picture of Nikola"
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase pb-2'>
          <span className="tracking-[15px]">{pageInfo?.role.slice(0, -1)}</span>
          <span>{pageInfo?.role.slice(-1)}</span>
        </h2>
        <h1 className='text-3xl lg:text-4xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#004D99' />
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton mx-1 my-1'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton mx-1 my-1'>Work Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton mx-1 my-1'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton mx-1 my-1'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}