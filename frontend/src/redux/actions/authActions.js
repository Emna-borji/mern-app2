import axios from "axios"
import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGIN, AUTH_REGISTER } from "./types"
const API_URL = "/api/users/"

// register user
export const register = (userData)=>{
    return async(dispatch)=> {
        try {
            dispatch({
                type : AUTH_LOADING,
                payload : true
            })
            // wait 2 seconds
            await new Promise(resolve=>setTimeout(resolve, 2000))
            // send POST request to /api/users endpoint
            const response = await axios.post(API_URL, userData)
            if (response.data) {
                localStorage.setItem("user" , JSON.stringify(response.data))
            }
            dispatch({
                type : AUTH_REGISTER,
                payload : response.data
            })
        } catch (error) {
            console.log(error)
            const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString()
            dispatch({
                type : AUTH_ERROR,
                payload : message
            })
        }
    }
}

// login user 
export const login = (userData)=>{
    return async(dispatch)=> {
        try {
            dispatch({
                type : AUTH_LOADING,
                payload : true
            })
            // wait 2 seconds
            await new Promise(resolve=>setTimeout(resolve, 2000))
            // send POST request to /api/users/login endpoint
            const response = await axios.post(API_URL+"login", userData)
            if (response.data) {
                localStorage.setItem("user" , JSON.stringify(response.data))
            }
            dispatch({
                type : AUTH_LOGIN,
                payload : response.data
            })
        } catch (error) {
            console.log(error)
            const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString()
            dispatch({
                type : AUTH_ERROR,
                payload : message
            })
        }
    }
}