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