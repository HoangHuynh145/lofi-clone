//Main
import { useState, useContext, useEffect } from 'react'
import { PopupContext } from '../../../context/PopupContext'
import { ScenesContext } from '../../../context/ScenesContext'
import { useDispatch } from 'react-redux'
import {
    loginUser
} from '../../../features/apiRequests'
import Loader from '../../loader/Loader'

// Icon
import brandLogo from '../../../access/img/mainLogo.gif'
import showPasswordIcon from '../../../access/svg/show-password.svg'
import hidePasswordIcon from '../../../access/svg/hide-password.svg'


const LoginPage = ({ handleFocus, hanldeError, Error, Toast }) => {
    const dispatch = useDispatch()
    const popupState = useContext(PopupContext)
    const sceneSetting = useContext(ScenesContext)
    const [isHidePassword, setisHidePassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loadedData, setLoadedData] = useState(false)

    const handleNavigate = () => {
        popupState.setLoginPopup(false)
        popupState.setSignupPopup(true)
        hanldeError({
            isError: false,
            typeMessage: '',
            errorField: '',
        })
        setEmail('')
        setPassword('')
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (email === '' || !email.match(regex)) {
            hanldeError({
                isError: true,
                typeMessage: 'Warning',
                errorField: 'email',
            })
            Toast('Warning', 'Something went wrong in email field (blank or incorrect format)')
        } else if (password === '') {
            hanldeError({
                isError: true,
                typeMessage: 'Warning',
                errorField: 'password',
            })
            Toast('Warning', 'Password is empty, please enter at least 6 characters')
        } else {
            const user = {
                email,
                password
            }
            await loginUser(user, dispatch, setLoadedData, hanldeError, Toast)
        }
    }

    const handleChangeInput = (field, e) => {
        if (field === 'email') {
            if (Error.isError && Error.errorField === 'email') {
                hanldeError({
                    isError: false,
                    typeMessage: '',
                    errorField: '',
                })
            }
            setEmail(e.target.value)
        } else if (field === 'password') {
            if (Error.isError && Error.errorField === 'password') {
                hanldeError({
                    isError: false,
                    typeMessage: '',
                    errorField: '',
                })
            }
            setPassword(e.target.value)
        }
    }


    useEffect(() => {
        let timer
        if (loadedData) {
            timer = setTimeout(() => {
                sceneSetting.setIsDone(true)
                popupState.setLoginPopup(false)
            }, 1500)
        }

        return () => {
            clearTimeout(timer)
        }
    }, [loadedData])

    return (
        loadedData ? (
            <Loader />
        ) : (
            <div className="auth-main-content">
                <img className="brand-logo" src={brandLogo} alt="logo" />
                <h1 className="auth-title">Welcome back!</h1>
                <span className="auth-sub-title">Log In to your account</span>
                <form className="auth-input-group">
                    <div className="auth-card" onClick={(e) => e.stopPropagation()}>
                        <input
                            className={`input-item ${Error.errorField === 'email' ? Error.typeMessage : ''}`}
                            type="email"
                            placeholder="Email"
                            value={email}
                            onFocus={(e) => handleFocus(0, e)}
                            onChange={(e) => handleChangeInput('email', e)}
                        />
                        <div className="input-password-wrapper">
                            <input
                                className={`input-item ${Error.errorField === 'password' ? Error.typeMessage : ''}`}
                                type={`${isHidePassword ? 'text' : 'password'}`}
                                placeholder="Password"
                                value={password}
                                onFocus={(e) => handleFocus(1, e)}
                                onChange={(e) => handleChangeInput('password', e)}
                            />
                            <img
                                className="eye-icon"
                                src={isHidePassword ? showPasswordIcon : hidePasswordIcon}
                                alt='icon-password'
                                onClick={() => setisHidePassword(!isHidePassword)}
                            />
                        </div>
                        <div className="fake-border"></div>
                    </div>
                    <button type="submit" className="auth-btn" onClick={handleLogin}>Login</button>
                    <span className='fogot-password'>Forgot password?</span>
                </form>
                <p className="auth-navigate">Don't have an account? <span onClick={handleNavigate}>Sign Up for free</span></p>
            </div >
        )
    )
}

export default LoginPage
