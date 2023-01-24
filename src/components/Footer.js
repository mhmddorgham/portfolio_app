import React from 'react'
import { socialMedia } from '../constants/constants'

const Footer = () => {
  const currYear = new Date().getFullYear()
  return (
    <footer className='py-5'>
      <div className=' w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-white'>
        <p className='font-normal font-poppins text-[18px] leading-[27px] text-white text-center'> {currYear} &copy; Mohammed Dorgham </p>
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, i) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${i !== socialMedia.length ? "mr-6" : "mr-0"}`}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer