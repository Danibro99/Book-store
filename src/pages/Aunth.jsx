import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Aunth({insideRegister}) {

  const [viewPassword,setViewPassword]=useState(false)

  
  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url(bg-auth.jpg)] bg-cover bg-center'>
        <div className="p-10">\
          <h1 className="text-3xl font-bold text-white text-center">Book Store</h1>
          <div className="bg-black text-white p-5 flex flex-col justify-center items-center my-5" style={{width:'400px'}}>
            <div className="border mb-5  flex justify-center items-center" style={{width:"100px",height:"100px",borderRadius:"50%"}}>
              <FaUser className='text-3xl'/>
            </div>
            <h2 className="text-2xl">{insideRegister? "Register":"Login"}</h2>
            <form className='my-5 w-full'>
              {/* username */}
              {
                insideRegister &&
                <input type="text" placeholder='Username' className='bg-white text-black placeholder-gray-400 w-full rounded p-2 mb-5 ' />
              }
              {/* email */}
              <input type="text" placeholder='E-mail ID' className='bg-white text-black placeholder-gray-400 w-full rounded p-2 mb-5 ' />
              <div className="flex items-center">
                {/* password */}
                <input type={viewPassword? "text":"password"} placeholder='Password' className='bg-white text-black placeholder-gray-400 w-full rounded p-2 mb-5 ' />
                {
                  viewPassword?
                  <FaEyeSlash onClick={()=>setViewPassword(!viewPassword)} className='text-gray-400 cursor-pointer' style={{marginLeft:"-30px",marginTop:"-15px"}}/>:
                  <FaEye onClick={()=>setViewPassword(!viewPassword)} className='text-gray-400 cursor-pointer' style={{marginLeft:"-30px",marginTop:"-15px"}}/>
                }
              </div>
              {/* forgot password */}
              {
                !insideRegister &&
                <div className="flex justify-between mb-5">
                  <p className='text-xs text-orange-300'>Never Share Your Password with anyone</p>
                  <button className='text-xs underline'>Forgot Password</button>
                </div>
              }
              {/* login and register button */}
              <div className="text-center">
                {
                  insideRegister ?
                  <button type='button'className='bg-green-700 p-2 w-full rounded' >Register</button>
                  :
                  <button type='button'className='bg-green-700 p-2 w-full rounded' >Login</button>
                }
              </div>
              {/* google authentication */}
              <div className="my-5 text-center">
                {
                  insideRegister?
                  <p className='text-blue-600'>Already a User? <Link to={'/login'} className='underline ms-5'>Login</Link></p>:
                  <p className='text-blue-600'>Are you a new User? <Link to={'/register'} className='underline ms-5'>Register</Link></p>
                }
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Aunth