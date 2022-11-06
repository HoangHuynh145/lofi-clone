// Main
import { useContext, useState, useEffect } from 'react';
import '../../../access/styles/grid.css';
import './pricingPopup.scss';

// Context
import { PopupContext } from '../../../context/PopupContext'

//Data
import { leftData, rightData } from '../../../data/benefitsData'
import usersFeedback from '../../../data/feedBackData'

//Icon
import checkIcon from '../../../access/svg/check.svg';
import infoIcon from '../../../access/svg/info.svg';
import appleIcon from '../../../access/svg/apple.svg';
import twitterIcon from '../../../access/svg/twitter.svg';
import yaleUniIcon from '../../../access/svg/yale-uni.svg';
import michiUniIcon from '../../../access/svg/michi-uni.svg';
import queenUniIcon from '../../../access/svg/queen-uni.svg';
import arrowIcon from '../../../access/svg/arrow.svg';

// Lib
import { Tooltip } from 'antd';

const PricingPopup = () => {
    const popupContext = useContext(PopupContext)
    const [person, setPerson] = useState(1)
    const [packageType, setPackageType] = useState('Yearly')

    const styleTooltip = {
        padding: '.7rem 1rem',
        textAlign: 'center',
    }

    const renderUser = () => {
        switch (person) {
            case 1:
                return 'engineers'
            case 2:
                return 'students'
            case 3:
                return 'developers'
            case 4:
                return 'designers'
            default:
                break;
        }
    }

    const renderPrice = (packageType) => {
        switch (packageType) {
            case 'Yearly':
                return <h3>$2.99<span>/mo</span></h3>
            case 'Monthly':
                return <h3>$3.99<span>/mo</span></h3>
            case 'Lifetime':
                return <h3>$99.99</h3>
            default:
                break;
        }
    }

    const handleClosePopup = () => {
        popupContext.setPricingPopup(false)
    }

    useEffect(() => {
        const counterId = setInterval(() => {
            setPerson(prev => prev + 1 >= 5 ? prev = 1 : prev = prev + 1);
        }, 3000);

        return () => {
            clearInterval(counterId)
        }
    }, [])

    return (
        <div className={`popup-pricing`}>
            <div className='packages'>
                <div className='packages-list'>
                    <button
                        className={`package-item ${packageType === 'Yearly' ? 'active' : ''}`}
                        onClick={() => setPackageType('Yearly')}
                    >
                        Pay Yearly
                    </button>
                    <button
                        className={`package-item ${packageType === 'Monthly' ? 'active' : ''}`}
                        onClick={() => setPackageType('Monthly')}
                    >
                        Pay Monthly
                    </button>
                    <button
                        className={`package-item ${packageType === 'Lifetime' ? 'active' : ''}`}
                        onClick={() => setPackageType('Lifetime')}
                    >
                        Lifetime
                    </button>
                </div>
                <div className='package-discount' style={{ display: `${packageType === 'Yearly' ? 'block' : 'none'}` }}>
                    <button className='discount-content'>Save 25%</button>
                    <img className='discount-arrow' src={arrowIcon} alt='arrow' />
                </div>
            </div>
            <div className='price-page'>
                <div className='header'>
                    <svg
                        xlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        width="13" height="12" viewBox="0 0 13 12" fill="none"
                        onClick={handleClosePopup}
                    >
                        <path d="M0.760185 11.7339C0.874895 11.8486 1.01046 11.9242 1.16689 11.9607C1.32331 12.0024 1.47713 12.0024 1.62834 11.9607C1.78476 11.9242 1.92033 11.8512 2.03504 11.7417L6.50093 7.26796L10.9746 11.7417C11.1415 11.9085 11.3501 11.992 11.6003 11.992C11.8506 11.9972 12.0644 11.9111 12.2417 11.7339C12.4137 11.5566 12.4998 11.3428 12.4998 11.0925C12.4998 10.8422 12.4164 10.6337 12.2495 10.4668L7.77578 5.99311L12.2495 1.52722C12.4164 1.36036 12.4998 1.1518 12.4998 0.901521C12.505 0.646029 12.419 0.432251 12.2417 0.260185C12.0644 0.0881186 11.8506 0.00208565 11.6003 0.00208565C11.3501 0.00208565 11.1415 0.0855116 10.9746 0.252363L6.50093 4.72608L2.03504 0.252363C1.92033 0.142867 1.78476 0.0698692 1.62834 0.0333704C1.47713 -0.00834259 1.32331 -0.0109497 1.16689 0.0255492C1.01046 0.062048 0.874895 0.14026 0.760185 0.260185C0.650688 0.374895 0.575083 0.510462 0.53337 0.666886C0.496872 0.82331 0.496872 0.979733 0.53337 1.13616C0.575083 1.28737 0.650688 1.41772 0.760185 1.52722L5.22608 5.99311L0.760185 10.4668C0.650688 10.5763 0.575083 10.7093 0.53337 10.8657C0.491657 11.0169 0.48905 11.1707 0.525549 11.3272C0.567262 11.4888 0.645474 11.6244 0.760185 11.7339Z" fill="white"></path>
                    </svg>
                </div>
                <div className="main-content">
                    <div className='package-info'>
                        <div className='package-price'>
                            {renderPrice(packageType)}
                            <Tooltip
                                placement='bottom'
                                color='rgb(35, 35, 35)'
                                overlayInnerStyle={{ color: 'white', borderRadius: '1rem' }}
                                title={
                                    <div
                                        className='tooltip-content'
                                        style={{ ...styleTooltip, maxWidth: '18rem' }}
                                    >
                                        <p>Contact us within 7 days to receive a refund.</p>
                                    </div>
                                }
                            >
                                <span className='refund'>
                                    7 day money back guarantee <img src={infoIcon} alt='info-icon' />
                                </span>
                            </Tooltip>
                        </div>
                        <button className='package-btn'>Go premium</button>
                    </div>
                    <div className='feedback-slider'>
                        <div className="fade-border left"></div>
                        <div className="fade-border"></div>
                        <div className='feedback-container'>
                            {usersFeedback.map(feedback => (
                                <div className='feedback-contents' key={feedback.id}>
                                    <div className='feedback-header'>
                                        <img src={feedback.icon} alt='user-emotion' className='user-emotion' />
                                        <span className='user-job'>{feedback.name}</span>
                                    </div>
                                    <p className='feedback-title'>{feedback.title}</p>
                                </div>
                            ))}
                            {usersFeedback.map(feedback => (
                                <div className='feedback-contents' key={feedback.id}>
                                    <div className='feedback-header'>
                                        <img src={feedback.icon} alt='user-emotion' className='user-emotion' />
                                        <span className='user-job'>{feedback.name}</span>
                                    </div>
                                    <p className='feedback-title'>{feedback.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='benefit-container'>
                        <div>
                            {leftData.map(item => (
                                <div className='benefit' key={item.id}>
                                    <img src={checkIcon} alt='check-icon' />
                                    <span className='benefit-title'>{item.title}</span>
                                    {item.info && (
                                        <Tooltip
                                            placement='bottom'
                                            color='rgb(35, 35, 35)'
                                            overlayInnerStyle={{ borderRadius: '1rem', minWidth: '30rem' }}
                                            title={
                                                <div
                                                    className='tooltip-content'
                                                    style={styleTooltip}
                                                >
                                                    <p>{item.content}</p>
                                                </div>
                                            }
                                        >
                                            <img src={infoIcon} alt='info-icon' style={{ transform: 'scale(1)' }} />
                                        </Tooltip>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div>
                            {rightData.map(item => (
                                <div className='benefit' key={item.id}>
                                    <img src={checkIcon} alt='check-icon' />
                                    <span className='benefit-title'>{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='trusted'>
                        Trusted by thousands of&#160;
                        <span className='text-animation' key={person} >{renderUser(person)}</span>
                        &#160;from:
                    </div>
                    <div className='sponsors-list'>
                        <img className='sponsor' src={appleIcon} alt='sponsor' />
                        <img className='sponsor' src={twitterIcon} alt='sponsor' />
                        <img className='sponsor' src={yaleUniIcon} alt='sponsor' />
                        <img className='sponsor' src={michiUniIcon} alt='sponsor' />
                        <img className='sponsor' src={queenUniIcon} alt='sponsor' />
                    </div>
                    <p className='learn-more'>Learn more about premium</p>
                </div>
            </div>
        </div>
    )
}

export default PricingPopup