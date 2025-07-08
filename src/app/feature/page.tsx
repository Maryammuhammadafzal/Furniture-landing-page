import FeaturedProduct from '@/components/FeaturedProduct'
import React from 'react'

const FeaturedPage = () => {
  return (
     <div className="w-full relative h-auto md:py-20 sm:py-20 py-10 flex flex-col justify-center items-center">
      <h2 className="max-w-4xl font-mono md:text-6xl sm:text-5xl text-4xl text-primary text-center">
        Our Featured Products
      </h2>
      <div className="xl:w-[90%] w-full px-3 py-20 h-auto flex justify-center items-center">
        <FeaturedProduct/>
      </div>
    </div>
  )
}

export default FeaturedPage
