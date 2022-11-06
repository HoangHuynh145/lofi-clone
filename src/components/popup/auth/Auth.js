//Lib
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import PulseLoader from "react-spinners/PulseLoader";

//Main
import { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import LoginPage from './Login'
import SignupPage from './Signup'
import './auth.scss'

//Icon
import closeIcon from '../../../access/svg/close-icon.svg'

//Context
import { PopupContext } from '../../../context/PopupContext'


const Auth = () => {
    const stateLogin = useSelector(state => state?.login.isFeching)
    const registerState = useSelector(state => state?.regiter.isFeching)

    const popupState = useContext(PopupContext)
    const [error, setError] = useState({
        isError: false,
        typeMessage: '',
        errorField: '',
    })

    const handleFocus = (order, e) => {
        const authCard = e.target.closest('.auth-card')
        const countInputChild = authCard.childElementCount - 1
        const fakeBorder = authCard.querySelector('.fake-border')
        fakeBorder.classList.add('active')
        const percent = (1 / countInputChild * order) * 100
        fakeBorder.style.top = percent + '%'
    }

    const handleRemoveFakeBorder = () => {
        const fakeBorderActive = document.querySelector('.auth-input-group .auth-card .fake-border.active')
        fakeBorderActive?.classList.remove('active')
    }

    const handleCloseAuthPopup = () => {
        popupState.setLoginPopup(false)
        popupState.setSignupPopup(false)
    }

    const handleToast = (type, message) => {
        if (type === 'Error') {
            toast.error(message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            })
        } else if (type === 'Warning') {
            toast.warning(message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            })
        }
    }

    return (
        <div className="auth-container" onClick={handleRemoveFakeBorder}>
            <img className="auth-popup-close" src={closeIcon} alt="close-icon" onClick={handleCloseAuthPopup} />
            {popupState.loginPopup && <LoginPage handleFocus={handleFocus} hanldeError={setError} Error={error} Toast={handleToast} />}
            {popupState.signupPopup && <SignupPage handleFocus={handleFocus} hanldeError={setError} Error={error} Toast={handleToast} />}
            <ToastContainer />
            {(stateLogin || registerState) && (
                <div className="loader-requests">
                    <PulseLoader
                        color="#fff"
                        loading={stateLogin || registerState}
                        margin={5}
                        size={12}
                        speedMultiplier={0.75}
                    />
                </div>
            )}
        </div>
    )
}

export default Auth
