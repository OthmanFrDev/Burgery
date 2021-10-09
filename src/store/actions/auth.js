import * as actionTypes from './actionTypes'
import axios from 'axios'
export const authStart=()=>{
    return {
        type:actionTypes.AUTH_START
    }
}
export const authSuccess=(formData)=>{
    return {
        type:actionTypes.AUTH_START,
        formData:formData
    }
}
export const authFail=(error)=>{
    return {
        type:actionTypes.AUTH_START,
        error:error
    }
}
export const auth=(email,password)=>{
    return dispatch=>{
        dispatch(authStart())
        const userData={
            email:email,
            password:password,
            returnSecureToken:true
        }
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD24-uiMnDW9Aa14wqg69p9Y8-1SOJNsjM",userData)
        .then(response=>{
            console.log(response)
            dispatch(authSuccess(response.data))
        })
        .catch(error=>{
            console.log(error)
            dispatch(authFail(error))
        })
    }
}