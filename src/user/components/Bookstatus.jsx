import React from 'react'

function Bookstatus() {
  return (
    <div className='p-10 my-20 mx-5 shadow rounded'>
      {/* book div duplicate */}
      <div className="bg-gray-200 p-5 rounded">
        <div className="md:grid grid-cols-[3fr_1fr]">
          <div className="">
            <h2 className='text-2xl'>Title</h2>
            <h3 className='text-xl'>Author</h3>
            <h4 className='text-lg text-red-500'>Price</h4>
            <p className='text-justify'>Abstract</p>
            <div className="flex mt-5">
              <img height={"120px"} width={"120px"} src="https://png.pngtree.com/png-vector/20220322/ourmid/pngtree-pending-stamp-illustration-symbol-stamp-vector-png-image_3791329.png" alt="pending" />
              <img height={"120px"} width={"120px"} src="https://pngimg.com/d/approved_PNG8.png" alt="approved" />
              <img height={"120px"} width={"120px"} src="https://static.vecteezy.com/system/resources/thumbnails/019/787/028/small/sold-icon-on-transparent-background-free-png.png" alt="sold" />
            </div>
          </div>
          <div className="px-4 mt-4 md:mt-0">
            <img className='w-50' src="https://m.media-amazon.com/images/I/617lxveUjYL.jpg" alt="" />
            <div className='flex justify-end'><button className='p-2 bg-red-600 text-white mt-5'>DELETE</button></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Bookstatus