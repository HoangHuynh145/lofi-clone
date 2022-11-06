//Main
import { useEffect, useState, useRef, useContext } from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import './guild.scss'
import { PopupContext } from '../../../context/PopupContext'

//Icon
import closeIcon from '../../../access/svg/close-icon.svg'
import brandLogo from '../../../access/img/mainLogo.gif'

//Data
import { tutorialsVideo, tutorialContent } from '../../../data/guildData'

const Guild = () => {
    const slidesRef = useRef()
    const [count, setCount] = useState(0)
    const popupSetting = useContext(PopupContext)

    useEffect(() => {
        const percent = 36 * count
        slidesRef.current.style.left = -percent + 'rem';
    }, [count])

    const [test] = useTypewriter({
        words: ['focus', 'work', 'study', 'relax'],
        loop: false,
        typeSpeed: 180,
        deleteSpeed: 70,
        delaySpeed: 1500,
    })

    return (
        <div className="guild-container">
            <img
                src={closeIcon}
                alt="close-icon"
                className='close-icon'
                onClick={() => popupSetting.setIsGuildPopup(false)}
            />
            <div className="main-guild-content">
                <div className="guild-slider">
                    <div ref={slidesRef} className='guild-slides'>
                        <div className="slide first">
                            <img src={brandLogo} alt="" />
                        </div>
                        {tutorialsVideo.map(slide => (
                            <div className="slide" key={slide.id}>
                                <video
                                    src={slide.display}
                                    muted
                                    autoPlay
                                    playsInline
                                    className="guild-slide-video"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="navigation">
                        {[0, 1, 2, 3, 4].map(number => (
                            <div key={number} className={`nav-btn ${count === number ? 'active' : ''}`} onClick={() => setCount(number)}></div>
                        ))}
                    </div>
                </div>
                {count === 0 ? (
                    <>
                        <div className="content-animate">
                            <div>
                                <span className="text animtate-text">Your calm digital space to {test}</span>
                            </div>
                            <div className="fake-cursor"></div>
                        </div>
                        <div className="sub-title-list">
                            <p className="first-sub-title">Welcome to lofi.co. Let us show you around!</p>
                        </div>
                    </>
                ) : (
                    tutorialContent.map(content => content.id === count && (
                        <>
                            <div className='content-animate' key={content.id}>
                                <div>
                                    <span className="text animtate-text">{content.firstTitle}</span>
                                    <span className="text static-text">{content.secTitle}</span>
                                </div>
                            </div>
                            <div className="sub-title-list no-grow">
                                <p className="first-sub-title">{content.firstSubTitle}</p>
                                {content.secSubTitle}
                            </div>
                        </>
                    ))
                )}
                <div className="control-guild">
                    <button
                        className="btn-control"
                        onClick={() => setCount(prev => prev + 1 >= 5 ? prev = 0 : prev + 1)}
                    >
                        {count === 0 ? 'Take tour' : 'Next'}
                    </button>
                    <p className="out-guild" onClick={() => popupSetting.setIsGuildPopup(false)}>Leave tutorial</p>
                </div>
            </div>
        </div>
    )
}

export default Guild
