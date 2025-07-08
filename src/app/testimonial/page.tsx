import TestimonialCard from '@/components/TestimonialCard'
import Image from 'next/image'
import React from 'react'

const TestimonialPage = () => {
  return (
     <div className="w-full relative h-auto md:py-20 sm:py-20 py-10 flex flex-col justify-center items-center">
      <div className='flex flex-col gap-2 w-auto items-center'>
        <h2 className="max-w-4xl font-mono md:text-6xl sm:text-5xl text-4xl text-primary text-center">
        Our Customers Says
      </h2>
      <Image src="/images/underline.png" alt="line" width={650} height={28} />
      </div>
      <div className="xl:w-[90%] w-full px-3 py-20 h-auto flex justify-center items-center">
        <TestimonialCard/>
      </div>
    </div>
  )
}

export default TestimonialPage
