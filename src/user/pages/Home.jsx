import React, { useState } from 'react'
import Header from '../components/Header'
import Foooter from '../../components/Foooter'
import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { Bounce, toast, ToastContainer } from 'react-toastify'


function Home() {
  const [searchKey,setSearchKey] = useState("")
  const navigate = useNavigate()
  const handleSearch=()=>{
    if(!searchKey){
      toast.warning("Please provide a title to search")
    }else if(!sessionStorage.getItem("token")){
      toast.warning("Please Login to search book")
      setTimeout(()=>{
        navigate('/login')
      },3000)
    }else if(sessionStorage.getItem("token") && searchKey){
      navigate('/books')
    }else{
      toast.error("Something went wrong!!!")
    }
  }
  return (
    <>
    <Header></Header>   
    <div>
      {/* Landing page -search */}
      <div className="flex justify-center items-center flex-col bg-center bg-cover" style={{height:"500px",backgroundImage:"url(/bg-home.jpg)"}} >
      <div className="w-full flex justify-center items-center flex-col text-white" style={{height:"500px",backgroundColor:"rgba(0,0,0,0.4)"}} >
        <h1 className="text-5xl font-bold mb-2">Wonderful Gifts</h1>
        <p>Gift your family and friends a book</p>
        {/* search */}
        <div className="mt-9 flex items-center">
          <input type="text" onChange={(e)=>setSearchKey(e.target.value)} className='bg-white rounded-3xl text-black w-100 placeholder:gray-500 p-2' placeholder='Search books here' />
          <FaSearch className='text-gray-500' style={{marginLeft:"-40px"}} onClick={()=>handleSearch()}/>
        </div>
      </div>
      </div>
      {/* New Arrival */}
      <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
        <h1 className="text-3xl font-bold">New Arrivals</h1>
        <h2 className='text-2xl'>Explore our latest collection</h2>
        {/* books row & col */}
        <div className="md:grid grid-cols-4 w-full mt-10">
          {/* duplicate book cards */}
          <div className="shadow rounded p-3 mx-4 mb-5 md:mb-0 items-center">
            <img src="https://m.media-amazon.com/images/I/617lxveUjYL.jpg" width={'300px'} height={'300px'} alt="books" />
            <div className="flex justify-center items-center flex-col mt-4">
              <h3 className="text-blue-600 font-bold text-lg">Author</h3>
              <h4 className="text-lg">title</h4>
              <h4>Price</h4>
            </div>
          </div>
           {/* duplicate book cards */}
          <div className="shadow rounded p-3 mx-4">
            <img src="https://m.media-amazon.com/images/I/617lxveUjYL.jpg" width={'300px'} height={'300px'} alt="books" />
            <div className="flex justify-center items-center flex-col mt-4">
              <h3 className="text-blue-600 font-bold text-lg">Author</h3>
              <h4 className="text-lg">title</h4>
              <h4>Price</h4>
            </div>
          </div>
           {/* duplicate book cards */}
          <div className="shadow rounded p-3 mx-4">
            <img src="https://m.media-amazon.com/images/I/617lxveUjYL.jpg" width={'300px'} height={'300px'} alt="books" />
            <div className="flex justify-center items-center flex-col mt-4">
              <h3 className="text-blue-600 font-bold text-lg">Author</h3>
              <h4 className="text-lg">title</h4>
              <h4>Price</h4>
            </div>
          </div>
           {/* duplicate book cards */}
          <div className="shadow rounded p-3 mx-4">
            <img src="https://m.media-amazon.com/images/I/617lxveUjYL.jpg" width={'300px'} height={'300px'} alt="books" />
            <div className="flex justify-center items-center flex-col mt-4">
              <h3 className="text-blue-600 font-bold text-lg">Author</h3>
              <h4 className="text-lg">title</h4>
              <h4>Price</h4>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link to={'/books'} className="p-3 bg-black text-white">Explore More...</Link>
        </div>
      </section>
      {/* author */}
      <section className='md:px-40 p-5 my-5 md:grid grid-cols-2 items-center gap-10'>
        {/* authors content */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">Featured Authors</h1>
          <h2 className='text-2xl'>Captivates With every Word</h2>
          <p className='text-justify mt-9'>I am a writer who believes that stories have the power to reveal truths we often overlook. My work is shaped by curiosity, observation, and a genuine desire to understand the emotions that define us. Whether I’m exploring everyday moments or diving into complex themes, I aim to create narratives that feel honest, engaging, and deeply human.</p>
          <p className='text-justify mt-5'>Beyond the page, I am constantly inspired by the world around me — the conversations I hear, the places I visit, and the people whose lives intersect with mine. Writing is not just a craft for me, but a way of connecting with others and making sense of the world. Through each piece, I hope to offer readers a space to feel, reflect, and rediscover the beauty in their own stories.</p>
        </div>
        {/* author image */}
        <div className="p-5 flex justify-center items-center">
          <img src="https://t4.ftcdn.net/jpg/02/32/16/11/360_F_232161181_HP9vaSVs2tk2G3o1jfVH5QG7BceWnlyu.jpg" alt="author" />
        </div>
      </section>
      {/* testimony */}
      <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
        <h1 className="text-3xl font-bold">Testimonials</h1>
        <h2 className='text-2xl'>See what others are saying</h2>
        <div className="my-5 flex justify-center items-center flex-col gap-2">
          {/* user image */}
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s" height={'200px'} width={'200px'} style={{borderRadius:"50%"}} alt="user feedback" />
          <p className='mt-5'>Alex</p>
          {/* feedback */}
          <p className='text-justify mt-4'><span className='font-bold me-2'>“I had a great experience shopping here“.</span> The website is easy to navigate, and the search filters helped me find exactly what I wanted. The discounts are amazing, and the quality of the books exceeded my expectations. Even the used books looked almost new. The delivery was fast, and the books arrived in perfect condition. I’ll definitely be ordering again!</p>
        </div>
      </section>
    </div>
    <Foooter></Foooter>
    <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>
    </>
  )
}

export default Home