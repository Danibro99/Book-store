import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

//register API
    export const registerAPI = async(userData)=>{
        return await commonAPI("POST",`${serverURL}/register`,userData)
    }

//Login API
    export const loginAPI = async(userData)=>{
        return await commonAPI("POST",`${serverURL}/login`,userData)
    }

//google login API
    export const googleLoginAPI = async(userData)=>{
        return await commonAPI("POST",`${serverURL}/google/sign-in`,userData)
    }

//add book api
    export const addBookAPI = async(reqBody,reqHeader)=>{
        return await commonAPI("POST",`${serverURL}/user/books/add`,reqBody,reqHeader)
    }

//homepage Api Called by Home component when page is initially loaded
export const getHomepageBooksAPI = async()=>{
        return await commonAPI("GET",`${serverURL}/books/home`,{})
    }

//userhome page API called by books component when the page is initially loaded
export const getAllBooksForUserAPI = async(reqHeader,searchKey)=>{
        return await commonAPI("GET",`${serverURL}/books/all?search=${searchKey}`,{},reqHeader)
    }

//API called by Bookstatus component when the page is initially loaded to see the status of the user uploaded books 
export const getUserUploadBooksAPI = async(reqHeader)=>{
        return await commonAPI("GET",`${serverURL}/user-books/all`,{},reqHeader)
    }

///user-books/bought  API called by books component when the page is initially loaded to see the list books user bought
 export const getUserBoughtBooksAPI = async(reqHeader)=>{
        return await commonAPI("GET",`${serverURL}/user-books/bought`,{},reqHeader)
    }