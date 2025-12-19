import React, { useEffect, useState } from 'react'
import Header from '../components/Header' 
import Foooter from '../../components/Foooter'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../components/Edit'
import SellBook from '../components/SellBook'
import PurchaseHistory from '../components/PurchaseHistory'
import Bookstatus from '../components/Bookstatus'


function Profile() {

  const [tab,setTab]=useState(1)
  const [dp,setDp] = useState("")
  const [username,setUSername] = useState("")
  // console.log(dp);
  

  useEffect(()=>{
    if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
      const user = JSON.parse(sessionStorage.getItem("user"))
      // console.log(user);
      
      setDp(user?.profilepic)
      setUSername(user.username)
    }
  },[])

  return (
    <>
    <Header/>
    {/* black div */}
    <div style={{height:"200px"}} className="bg-black"></div>
      {/* profile image */}
    <div className="bg-white p-3" style={{width:"230px",height:"230px",borderRadius:"50%",marginLeft:"70px",marginTop:"-130px"}}>
    <img style={{width:"200px",height:"200px",borderRadius:"50%"}} src={dp?dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhtdO_3HLpDMCdrlnK9AjcBcHFMKy7lt0rA&s"} alt="profile" />
    </div>
    <div className="md:flex justify-between items-center md:px-20 px-5 my-5">
    <h1 className="text-2xl font-bold flex items-center mx-5 md:mx-20">{username && username}  <FaCircleCheck className='text-blue-700 ms-5'/></h1>
    <Edit/>
    </div>
    <p className='text-justify md:px-20 px-5 my-5'>I’m someone who finds comfort, inspiration, and adventure in books.
Reading is my favourite way to relax, learn, and escape into different worlds.
I enjoy exploring a wide range of genres and sharing my thoughts, favourite quotes, and recommendations with other readers.
Always excited to discover new authors and hidden gems in the bookstore community.</p>
{/* tabs with content */}
<div className="md:px-40">
  <div className="flex justify-center items-center my-8 font-medium text-lg">
    <p onClick={()=>setTab(1)} className={tab==1?'text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer':' border-gray-200  border-b p-4 cursor-pointer'}>
      Sell Books
    </p>
    <p onClick={()=>setTab(2)} className={tab==2? 'text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer':' border-gray-200 border-b p-4 cursor-pointer'}>
      Book Status
    </p>
    <p onClick={()=>setTab(3)} className={tab==3? 'text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer':' border-gray-200  border-b p-4 cursor-pointer'}>
      Purchase History
    </p>
  </div>
  {/* contents */}
  {
    tab==1&&
    <SellBook/>}
  {
    tab==2&&
    <Bookstatus/>}
   {
   tab==3&& 
  <PurchaseHistory/> }
</div>
    <Foooter/>
    </>
  )
}

export default Profile