import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Card = (props) => {
  return (

    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <a href={props.visitLink}>
        <img class="rounded-t-lg" src={props.img} alt="" />
      </a>
      <div class="p-5">
        <a href={props.visitLink}>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 py-5 ">{props.description}</p>

        <div className='flex sm:flex-row flex-col justify-center items-center gap-10'>
          <a href={props.srcLink} className=' inline-flex gap-x-1  py-2 px-3 border-solid border-white border-[3px] hover:text-primary  hover:bg-white font-poppins font-medium text-[15px] text-white outline-none mt-10 rounded-xl transition duration-0 hover:duration-150'>
            Source
            <BsArrowRight className='sm:text-[24px] text-[19px] font-bold ' />
          </a>
          <a href={props.visitLink} className=' inline-flex gap-x-1  py-2 px-3 border-solid border-white border-[3px] hover:text-primary  hover:bg-white font-poppins font-medium text-[15px] text-white outline-none mt-10 rounded-xl transition duration-0 hover:duration-150'>
            Visit
            <BsArrowRight className='sm:text-[24px] text-[19px] ' />
          </a>
        </div>
      </div >
    </div >

  )
}

export default Card