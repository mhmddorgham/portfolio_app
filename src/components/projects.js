import React from 'react'
import { projectsList } from '../constants/constants';
import Card from './Card';
import Bar from './Bar'
const projects = () => {
  return (
    <div>
      {/* SectionName */}
      <Bar />
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[50px] text-[30px] text-white ss:leading-[100px] leading-[75px]'>
          Projects
        </h1>
      </div>
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-8 '>
        {projectsList.map((obj, i) => (
          <Card
            key={obj.id}
            img={obj.image}
            title={obj.title}
            description={obj.description}
          />
        ))}
      </div>

    </div>
  )
}

export default projects