// Main
import './App.scss';
import { useContext, useEffect, useRef } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Menu from '../../components/menu/Menu'
import MixModePopup from '../../components/popup/mixMode/MixModePopup'
import PricingPopup from '../../components/popup/premium/PricingPopup'
import Background from '../../components/background/Background'
import SettingsDraggable from '../../components/draggable/settings/SettingsDraggable';
import ShareDraggable from '../../components/draggable/share/ShareDraggable';
import Guild from '../../components/popup/guild/Guild'
import Loader from '../../components/loader/Loader'

//Context
import { PopupContext } from '../../context/PopupContext'
import { ScenesContext } from '../../context/ScenesContext'
import { SettingsContext } from '../../context/SettingsContext'
import AuthPage from '../../components/popup/auth/Auth'
import AboutUs from '../../components/popup/about/AboutUs';
import UserSetting from '../../components/popup/userSetting/UserSetting';

function App() {
    const popupState = useContext(PopupContext)
    const sceneSetting = useContext(ScenesContext)
    const settingsContext = useContext(SettingsContext)
    let timerRef = useRef()

    const handleCloseMenuBanner = () => {
        const bannerActive = document.querySelector('.lateral-right-menu .banner-sub .banner-sub-item.active')
        if (bannerActive) {
            bannerActive.classList.remove('active')
            sceneSetting.setTypeBanner('')
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            sceneSetting.setIsDone(true)
        }, 1500)

        return () => {
            clearTimeout(timer)
        }
    }, [sceneSetting.isDone])

    const handleMoveMouse = () => {
        clearTimeout(timerRef.current)
        settingsContext.setIsMouseStopped(false)
        if (settingsContext.isHideElement) {
            timerRef.current = setTimeout(() => {
                settingsContext.setIsMouseStopped(true)
            }, settingsContext.timeHiden * 1000)
        }
    }

    return (
        !sceneSetting.isDone ? (
            <Loader />
        ) : (
            <div
                className="main-view-container"
                onClick={sceneSetting.typeBanner ? () => handleCloseMenuBanner() : null}
                onMouseMove={handleMoveMouse}
            >
                <Background />
                <Navbar />
                {/* Popup Started */}
                <div
                    className={`
                        popup 
                        ${popupState.isMixMode ||
                            popupState.pricingPopup ||
                            popupState.isGuildPopup ||
                            popupState.aboutUsPopup ||
                            popupState.userSettingsPopup ? 'active' : ''
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {popupState.isMixMode && <MixModePopup />}
                    {popupState.pricingPopup && <PricingPopup />}
                    {popupState.isGuildPopup && <Guild />}
                    {popupState.aboutUsPopup && <AboutUs />}
                    {popupState.userSettingsPopup && <UserSetting />}
                </div>
                {
                    popupState.signupPopup || popupState.loginPopup ? (
                        <div className="auth-popup">
                            <AuthPage />
                        </div>
                    ) : null
                }
                {/* Popup Ended */}

                <Menu />

                <div className="settings-draggable-conainer">
                    {popupState.isOpenSettings && <SettingsDraggable />}
                </div>

                <div className="share-draggable-conainer">
                    {popupState.isShare && <ShareDraggable />}
                </div>
            </div >
        )
    );
}

export default App;
