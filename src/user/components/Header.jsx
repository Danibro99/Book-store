import React, { useEffect, useState } from 'react'
import { FaAddressCard, FaBars, FaPowerOff, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaInstagram,FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'


function Header() {
    const [listStatus,setListStatus]=useState(false)
    const menuBtnclick=()=>{setListStatus(!listStatus)}
    const [dp,setDp] = useState("")
    const [token,setToken] = useState("")
    const [dropdown,setDropdown] = useState(false)

    useEffect(()=>{
      if(sessionStorage.getItem("token")){
        const userToken = sessionStorage.getItem("token")
        setToken(userToken)
        const user = JSON.parse(sessionStorage.getItem("user"))
        setDp(user.profilepic)
      }
    },[token])
  return (
    <>
    {/* upper part- title and logo */}
    <div className="grid grid-cols-3 p-2">
      <div className="flex items-center">
        {/* logo and title */}
        <img className='h-15 rounded' src="/logo1.jpg" alt="logo" />
        <h1 className='text-2xl font-bold ms-1 md:hidden'>BOOK STORE</h1>
      </div>
      <div className="md:flex justify-center items-center hidden">
        <h1 className="text-3xl font-bold">BOOK STORE</h1>
      </div>
      {/* login btn */}
      <div className="md:flex justify-end items-center hidden">
        <a href="https://www.instagram.com/nashif.me" target='_blank'> <FaInstagram/></a>
        <a href="https://www.instagram.com/nashif.me" target='_blank'> <FaFacebook className='mx-2'/></a>
        <a href="https://www.instagram.com/nashif.me" target='_blank'> <FaXTwitter/></a>
      { 
        !token?
        <Link to={'/login'} className='ms-4 border rounded p-2 hover:bg-black hover:text-white flex items-center'> <FaUser className='me-1'/> Login</Link>
        :
        <div className="relative inline-block text-left ms-5">
          <button className='w-full bg-white px-3 py-2 shadow hover:bg-gray-50' onClick={()=>setDropdown(!dropdown)}>
            <img width={"40px"} height={"40px"} style={{borderRadius:"50%"}} src="https://img.freepik.com/free-photo/business-man-by-skyscraper_1303-13655.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
          </button>
          {
            dropdown == true &&
            <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline-hidden">
            <Link to={'/user/profile'} className='px-4 py-2 text-sm text-gray-700 flex items-center'><FaAddressCard className='me-2'/>Profile</Link>
            <button className='px-4 py-2 text-sm text-gray-700 flex items-center'><FaPowerOff className='me-2'/>Logout</button>
          </div>
          }
        </div> 
      }
      </div>
    </div>
    {/* lower part -links and menu + login btn */}
    <nav className="w-full p-2 bg-black text-white md:flex justify-center items-center">
      {/* menu bar and login */}
      <div className="flex justify-between items-center text-2xl md:hidden">
        {/* menu bar btn */}
        <button onClick={menuBtnclick} className='cursor-pointer'><FaBars/></button>
        {/* login link */}
         { 
        !token?
        <Link to={'/login'} className='ms-4 border rounded p-2 hover:bg-black hover:text-white flex items-center'> <FaUser className='me-1'/> Login</Link>
        :
        <div className="relative inline-block text-left ms-5">
          <button className='w-full bg-white px-3 py-2 shadow hover:bg-gray-50' onClick={()=>setDropdown(!dropdown)}>
            <img width={"40px"} height={"40px"} style={{borderRadius:"50%"}} src="https://img.freepik.com/free-photo/business-man-by-skyscraper_1303-13655.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
          </button>
          {
            dropdown == true &&
            <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline-hidden">
            <Link to={'/user/profile'} className='px-4 py-2 text-sm text-gray-700 flex items-center'><FaAddressCard className='me-2'/>Profile</Link>
            <button className='px-4 py-2 text-sm text-gray-700 flex items-center'><FaPowerOff className='me-2'/>Logout</button>
          </div>
          }
        </div> 
      }
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