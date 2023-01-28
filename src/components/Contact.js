import React, { useState } from 'react'
import Bar from './Bar'
import { BsFillPersonFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import Swal from 'sweetalert2'
const Contact = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handelClick = (e) => {
    setIsClicked((prev) => !prev)
    e.preventDefault()


  }

  (async () => {
    if (isClicked) {
      Swal.fire(
        'Good job!',
        'We will contact you shortly',
        'success'
      )
    }
  })()



  return (

    <div>
      {/* SectionName */}
      <Bar />
      <div id='Contact' className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[40px] text-[25px] text-white ss:leading-[100px] leading-[75px]'>
          Contact
        </h1>
      </div>
      <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
        <form >
          {/* Name Form */}
          <label for="website-admin" class="block font-poppins text-[20px] font-medium text-gray-900 dark:text-white">Name</label>
          <div class="relative mb-6 py-6">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BsFillPersonFill className='text-white text-[18px]' />
            </div>
            <input type="text" id="website-admin" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required />
          </div>


          {/* Email Form */}
          <label for="input-group-1" class="block font-poppins text-[20px] font-medium text-gray-900 dark:text-white">Your Email</label>
          <div class="relative mb-6 py-6">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FiMail className='text-white text-[18px]' />
            </div>
            <input type='email' id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" required />
          </div>

          <button type='submit' onClick={handelClick} className='py-2 px-4 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none mt-3 rounded-xl' >Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact