import React from 'react'
import AdminHeader from "../components/AdminHeader";
import AdminSidePage from "../components/AdminSidePage";
import Foooter from '../../components/Foooter';
import { FaPen } from 'react-icons/fa';

function AdminProfile() {
  return (
     <>
    <AdminHeader/>
    <div className='md:grid grid-cols-5' >
      <div className="col-span-1">
        <AdminSidePage/>
      </div>
      <div className='col-span-4 p-10'>
        <h1 className="text-center my-5 font-bold text-3xl">Settings</h1>
        <div className="md:grid grid-cols-2 items-center mt-10 gap-10">
          {/* text */}
          <div>
            <h2 className='text-xl font-bold mb-5'>Welcome to the Admin Settings Panel.</h2> 
            <p className='text-justify mb-5'>
              Here, you can customize system preferences, manage account details, configure business settings, and ensure the platform runs smoothly for both users and staff. 
            </p>

<p className='font-bold mb-2'>
  👤 Account Settings
  
</p>
<ul>
  <li>Profile Information: Update admin name, email, phone number, and profile picture.</li>
  
 <li> Login Credentials: Change password or enable Two-Factor Authentication (2FA) for secure access.</li>
  
  <li>Activity Logs: View login history, last login time, and device access details.  </li>
</ul>
          </div>
          {/* fomr */}
          <div className="flex justify-center items-center flex-col  bg-blue-100 p-5 rounded">
            {/* image */}
            <label htmlFor="uploadImg" >
                <input type="file" id='uploadImg' hidden />
                <img style={{width:'150px',height:'150px',borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="profile" />

              </label>
              <button style={{marginTop:'-20px'}} className='bg-yellow-300 p-2 text-white rounded'><FaPen/></button>
            {/* name */}
            <div className="mt-10 mb-3 w-full px-5">
              <input type="text" placeholder='Username' className='bg-white p-2 rounded w-full' />
            </div>
            {/* password */}
            <div className="mb-3 w-full px-5">
              <input type="password" placeholder='New Password' className='bg-white p-2 rounded w-full' />
            </div>
            <div className="mb-3 w-full px-5">
              <input type="password" placeholder='Confirm Password' className='bg-white p-2 rounded w-full' />
            </div>
            
            
            {/* button */}
            <div className="mb-3 flex justify-center px-5 w-full mt-5">
              <button className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:border-red-600 hover:text-red-600'>RESET</button>
               <button className='px-3 py-2 rounded border bg-blue-600 text-white hover:bg-white hover:border-blue-600 hover:text-blue-600 ms-5'>UPDATE</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    <Foooter/>
    </>
  )
}

export default AdminProfile