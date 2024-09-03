'use client';

import React from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from 'emailjs-com'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

type Props = {}

export default function ContactMe({ }: Props) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

    if (!confirm('Confirm form submission?')) return;
    emailjs.send(
      serviceID,    // EmailJS service ID
      templateID,   // EmailJS template ID
      {
        to_name: 'Nikola Slavchev',
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
      },
      userID        // EmailJS user ID (public key)
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Email sent successfully!');
        reset(); // Reset the form after successful submission
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        alert('Failed to send email.');
      });
  };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 sm:top-10 uppercase text-[#333333] text-2xl'>
        <span className={'tracking-[20px]'}>Contac</span><span>t</span>
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-2xl font-semibold text-center'>
          I have got just what you need.{" "}
          <span className='decoration-[#004D99]/50 underline'>Let's Talk.</span>
        </h4>

        <div className='space-y-5'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#004D99] h-7 w-7 animate-pulse' />
            <p className='text-xl'>+1 (737) 895-2450</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#004D99] h-7 w-7 animate-pulse' />
            <p className='text-xl'>nikolangsl@gmail.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-full sm:w-fit mx-auto'>
          <div className='flex flex-wrap space-x-0 sm:space-x-2'>
            <input {...register('name')} placeholder='Name' autoComplete="name" className='contactInput flex-1 mb-2 sm:mb-0' type="text" />
            <input required {...register('email')} placeholder='Email' autoComplete="email" className='contactInput flex-1' type="email" />
          </div>
          <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
          <textarea {...register('message')} placeholder='Message' className='contactInput' />
          <button type='submit' className='bg-[#004D99] py-5 px-10 rounded-md text-gray-100 font-bold text-lg'>Submit</button>
        </form>
      </div>
    </div>
  )
}