import React from 'react'
import Bar from './Bar'
import { FaReact, FaCss3, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const Technologies = () => {
  return (
    <div id='Skills'>
      {/* SectionName */}
      <Bar />
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[40px] text-[25px] text-white ss:leading-[100px] leading-[75px]'>
          Skills & Technologies
        </h1>
      </div>
      <div className='grid sm:grid-cols-2 grid-cols-1 '>
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Front-End</h5>

          <ul class="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
            <li class="flex items-center space-x-3 text-2xl">

              <FaReact className='w-[25px] h-[25px] object-contain text-white' />
              <span>React</span>
            </li>
            <li class="flex items-center space-x-3 text-2xl">

              <SiTailwindcss className='w-[25px] h-[25px] object-contain text-white' />
              <span>Tailwind</span>
            </li>
            <li class="flex items-center space-x-3 text-2xl">

              <AiOutlineHtml5 className='w-[25px] h-[25px] object-contain text-white' />
              <span>HTML</span>
            </li>
            <li class="flex items-center space-x-3 text-2xl">

              <FaCss3 className='w-[25px] h-[25px] object-contain text-white' />
              <span>CSS</span>
            </li>
            <li class="flex items-center space-x-3 text-2xl">
            </li>
          </ul>

        </div>


        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Back-End</h5>

          <ul class="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
            <li class="flex items-center space-x-3 text-2xl">

              <FaNodeJs className='w-[25px] h-[25px] object-contain text-white' />
              <span>NodeJs</span>
            </li>
            <li class="flex items-center space-x-3 text-2xl">

              <SiExpress className='w-[25px] h-[25px] object-contain text-white' />
              <span>ExpressJS</span>
            </li>
            <li class="flex items-center space-x-3 text-2xl">
              <SiMongodb className='w-[25px] h-[25px] object-contain text-white' />
              <span>MongoDB</span>
            </li>

            <li class="flex items-center space-x-3 text-2xl">
              <IoLogoJavascript className='w-[25px] h-[25px] object-contain text-white' />
              <span>JavaScript</span>
            </li>
          </ul>



        </div>
      </div>


    </div>
  )
}

export default Technologies