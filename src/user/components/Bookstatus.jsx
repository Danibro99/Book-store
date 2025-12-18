import React, { useEffect, useState } from 'react'
import { getUserUploadBooksAPI } from '../../services/allAPI'

function Bookstatus() {

  const [userBooks,setUserBooks] = useState([])
  useEffect(()=>{
    getUserUploadedBooks()
  },[])

  const getUserUploadedBooks = async ()=>{
    const token = sessionStorage.getItem('token')
    if(token){
      const reqHeader = {
        "Authorization":`Bearer ${token}`
      }
      const result = await getUserUploadBooksAPI(reqHeader)
      if(result.status==200){
        setUserBooks(result.data)
        console.log(result.data);
        
      }else{
        console.log(result);
      } 
    }
  }
  return (
    <>
    <div className='p-10 my-20 mx-5 shadow rounded'>
      {/* book div duplicate */}
      {
        userBooks?.length>0?
        userBooks?.map(book=>(
          <div className="bg-gray-200 p-5 rounded">
        <div className="md:grid grid-cols-[3fr_1fr]">
          <div className="">
          <h2 className='text-2xl'>{book?.title}</h2>
            <h3 className='text-xl'>{book?.author}</h3>
            <h4 className='text-lg text-red-500'>Price</h4>
            <p className='text-justify'>{book?.abstract}</p>
            <div className="flex mt-5">
            {
              book?.status=="pending"?
              <img height={"120px"} width={"120px"} src="https://png.pngtree.com/png-vector/20220322/ourmid/pngtree-pending-stamp-illustration-symbol-stamp-vector-png-image_3791329.png" alt="pending" />
              :
               book?.status=="approved"?
              <img height={"120px"} width={"120px"} src="https://pngimg.com/d/approved_PNG8.png" alt="approved" />
              :
              <img height={"120px"} width={"120px"} src="https://static.vecteezy.com/system/resources/thumbnails/019/787/028/small/sold-icon-on-transparent-background-free-png.png" alt="sold" />}
            </div>
          </div>
          <div className="px-4 mt-4 md:mt-0">
            <img className='w-50' src={book?.imageURL} alt="" />
            <div className='flex justify-end'><button className='p-2 bg-red-600 text-white mt-5'>DELETE</button></div>
            </div>
        </div>
      </div>
        ))
        :
        <div className="text-center my-5 font-bold">
          Books are not Uploaded Yet!!!
        </div>
      }
    </div></>
  )
}

export default Bookstatus