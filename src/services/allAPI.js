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
export const getAllBooksForUserAPI = async(reqHeader)=>{
        return await commonAPI("GET",`${serverURL}/books/all`,{},reqHeader)
    }

//userhome page API called by books component when the page is initially loaded
export const getUserUploadBooksAPI = async(reqHeader)=>{
        return await commonAPI("GET",`${serverURL}/user-books/all`,{},reqHeader)
    }