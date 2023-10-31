"use client";
import React from 'react'
import Image from 'next/image'
import CustemButton from './CustemButton';

const Hero = () => {
  const handleScrolle=()=>{
    return console.log('handlescrolle')
  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>Find, book ,or rent a car -quicly an easely!</h1>
        <p className="hero__subtitle">
          Streamline your car rentale experience with our effortless booking process.
        </p>
        <CustemButton 
        title="explore Cars"
        ContainerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScrolle}/>
      </div>
    </div>
  )
}

export default Hero
