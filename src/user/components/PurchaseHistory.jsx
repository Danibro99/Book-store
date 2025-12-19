import React, { useEffect, useState } from 'react'
import { getUserBoughtBooksAPI } from '../../services/allAPI';

function PurchaseHistory() {

  const [booksPurchased,setBookPurchased] = useState([])
  console.log(booksPurchased);
  useEffect(()=>{
    getUserBoughtBooks()
  },[])

  const getUserBoughtBooks = async()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization":`Bearer ${token}`
      }
      const result = await getUserBoughtBooksAPI(reqHeader)
      if(result.status==200){
        setBookPurchased(result.data)
      }else{
        console.log(result);
      }
    }
  }
  return (
     <div className='p-10 my-20 mx-5 shadow rounded'>
      {/* book div duplicate */}
           {
        booksPurchased?.length>0?
        booksPurchased?.map(book=>(
          <div className="bg-gray-200 p-5 rounded">
        <div className="md:grid grid-cols-[3fr_1fr]">
          <div className="">
          <h2 className='text-2xl'>{book?.title}</h2>
            <h3 className='text-xl'>{book?.author}</h3>
            <h4 className='text-lg text-red-500'>$ {book?.price}</h4>
            <p className='text-justify'>{book?.abstract}</p>
            <div className="flex mt-5">
            </div>
          </div>
          <div className="px-4 mt-4 md:mt-0">
            <img className='w-50' src={book?.imageURL} alt="" />
            </div>
        </div>
      </div>
        ))
        :
        <div className="text-center my-5 font-bold">
          No books Have been brought yet...
        </div>}
    </div>
  )
}

export default PurchaseHistory