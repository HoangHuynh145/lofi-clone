//Main
import { useContext } from 'react'
import './aboutUs.scss'
import { PopupContext } from '../../../context/PopupContext'

//Icon
import closeIcon from '../../../access/svg/close-icon.svg'
import insLogo from '../../../access/svg/ins-logo.svg'
import twitterLogo from '../../../access/svg/twitter-logo.svg'
import clockLogo from '../../../access/svg/clock-logo.svg'


const AboutUs = () => {
    const popupSetting = useContext(PopupContext)

    return (
        <div className="about-us-container">
            <img src={closeIcon} alt="" className="close-icon" onClick={() => popupSetting.setAboutUsPopup(false)} />
            <div className="introduce">
                <h1 className='intro-header'>About us</h1>
                <p className='intro-title'>As (mostly) students, we understand how difficult it is to just sit at your desk and focus. Especially when you have to set your music, timer and notes from three different devices or websites, while getting bombarded with ads, maybe of yet another productivity tool. We made lofi.co as a way to help you fix this and finally have a personal, calm digital space to work, study or just unwind. With a growing library of 20+ original interactive illustrations, 15+ calming ambient sounds and powerful but still easy-to-use tools like our timer with time-tracked tasks, we are now building what aims to be the go to platform for everyone working at their computer, with the goal of making productivity less stressful.
                    <br />
                    <br />
                    We are constantly improving, make sure to follow our socials to stay updated!
                </p>
            </div>
            <div className="social-wrapper">
                <div className="social-item">
                    <img src={insLogo} alt="social-logo" />
                    <span>Instagram</span>
                </div>
                <div className="social-item">
                    <img src={twitterLogo} alt="social-logo" />
                    <span>Twitter</span>
                </div>
                <div className="social-item">
                    <img src={clockLogo} alt="social-logo" />
                    <span>hello@lofi.co</span>
                </div>
            </div>
            <div className="policies-wrapper">
                <div className='policies-content'>Terms & Conditions</div>
                <div className='fake-line'></div>
                <div className='policies-content'>Privacy policy</div>
            </div>
        </div>
    )
}

export default AboutUs
