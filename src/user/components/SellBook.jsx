import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';


function SellBook() {

  const [bookDetails,setBookDetails] = useState({
    title:"",
    author:"",
    pages:"",
    imageURL:"",
    price:"",
    discountPrice:"",
    abstract:"",
    language:"",
    publisher:"",
    isbn:"",
    category:"",
    uploadIMG:[]
  })

  console.log(bookDetails);

  const [preview,setPreview] = useState("")
  const [previewList,setPreviewList] = useState([])
  const handleUploadBookImage=(e)=>{
    // get file to upload
    console.log(e.target.files[0]);
    const imgFileArray = bookDetails.uploadIMG
    imgFileArray.push(e.target.files[0])
    setBookDetails({...bookDetails,uploadIMG:imgFileArray})
    const url = URL.createObjectURL(e.target.files[0])
    console.log(url);
    setPreview(url)
    const bookImagesArray = previewList
    bookImagesArray.push(url)
    setPreviewList(bookImagesArray)
  }
  
  return (
    <div>
    <div className="p-10 my-20 mx-5 bg-gray-200">
      <h1 className="text-center text-3xl font-bold">Book Details</h1>
      <div className="md:grid grid-cols-2 mt-10 w-full">
        <div className="px-3">
          <div className="mb-3">
            <input value={bookDetails.title} onChange={(e)=>setBookDetails({...bookDetails,title:e.target.value})} placeholder='Book title' className="p-2 bg-white w-full rounded"></input>
          </div>
          <div className="mb-3">
            <input placeholder='Author' value={bookDetails.author} onChange={(e)=>setBookDetails({...bookDetails,author:e.target.value})} className="p-2 bg-white w-full rounded"></input>
          </div>
          <div className="mb-3">
            <input placeholder='No. of Pages' value={bookDetails.pages} onChange={(e)=>setBookDetails({...bookDetails,pages:e.target.value})} className="p-2 bg-white w-full rounded"></input>
          </div>
          <div className="mb-3">
            <input placeholder='Image URL' value={bookDetails.imageURL} onChange={(e)=>setBookDetails({...bookDetails,imageURL:e.target.value})} className="p-2 bg-white w-full rounded"></input>
          </div>
          <div className="mb-3">
            <input placeholder='Price'  value={bookDetails.price} onChange={(e)=>setBookDetails({...bookDetails,price:e.target.value})} className="p-2 bg-white w-full rounded"></input>
          </div>
          <div className="mb-3">
            <input placeholder='Discount price' value={bookDetails.discountPrice} onChange={(e)=>setBookDetails({...bookDetails,discountPrice:e.target.value})} className="p-2 bg-white w-full rounded"></input>
          </div>
          <div className="mb-3">
            <textarea rows={5} type='text'  value={bookDetails.abstract} onChange={(e)=>setBookDetails({...bookDetails,abstract:e.target.value})} placeholder='Abstract' className="p-2 bg-white w-full rounded"></textarea>
          </div>
        </div>
        <div className="px-3">
          <div className="mb-3">
            <input placeholder='Language'  value={bookDetails.language} onChange={(e)=>setBookDetails({...bookDetails,language:e.target.value})} className="p-2 bg-white w-full rounded"></input>
          </div>
          <div className="mb-3">
            <input placeholder='Publisher'  value={bookDetails.publisher} onChange={(e)=>setBookDetails({...bookDetails,publisher:e.target.value})} className="p-2 bg-white w-full rounded"></input>
          </div>
          <div className="mb-3">
            <input placeholder='ISBN' value={bookDetails.isbn} onChange={(e)=>setBookDetails({...bookDetails,isbn:e.target.value})} className="p-2 bg-white w-full rounded"></input>
          </div>
          <div className="mb-3">
            <input placeholder='Category' value={bookDetails.category} onChange={(e)=>setBookDetails({...bookDetails,category:e.target.value})} className="p-2 bg-white w-full rounded"></input>
          </div>
          <div className="mb-3 flex justify-center items-center mt-10">
            <label htmlFor="uploadimg">
              <input onChange={(e)=>handleUploadBookImage(e)} type="file" id='uploadimg' hidden />
              <img src={preview?preview:"https://cdn.pixabay.com/photo/2021/10/11/00/59/upload-6699084_1280.png"} alt="upload" width={"250px"} />
            </label>
          </div>
          {/* for more image upload */}
            {
              preview&&
              <div className="flex justify-center items-center">
                {/* uploading images */}
                {
                  previewList?.map((bookImgURL,index)=>(
                    <img src={bookImgURL} width={"70px"} height={"70px"} className='mx-3' alt="upload image" key={index}/>
                  ))
                }
                {
                  previewList.length <3 &&
                  <label htmlFor="bookImages" className='flex items-center'>
                  <input type="file" onChange={(e)=>handleUploadBookImage(e)} id="bookImages" hidden/>
                  <FaPlus className='text-3xl ms-3'/>
                </label>
                }
              </div>
            }
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button className='bg-gray-600 text-white p-2 rounded me-5 hover:bg-white hover:text-gray-400'>RESET</button>
        <button className='bg-blue-600 text-white p-2 rounded hover:bg-white hover:text-blue-400'>SUBMIT</button>
      </div>
    </div>
    </div>
  )
}

export default SellBook