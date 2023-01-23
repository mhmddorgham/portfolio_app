import React from 'react'
import styles from '../style'
import heroImg from "../imgs/heroTwo.png"
import Button from './Button'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col sm:py-10 py-6`}>
      {/* Left side of the dive */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* 20% Discount part: */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ">
          <p className={`font-poppins font-normal text-dimWhite text-[27px] leading-[30.8px] ml-2`} >
            Hi, I am Mohamed
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[65px] text-[42px] text-white ss:leading-[100px] leading-[75px]'>
            I am A Full Stack Web Developer
          </h1>

        </div>

        <div className='flex justify-between items-center gap-5'>
          <Button
            value="Download CV" />
          <Button
            value="About Me" />
        </div>
      </div>


      {/* Right side of the side */}
      <div className={` flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
        <div className='absolute z-[2] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
      </div>


    </section>
  )
}

export default Hero