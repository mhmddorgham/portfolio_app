import React, { useState } from 'react'
import { close, menu } from "../assets"
import Logo from './Logo';

const Navbar = () => {
  const navLinks = [
    {
      id: "Projects",
      title: "Projects",
    },
    {
      id: "Skills",
      title: "Skills",
    },
    {
      id: "AboutMe",
      title: "About Me",
    },
    {
      id: "Contact",
      title: "Contact",
    },
  ];

  const [toggle, setToggle] = useState(false);

  const hangleToggle = () => {
    setToggle((prev) => !prev)
  }

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar '>
      <Logo />
      <ul className='list-non sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[19px] text-white hover:text-[rgb(55,189,208)]  ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#${nav.id}`} >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img onClick={hangleToggle} src={toggle ? close : menu} alt="menu" className='w-[25px h-[25px] object-contain cursor-pointer' />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${i === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            )
            )}
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar