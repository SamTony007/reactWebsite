import React, { useState } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { Link } from "react-scroll";
// import { FaXMark, FaBars } from 'react-icons/fa6';


const Header = () => {

  const [isMenuOpen , setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }
  const navItems = [
    {link: 'home', path: 'home'},
    {link: 'about', path: 'about'},
    {link: 'menu', path: 'menu'},
    {link: 'services', path: 'services'},
    {link: 'contact', path: 'contact'},
  ]
  return (
    <>
    <nav className='flex justify-between lg:justify-around items-center gap-16 bg-slate-900  sticky top-0 z-30 '>
      <div id='logo' className='mx-4'>
        <img src="./images/logo1.png" alt="Logo" height={80} width={80} />

      </div>
      <ul className='lg:flex justify-center items-center gap-10 hidden'>
        {navItems.map(({link, path})=>(
          <Link key={path} to={path} spy={true} offset={-100} smooth={true} className='text-slate-500 uppercase font-semibold courser-pointer p-3 rounded-lg hover:bg-slate-200 hover:text-black'>
            {link}
          </Link>
        ))}

      </ul>

      {/* mobile menu */}

      <div className='flex justify-center items-center mr-4 lg:hidden' onClick={toggleMenu}>
        <div>
          {isMenuOpen ? < FaXmark className='text-slate-500 text-2xl cursor-pointer'/> : <FaBars className='text-slate-500 text-2xl cursor-pointer'/>}
        </div>
      </div>


          <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-900 p-4 absolute top-[80px] left-0`} onClick={closeMenu} >
          <ul className='flex flex-col justify-center items-center gap-2 w-full'>
              {navItems.map(({link, path})=>(
                <Link key={path} to={path} spy={true} offset={-100} smooth={true} className='text-slate-500 uppercase font-semibold courser-pointer p-3 rounded-lg hover:bg-slate-200 hover:text-black w-full text-center'> {link} </Link>
              ))}
          </ul>
          </div>

          <button className='bg-orange-500 px-6 py-2 rounded-full hidden lg:block hover:bg-green-500 hover:text-black font-bold  '>ORDER NOW</button>
    </nav>
    </>
  )
}

export default Header