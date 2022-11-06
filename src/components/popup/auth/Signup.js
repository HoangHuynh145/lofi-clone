// Main
import { useState, useContext, useEffect } from 'react'
import { PopupContext } from '../../../context/PopupContext'
import { ScenesContext } from '../../../context/ScenesContext'
import { useDispatch } from 'react-redux'
import {
    registerUser, findUser
} from '../../../features/apiRequests'
import Loader from '../../loader/Loader'

//Logo
import brandLogo from '../../../access/img/mainLogo.gif'
import showPasswordIcon from '../../../access/svg/show-password.svg'
import hidePasswordIcon from '../../../access/svg/hide-password.svg'


const SignupPage = ({ handleFocus, hanldeError, Error, Toast }) => {
    const popupState = useContext(PopupContext)
    const sceneSetting = useContext(ScenesContext)
    const [isHidePassword, setisHidePassword] = useState(false)
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newUserAdded, setNewUserAdded] = useState(false)


    const handleNavigate = () => {
        popupState.setLoginPopup(true)
        popupState.setSignupPopup(false)
        hanldeError({
            isError: false,
            typeMessage: '',
            errorField: '',
        })
        setUsername('')
        setEmail('')
        setPassword('')
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (username === '') {
            hanldeError({
                isError: true,
                typeMessage: 'Warning',
                errorField: 'username',
            })
            Toast('Warning', 'User name is empty, please enter at least 1 characters')
        } else if (email === '' || !email.match(regex)) {
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
            const isFindUser = await findUser(email, Toast, hanldeError)
            if (!isFindUser) {
                const newUser = {
                    username,
                    email,
                    password
                }
                await registerUser(newUser, dispatch, setNewUserAdded)
            }
        }
    }

    const handleChangeInput = (field, e) => {
        if (field === 'username') {
            if (Error.isError && Error.errorField === 'username') {
                hanldeError({
                    isError: false,
                    typeMessage: '',
                    errorField: '',
                })
            }
            setUsername(e.target.value)
        } else if (field === 'email') {
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
        if (newUserAdded) {
            timer = setTimeout(() => {
                sceneSetting.setIsDone(true)
                popupState.setSignupPopup(false)
            }, 1500)
        }

        return () => {
            clearTimeout(timer)
        }
    }, [newUserAdded])

    return (
        newUserAdded ? (
            <Loader />
        ) : (
            <div className="auth-main-content">
                <img className="brand-logo signup" src={brandLogo} alt="logo" />
                <h1 className="auth-title">Nice to meet you!</h1>
                <span className="auth-sub-title">Sign up for a free account.</span>
                <form className="auth-input-group">
                    <div className="auth-card" onClick={(e) => e.stopPropagation()}>
                        <input
                            className={`input-item ${Error.errorField === 'username' ? Error.typeMessage : ''}`}
                            type="text"
                            placeholder="Username"
                            value={username}
                            onFocus={(e) => handleFocus(0, e)}
                            onChange={(e) => handleChangeInput('username', e)}
                        />
                        <input
                            className={`input-item ${Error.errorField === 'email' ? Error.typeMessage : ''}`}
                            type="email"
                            placeholder="Email"
                            value={email}
                            onFocus={(e) => handleFocus(1, e)}
                            onChange={(e) => handleChangeInput('email', e)}
                        />
                        <div className="input-password-wrapper">
                            <input
                                className={`input-item ${Error.errorField === 'password' ? Error.typeMessage : ''}`}
                                type={`${isHidePassword ? 'text' : 'password'}`}
                                placeholder="Password"
                                value={password}
                                onFocus={(e) => handleFocus(2, e)}
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
                    <p className="policies">
                        By signing up, you agree to our
                        <br />
                        <span>Privacy Policy & Terms of Service</span>
                    </p>
                    <button type="submit" className="auth-btn" onClick={handleRegister}>Sign up</button>
                </form>
                <p className="auth-navigate">Already have an account? <span onClick={handleNavigate}>Log In</span></p>
            </div>
        )
    )
}

export default SignupPage
