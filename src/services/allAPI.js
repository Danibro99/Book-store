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