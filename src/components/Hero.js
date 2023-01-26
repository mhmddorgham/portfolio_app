import React from 'react'
import styles from '../style'

const Hero = () => {

  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('mhmd_CV.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'mhmd_CV.pdf';
        alink.click();
      })
    })
  }


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
          <h1 className='flex-1 font-poppins font-semibold ss:text-[65px] text-[40px] text-white ss:leading-[100px] leading-[75px]'>
            I am A Full Stack <br className='sm:block hidden' />Web Developer
          </h1>

        </div>

        <div className='flex sm:flex-row flex-col justify-center items-center gap-5'>
          <button onClick={onButtonClick} type='button' className='py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none mt-10 rounded-xl ' >Download CV</button>
          <a href='#AboutMe'> <button type='button' className='py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none mt-10 rounded-xl ' >About Me</button></a>
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