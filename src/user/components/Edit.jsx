import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {
const [offCanvasStatus,setOffCanvasStatus]=useState(false)

  return (
    <div>
      <button onClick={()=>setOffCanvasStatus(true)} className='flex items-center text-blue-600 border p-2 rounded hover:text-white hover:bg-blue-600'><FaEdit className='ms-3'/>Edit</button>
      {/* offcanvas */}
      {
        offCanvasStatus &&
        <div className="">
        <div className="fixed inset-0 bg-gray-500/75 z-10 w-full h-full">
        <div className="bg-white h-full w-90 fixed top-0 left-0">
          {/* header */}
          <div className="bg-black p-3 flex z-11 justify-between">
            <h3 className='text-lg text-white'>Update Profile</h3>
            <button onClick={()=>setOffCanvasStatus(false)} ><FaX className='text-white'/></button>
          </div>
          {/* body */}
          <div className="flex flex-col my-5 justify-center items-center">
            {/* image */}
            <label htmlFor="uploadImg"> 
              <input type="file" name="userimg" id="uploadImg" hidden/>
              <img style={{width:"160px",height:"160px",borderRadius:"50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhtdO_3HLpDMCdrlnK9AjcBcHFMKy7lt0rA&s" alt="profile" />
            </label>
            {/* name */}
            <div className="mt-10 mb-3 w-full px-5">
              <input type="text"  placeholder='username' className='border border-gray-200 p-2 rounded w-full' />
            </div>
            {/* password */}
            <div className=" mb-3 w-full px-5">
              <input type="password"  placeholder='New Password' className='border border-gray-200 p-2 rounded w-full' />
            </div>
            <div className=" mb-3 w-full px-5">
              <input type="password"  placeholder='Confirm New Password' className='border border-gray-200 p-2 rounded w-full' />
            </div>
            {/* bio */}
            <div className=" mb-3 w-full px-5">
              <textarea type="text"  placeholder='Enter Bio' rows={3} className='border border-gray-200 p-2 rounded w-full' />
            </div>
            {/* button */}
            <div className="mb-3 flex justify-end px-5">
              <button className='px-3 py-2 rounded bg-red-600 text-white hover:bg-white hover:border-red-600 hover:text-red-600'>Reset</button>
              <button className='px-3 ms-3 py-2 rounded bg-green-600 text-white hover:bg-white hover:border-green-600 hover:text-green-600'>Submit</button>
            </div>
          </div>
        </div>
        </div>
      </div>}
    </div>
  )
}

export default Edit