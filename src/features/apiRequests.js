import axios from 'axios'
import {
    registerStart,
    registerSuccess,
    registerFailed,
    loginStart,
    loginSuccess,
    loginFailed,
    logoutStart,
    logoutSuccess,
    logoutFailed
} from '../redux/authSlice'


import { mainUrl } from '../context/constances'

const registerUser = async (user, dispatch, setNewUserAdded) => {
    dispatch(registerStart())
    try {
        const res = await axios.post(`${mainUrl}/v1/auth/register`, user)
        dispatch(registerSuccess(res.data))
        setNewUserAdded(true)
    } catch (error) {
        console.log('Error Signup: ', error)
        dispatch(registerFailed("Register Error: ", error))
    }
}

const loginUser = async (user, dispatch, setLoadedData, hanldeError, Toast) => {
    dispatch(loginStart())
    try {
        const res = await axios.post(`${mainUrl}/v1/auth/login`, user)
        dispatch(loginSuccess(res.data))
        setLoadedData(true)
    } catch (error) {
        console.log('Error Login: ')
        hanldeError({
            isError: true,
            typeMessage: error.response.data.typeError,
            errorField: error.response.data.errorField
        })
        Toast(error.response.data.typeError, error.response.data.errorMessage)
        dispatch(loginFailed("Login Error: ", error))
    }
}

const logoutUser = async (dispatch, accessToken, userId) => {
    dispatch(logoutStart())
    try {
        await axios.post(`${mainUrl}/v1/auth/logout`, userId, {
            headers: { token: `Bearer ${accessToken}` }
        })
        dispatch(logoutSuccess())
    } catch (error) {
        dispatch(logoutFailed("Logout Error", error))
    }
}

const findUser = async (userEmail, Toast, hanldeError) => {
    try {
        const res = await axios.post(`${mainUrl}/v1/auth/findUser`, { email: userEmail })
        if (res.data.userId) {
            hanldeError({
                isError: true,
                typeMessage: 'Warning',
                errorField: 'email',
            })
            Toast('Warning', 'This email address is already taken')
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log("Error FindUser", error)
    }
}

const updateMember = async (userId, valueChange, Toast, fieldChange) => {
    try {
        const res = await axios.put(`${mainUrl}/v1/user/${userId}/update/member`, valueChange)
        if(res.data.acknowledged) {
            Toast('Success', 'Profile Updated, Please login again')
            return true
        } else {
            Toast('Error', `Something went wrong with your ${fieldChange} field`)
            return false
        }
    } catch (error) {
        console.log("Error Update member", error)
    }
}

const updatePassword = async (userId, valueChange, Toast, fieldChange) => {
    try {
        const res = await axios.put(`${mainUrl}/v1/user/${userId}/update/password`, valueChange)
        if(res.data.acknowledged) {
            Toast('Success', 'Profile Updated, Please login again')
            return true
        } else {
            Toast('Error', `Something went wrong with your ${fieldChange} field`)
            return false
        }
    } catch (error) {
        Toast('Error', error.response.data.Error)
        console.log("Error Update password", error)
    }
}

export { registerUser, loginUser, logoutUser, findUser, updateMember, updatePassword }
