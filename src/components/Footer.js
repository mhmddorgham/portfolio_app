import React from 'react'
import { AiFillTwitterCircle, AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  const currYear = new Date().getFullYear()
  return (
    <footer className='py-5'>
      <div className=' w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-white'>
        <p className='font-normal font-poppins text-[18px] leading-[27px] text-white text-center'> {currYear} &copy; Mohammed Dorgham </p>
        <div className='flex flex-row md:mt-0 mt-6 gap-4'>
          <AiFillFacebook className='text-white text-[25px]' />
          <AiFillTwitterCircle className='text-white text-[25px]' />
          <AiFillInstagram className='text-white text-[25px]' />
          <AiFillLinkedin className='text-white text-[25px]' />
        </div>
      </div>
    </footer>
  )
}

export default Footer