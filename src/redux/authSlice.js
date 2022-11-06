import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        regiter: {
            isFeching: false,
            success: false,
            error: false,
        },
        currentUser: null,
        login: {
            isFeching: false,
            success: false,
            error: false,
        },
        logout: {
            isFeching: false,
            success: false,
            error: false,
        }
    },
    reducers: {
        registerStart: (state) => {
            state.regiter.isFeching = true
        },
        registerSuccess: (state, actions) => {
            state.regiter.isFeching = false
            state.regiter.success = true
            state.regiter.error = false
            state.currentUser = actions.payload
        },
        registerFailed: (state) => {
            state.regiter.isFeching = false
            state.regiter.success = false
            state.regiter.error = true
        },

        loginStart: (state) => {
            state.login.isFeching = true
        },
        loginSuccess: (state, actions) => {
            state.login.isFeching = false
            state.login.success = true
            state.login.error = false
            state.currentUser = actions.payload
        },
        loginFailed: (state) => {
            state.login.isFeching = false
            state.login.success = false
            state.login.error = true
        },

        logoutStart: (state) => {
            state.logout.isFeching = true
        },
        logoutSuccess: (state) =>{
            state.logout.isFeching = false
            state.logout.success = true
            state.currentUser = null
            state.logout.error = false
        },
        logoutFailed: (state) => {
            state.logout.isFeching = false
            state.logout.error = true
            state.logout.success = false
        }

    }
})

export const {
    registerStart,
    registerSuccess,
    registerFailed,
    loginStart,
    loginSuccess,
    loginFailed,
    logoutStart,
    logoutSuccess,
    logoutFailed
} = authSlice.actions

export default authSlice.reducer
