// Main
import './navbar.scss';
import { useContext, memo, useState, useEffect } from 'react'
import Player from '../player/Player';
import { useSelector } from 'react-redux'

// Icon
import mainLogo from '../../access/img/mainLogo.gif';
import sunIcon from '../../access/svg/sun.svg';
import moonIcon from '../../access/svg/moon.svg';
import volumeIcon from '../../access/svg/volume.svg';
import mutedIcon from '../../access/svg/volume-nav-off.svg';
import fullscreenIcon from '../../access/svg/fullscreen.svg';
import barsIcon from '../../access/svg/bars.svg';
import userIcon from '../../access/svg/user.svg'
import settingIcon from '../../access/svg/setting.svg'
import tagIcon from '../../access/svg/tag.svg'
import contactIcon from '../../access/svg/contact.svg'
import questionIcon from '../../access/svg/question.svg'
import faqIcon from '../../access/svg/faq.svg'
import shareIcon from '../../access/svg/share-2.svg'
import infoIcon from '../../access/svg/info-2.svg'
import infoFeedbackIcon from '../../access/svg/info-3.svg'

// Context
import { ScenesContext } from '../../context/ScenesContext'
import { PopupContext } from '../../context/PopupContext'
import { SettingsContext } from '../../context/SettingsContext'

//Lib
import moment from 'moment'
import { Switch } from 'antd';


const Navbar = () => {
    const secensContext = useContext(ScenesContext)
    const settingsContext = useContext(SettingsContext)
    const user = useSelector(state => state?.currentUser)
    const popupState = useContext(PopupContext)
    const [isFullScreen, setisFullScreen] = useState(false)
    const [isBarsOpen, setIsBarsOpen] = useState(false)
    const [isMuted, setIsMuted] = useState(false)

    useEffect(() => {
        const audioTag = [...document.getElementsByTagName('audio')]
        const mainAudioTag = document.querySelector('.music-control .main-audio-music')
        mainAudioTag.muted = isMuted
        audioTag.forEach(audio => {
            audio.muted = isMuted
        })
    }, [isMuted])

    const hanldeChangeTime = () => {
        secensContext.setMorningScene(!secensContext.morningScene)
    }

    const hanldeOpenFullScreen = () => {
        const elem = document.documentElement;
        setisFullScreen(true)
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    }

    const hanldeCloseFullScreen = () => {
        setisFullScreen(false)
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }

    return (
        <div className={`navbar ${settingsContext.isMouseStopped ? 'hide' : ''}`}>
            <div className="navbar-left">
                <img className="brand-lofi" src={mainLogo} alt='logo' />
            </div>
            <div className="navbar-right">
                {settingsContext.isShowClock && <p className="navbar-clock">{moment().format('HH:mm A')}</p>}
                <Switch
                    checkedChildren={<img src={sunIcon} alt='sun-svg' />}
                    unCheckedChildren={<img src={moonIcon} alt='moon-svg' />}
                    defaultChecked={true}
                    className="switch"
                    onChange={hanldeChangeTime}
                />
                <button className="premium" onClick={() => popupState.setPricingPopup(true)}>
                    <h3>🚀</h3>
                    <span className='bold'>
                        Access +20 scenes
                        <br />
                        &#38; more with premium
                    </span>
                </button>
                <Player />
                <ul className="menuIcon">
                    <li className="menuIcon-item btn" onClick={() => setIsMuted(!isMuted)}>
                        <img src={isMuted ? mutedIcon : volumeIcon} alt='volume-svg' />
                    </li>
                    <li className="menuIcon-item btn" onClick={isFullScreen ? hanldeCloseFullScreen : hanldeOpenFullScreen}>
                        <img src={fullscreenIcon} alt='fullscreen-svg' />
                    </li>
                    <li className="menuIcon-item btn bars" onClick={() => setIsBarsOpen(!isBarsOpen)}>
                        <img src={barsIcon} alt='bars-svg' />
                        <div
                            className={`bars-item-list ${isBarsOpen ? 'open' : 'close'}`}
                            onMouseLeave={() => setIsBarsOpen(false)}
                        >

                            {user?.accessToken ? (
                                <div className='bar-item' onClick={() => popupState.setUserSettingsPopup(true)}>
                                    <img alt='icon' src={userIcon} />
                                    <span className='bar-title'>User Settings</span>
                                </div>
                            ) : (
                                <div className='bar-item' onClick={() => popupState.setLoginPopup(true)}>
                                    <img alt='icon' src={userIcon} />
                                    <span className='bar-title'>Login/Sigup</span>
                                </div>
                            )}
                            <div className='bar-item' onClick={() => popupState.setisOpenSettings(true)}>
                                <img alt='icon' src={settingIcon} />
                                <span className='bar-title'>General Settings</span>
                            </div>
                            <div className='bar-item' onClick={() => popupState.setPricingPopup(true)}>
                                <img alt='icon' src={tagIcon} />
                                <span className='bar-title'>Pricing</span>
                            </div>
                            <div className='bar-item'>
                                <img alt='icon' src={contactIcon} />
                                <span className='bar-title'>Contact Us</span>
                            </div>
                            <div className='bar-item'>
                                <img alt='icon' src={questionIcon} />
                                <span className='bar-title' onClick={() => popupState.setIsGuildPopup(true)}>How it works</span>
                            </div>
                            <div className='bar-item'>
                                <img alt='icon' src={faqIcon} />
                                <span className='bar-title'>FAQ</span>
                            </div>
                            <div className='bar-item' onClick={() => popupState.setisShare(true)} >
                                <img alt='icon' src={shareIcon} />
                                <span className='bar-title'>Share</span>
                            </div>
                            <div className='bar-item' onClick={() => popupState.setAboutUsPopup(true)}>
                                <img alt='icon' src={infoIcon} />
                                <span className='bar-title'>About us</span>
                            </div>
                            <div className='bar-item'>
                                <img alt='icon' src={infoFeedbackIcon} />
                                <span className='bar-title'>Share feedback</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default memo(Navbar)
