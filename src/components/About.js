import React from 'react'
import Bar from './Bar'
import { features } from '../constants/constants'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] mb-6 feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue`}>
      <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className='flex flex-1 flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>

)


const About = () => {
  return (
    <div>
      {/* SectionName */}
      <Bar />
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[40px] text-[25px] text-white ss:leading-[100px] leading-[75px]'>
          About Me
        </h1>
      </div>
      <div>
        <div className={`flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col`}>
          {features.map((featuer) => (
            <FeatureCard
              key={featuer.id}
              {...featuer}
            />
          ))}
        </div>
      </div>

    </div>


  )
}

export default About