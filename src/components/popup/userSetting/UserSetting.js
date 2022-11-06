//Main
import { useState, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './userSetting.scss'
import staticLogo from '../../../access/img/white-logo.jpg'
import { logoutUser, updateMember, updatePassword } from '../../../features/apiRequests'

//Context
import { PopupContext } from '../../../context/PopupContext'
import { ScenesContext } from '../../../context/ScenesContext'

//Lib
import { ToastContainer, toast } from 'react-toastify';
import PulseLoader from "react-spinners/PulseLoader";

const UserSetting = () => {
    const dispatch = useDispatch()
    const sceneSetting = useContext(ScenesContext)
    const userInfor = useSelector(state => state?.currentUser)
    const logoutState = useSelector(state => state?.logout.isFeching)
    const popupSettings = useContext(PopupContext)
    const [type, setType] = useState('Profile')
    const [username, setUsername] = useState(userInfor?.others.username)
    const [email, setEmail] = useState(userInfor?.others.email)
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const hanldeLogout = async () => {
        await logoutUser(dispatch, userInfor.accessToken, userInfor.others._id);
        popupSettings.setUserSettingsPopup(false)
        sceneSetting.setIsDone(false)
        sceneSetting.setPlace('New York')
        sceneSetting.setLocation('firstOption')
    }

    const hanldeToast = (type, message) => {
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
        } else if (type === 'Success') {
            toast.success(message, {
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

    const handleChangeName = () => {
        if (username === '') {
            hanldeToast('Error', 'Please enter a username least 1 character')
        } else {
            updateMember(userInfor.others._id, username, hanldeToast, 'username')
        }
    }

    const handleChangeEmail = () => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (email === '' || !email.match(regex)) {
            hanldeToast('Error', 'Something went wrong in email field (blank or incorrect format)')
        } else {
            const state = updateMember(userInfor.others._id, email, hanldeToast, 'email')
            if (state) {
                hanldeLogout()
                popupSettings.setLoginPopup(true)
            }
        }
    }

    const handleChangePassword = () => {
        if (password === '' || newPassword === '') {
            hanldeToast('Error', 'Old and new password required')
        } else {
            if (newPassword === confirmPassword) {
                const valueChange = {
                    password,
                    newPassword,
                }
                const state = updatePassword(userInfor.others._id, valueChange, hanldeToast, 'password')
                if (state) {
                    hanldeLogout()
                    popupSettings.setLoginPopup(true)
                }
            } else {
                hanldeToast('Error', 'Passwords do not match')
            }
        }
    }

    return (
        <div className="user-settings-container" onClick={() => popupSettings.setUserSettingsPopup(false)}>
            <div className="main-content grid wide" onClick={(e) => e.stopPropagation()}>
                <div className="row">
                    <div className="col l-3">
                        <div className="right-content">
                            <div className="static-logo">
                                <img src={staticLogo} alt="static-logo" />
                            </div>
                            <div className="profile-list">
                                <span
                                    className={`profile-items ${type === 'Profile' ? 'active' : ''}`}
                                    onClick={() => setType('Profile')}
                                >
                                    Profile
                                </span>
                                <span
                                    className={`profile-items ${type === 'Member' ? 'active' : ''}`}
                                    onClick={() => setType('Member')}
                                >
                                    Membership
                                </span>
                                <span className="profile-items"></span>
                                <span className="profile-items" onClick={hanldeLogout}>Logout</span>
                            </div>
                        </div>
                    </div>
                    <div className="col l-9">
                        {type === 'Profile' ? (
                            <div className="left-content">
                                {/* User Name */}
                                <div className="profile-member">
                                    <div className="profile-member-header">
                                        <h3 className="profile-name">My Infomation</h3>
                                        <button
                                            className="profile-update"
                                            onClick={handleChangeName}
                                        >
                                            Update
                                        </button>
                                    </div>
                                    <div className="profile-content">
                                        <input
                                            className="profile-input"
                                            id="username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                        <label htmlFor="username" className="subtile-label">Username</label>
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="profile-member">
                                    <div className="profile-member-header">
                                        <h3 className="profile-name">Email Address</h3>
                                        <button
                                            className="profile-update"
                                            onClick={handleChangeEmail}
                                        >
                                            Update Email
                                        </button>
                                    </div>
                                    <div className="profile-content">
                                        <input
                                            className="profile-input"
                                            id="userMail"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label htmlFor="userMail" className="subtile-label">Email Address</label>
                                    </div>
                                </div>
                                {/* Password */}
                                <div className="profile-member">
                                    <div className="profile-member-header">
                                        <h3 className="profile-name">Change Password</h3>
                                        <button
                                            className="profile-update"
                                            onClick={handleChangePassword}
                                        >
                                            Update Password
                                        </button>
                                    </div>
                                    <div className="profile-content">
                                        <input
                                            type="password"
                                            className="profile-input"
                                            id="currentPassword"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <label htmlFor="currentPassword" className="subtile-label">Current Password</label>
                                    </div>
                                    <div className="profile-content">
                                        <input
                                            type="password"
                                            className="profile-input"
                                            id="newPassword"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                        />
                                        <label htmlFor="newPassword" className="subtile-label">New Password</label>
                                    </div>
                                    <div className="profile-content">
                                        <input
                                            type="password"
                                            className="profile-input"
                                            id="confirmPassword"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                        <label htmlFor="confirmPassword" className="subtile-label">Confirm</label>
                                    </div>
                                </div>
                            </div>
                        ) : type === 'Member' && (
                            <div className="left-content">
                                <div className="profile-member">
                                    <div className="profile-member-header">
                                        <h3 className="profile-name">Manage Membership</h3>
                                    </div>
                                    <div className="package-content">
                                        <div className="package-info">
                                            <div className="info-above">
                                                <span className="package-type">Free Plan</span>
                                                <span className="package-active">Active</span>
                                            </div>
                                            <span className="package-price">FREE</span>
                                        </div>
                                        <button className="cancel-package">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <ToastContainer />
            {logoutState && (
                <div className="loader-requests">
                    <PulseLoader
                        color="#fff"
                        loading={logoutState}
                        margin={5}
                        size={12}
                        speedMultiplier={0.75}
                    />
                </div>
            )}
        </div>
    )
}

export default UserSetting
