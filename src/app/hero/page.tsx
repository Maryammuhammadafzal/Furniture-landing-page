import Header from '@/components/Header';
import React from 'react'

const HeroPage = () => {
  return (
    <div className='w-full h-screen relative flex justify-center items-center'>
          <div className="header w-full h-[140px] absolute top-0 left-0">
        <Header />
      </div>
      
    </div>
  )
}

export default HeroPage ;
