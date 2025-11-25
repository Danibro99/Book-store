import React, { useState } from 'react'
import { FaBars, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'



function Header() {
    const [listStatus,setListStatus]=useState(false)
    const menuBtnclick=()=>{setListStatus(!listStatus)}

  return (
    <>
    {/* upper part- title and logo */}
    <div className="grid grid-cols-3 p-2">
      <div className="flex items-center">
        {/* logo and title */}
        <img className='h-20 rounded' src="/logo1.jpg" alt="logo" />
        <h1 className='text-2xl font-bold ms-1 md:hidden'>BOOK STORE</h1>
      </div>
    </div>
    {/* lower part -links and menu + login btn */}
    <nav className="w-full p-2 bg-black text-white md:flex justify-center items-center">
      {/* menu bar and login */}
      <div className="flex justify-between items-center text-2xl md:hidden">
        {/* menu bar btn */}
        <button onClick={menuBtnclick} className='cursor-pointer'><FaBars/></button>
        {/* login link */}
        <Link to={'/login'} className='ms-4 border rounded px-2 py-1 hover:bg-white hover:text-black flex items-center'> <FaUser className='me-1'/> Login</Link>
      </div>
      {/* ul links */}
      <ul className={listStatus ? "flex flex-col" : "md:flex justify-center items-center hidden"}>
        <li className='mt-3 md:mx-4 md:mt-0'><Link to={'/'}>HOME</Link></li>
        <li className='mt-3 md:mx-4 md:mt-0'><Link to={'/books'}>BOOKS</Link></li>
        <li className='mt-3 md:mx-4 md:mt-0'><Link to={'/contact'}>CONTACT</Link></li>
      </ul>

    </nav>
    </>
  )
}

export default Header