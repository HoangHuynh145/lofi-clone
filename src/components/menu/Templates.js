//Main
import { useContext } from 'react'

//Icon
import chillTemplate from '../../access/svg/chill-template.svg';
import focusTemplate from '../../access/svg/focus-template.svg';
import sleepTemplate from '../../access/svg/sleep-template.svg'

//Context
import { PopupContext } from '../../context/PopupContext'

const Templates = () => {
    const popupState = useContext(PopupContext)

    return (
        <div className="templates-banner">
            <div className="playlists-list">
                <div className="banner-header">
                    <h4>Playlists</h4>
                </div>
                <div className="templates-list">
                    <img src={chillTemplate} className="template-item" alt='template-item' />
                    <img src={focusTemplate} className="template-item" alt='template-item' />
                    <img src={sleepTemplate} className="template-item" alt='template-item' />
                </div>
            </div>
            <div className="templates-saved">
                <div className="banner-header">
                    <h4>Templates</h4>
                </div>
                <p>You don't have any templates saved.</p>
            </div>
            <div className='premium-banner'>
                <p className='content'>Get <span>Premium</span> to use our full catalog of sounds</p>
                <button className='btn-premium' onClick={() => popupState.setPricingPopup(true)}>Go to Pricing</button>
            </div>
        </div >
    )
}

export default Templates
