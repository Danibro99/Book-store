import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Foooter from '../../components/Foooter'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getAllBooksForUserAPI } from '../../services/allAPI'
import { searchContext } from '../../contextAPI/ShareContext'



function Books() {
  const [showCategoryList,setShowCategoryList]=useState(false)
  const [token,setToken] = useState("")
  const [allBooks,setAllBooks] = useState([])
  const {searchKey,setSearchKey} = useContext(searchContext)
  console.log(allBooks);
  
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      getAllBooks(userToken)
    }
  },[searchKey])

  const getAllBooks=async(token)=>{
    const reqHeader = {
      "Authorization":`Bearer ${token}`
    }
    const result = await getAllBooksForUserAPI(reqHeader,searchKey)
    if(result.status == 200){
      console.log(result.data);
      setAllBooks(result.data)
    }else{
      console.log(result);
    }
  }

  return (
    <>
    <Header></Header>
    {/* login-book page */}
   {token ?
    <>
    <div className="flex flex-col justify-center items-center my-5">
      <h1 className="text-3xl font-bold my-5">All Books</h1>
      {/* search box */}
      <div className="flex my-5">
        <input value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} type="text" className="border p-2 border-gray-400 w-100" placeholder='Search by Title'/>
        <button className='bg-black p-2 text-white'>Search</button>
      </div>
      {/* book & filter row */}
    </div>
    <div className="md:grid grid-cols-4 md:px-20 p-5 mb-10">
        {/* filter */}
        <div className="col-span-1">
          {/* filter title */}
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Filter</h1>
            <button onClick={()=>setShowCategoryList(!showCategoryList)} className='text-2xl md:hidden'><FaBars/></button>
          </div>
          {/* filter option */}
          <div className={showCategoryList?"block":"md:block hidden"}>
            {/* All books */}
            <div className="mt-3">
              <input type="radio" name="filter" id="flterNames" />
              <label htmlFor="filterName" className='ms-2'>All</label>
            </div>
            {/* user catergories //duplicate */}
            <div className="mt-3">
              <input type="radio" name="filter" id="flterNames" />
              <label htmlFor="filterName" className='ms-2'>Category Name</label>
            </div>
          </div>
        </div>
        {/* book row */}
        <div className="col-span-3">
          <div className="md:grid grid-cols-4 mt-5 md:mt-0">
            {/* book card 1 */}
            {
              allBooks?.length>0?
              allBooks.map(book=>(
                <div key={book?._id} className="shadow rounded p-3 mx-4 mb-5 md:mb-0 items-center">
            <img src={book?.imageURL} width={'300px'} height={'300px'} alt="books" />
            <div className="flex justify-center items-center flex-col mt-4">
              <h3 className="text-blue-600 font-bold text-lg">{book?.author} </h3>
              <h4 className="text-lg">{book?.title}</h4>
              <Link to={`/books/${book?._id}/view`}>View</Link>
            </div>
          </div>
              ))
          :
          <p className='font-bold'>Book not Found...</p>
          }
          </div>
        </div>
      </div>
    </>:
    <div className="flex items-center justify-center text-center w-full min-h-screen flex-col" >
      <img className='w-50' src="https://media.lordicon.com/icons/wired/gradient/94-lock-unlock.gif" alt="locked gif" />
      <p className='text-xl font-bold my-15'>Please <Link to={'/login'} className='underline text-blue-500'>Login</Link> to explore more!!!</p>
      {/* No login-book page */}
    </div>
    }
    
    <Foooter></Foooter>
    </>
  )
}

export default Books