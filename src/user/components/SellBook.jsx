import React from 'react'


function SellBook() {
  return (
    <div>
    <div className="p-10 my-20 mx-5 bg-gray-200">
      <h1 className="text-center text-3xl font-bold">Book Details</h1>
      <div className="md:grid grid-cols-2 mt-10 w-full">
        <div className="px-3">
          <div className="mb-3">
            <input placeholder='Book title' className="p-2 bg-white w-full rounded"></input>
          </div>
          <div className="mb-3">
            <input placeholder='Author' className="p-2 bg-white w-full rounded"></input>
          </div>
          <div className="mb-3">
            <input placeholder='No. of Pages' className="p-2 bg-white w-full rounded"></input>
          </div>
          <div className="mb-3">
            <input placeholder='Image URL' className="p-2 bg-white w-full rounded"></input>
          </div>
          <div className="mb-3">
            <input placeholder='Price' className="p-2 bg-white w-full rounded"></input>
          </div>
          <div className="mb-3">
            <input placeholder='Discount price' className="p-2 bg-white w-full rounded"></input>
          </div>
          <div className="mb-3">
            <textarea rows={5} type='text' placeholder='Abstract' className="p-2 bg-white w-full rounded"></textarea>
          </div>
        </div>
        <div className="px-3">
          <div className="mb-3">
            <input placeholder='Language' className="p-2 bg-white w-full rounded"></input>
          </div>
          <div className="mb-3">
            <input placeholder='Publisher' className="p-2 bg-white w-full rounded"></input>
          </div>
          <div className="mb-3">
            <input placeholder='ISBN' className="p-2 bg-white w-full rounded"></input>
          </div>
          <div className="mb-3">
            <input placeholder='Category' className="p-2 bg-white w-full rounded"></input>
          </div>
          <div className="mb-3 flex justify-center items-center mt-10">
            <label htmlFor="uploadimg">
              <input type="file" id='uploadimg' hidden />
              <img src="https://cdn.pixabay.com/photo/2021/10/11/00/59/upload-6699084_1280.png" alt="upload" width={"250px"} />
            </label>
          </div>
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