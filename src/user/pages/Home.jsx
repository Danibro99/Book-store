import React from 'react'
import Header from '../components/Header'
import Foooter from '../../components/Foooter'
import { FaSearch } from 'react-icons/fa'

function Home() {
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
          <input type="text" className='bg-white rounded-3xl text-black w-100 placeholder:gray-500 p-2' placeholder='Search books here' />
          <FaSearch className='text-gray-500' style={{marginLeft:"-40px"}}/>
        </div>
      </div>
      </div>
      {/* New Arrival */}
      <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
        <h1 className="text-3xl font-bold">New Arrivals</h1>
        <h2 className='text-2xl'>Explore our latest collection</h2>
      </section>
      {/* author */}
      {/* testimony */}
    </div>
    <Foooter></Foooter>
    </>
  )
}

export default Home