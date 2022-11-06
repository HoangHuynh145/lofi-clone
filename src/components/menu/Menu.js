// Main
import './menu.scss'
import Mixer from './Mixer'
import Templates from './Templates'
import SceneDetail from './SceneDetail'
import { useState, useContext, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Tooltip } from 'antd';

// Icon
import premiumIcon from '../../access/svg/premium.svg'
import lockPremiumIcon from '../../access/svg/lock-premium.svg'
import lockUserIcon from '../../access/svg/user-lock.svg'
import subIconScenes from '../../access/svg/sub-icon-scenes.svg'
import subIconVariations from '../../access/svg/sub-icon-variations.svg'


// Conetxt
import { PopupContext } from '../../context/PopupContext'
import { ScenesContext } from '../../context/ScenesContext'
import { SettingsContext } from '../../context/SettingsContext'

// Data
import actionDatas from '../../data/actionsData'
import scenesData from '../../data/scenesData'


const Menu = () => {
    const userInfo = useSelector(state => state?.currentUser)
    const [sceneInfo, setSceneInfo] = useState({})

    const popupState = useContext(PopupContext)
    const sceneSetting = useContext(ScenesContext)
    const settingsContext = useContext(SettingsContext)
    const scenesBannerRef = useRef()
    const scenesContainerRef = useRef()
    
    const styleTooltip = {
        borderRadius: '.7rem',
        maxWidth: '30rem',
        position: 'relative',
        bottom: '1.5rem',
        background: 'rgb(35, 35, 35)',
        zIndex: '9'
    }

    const handleMouseMove = (e, type) => {
        const lable = e.target.closest('.action').querySelector('.label')
        let valueX
        switch (type) {
            case 'Mixer':
                valueX = (73.175 - e.nativeEvent.offsetX) * -1
                break;
            case 'Templates':
                valueX = (104.013 - e.nativeEvent.offsetX) * -1
                break;
            case 'Scenes':
                valueX = (83.825 - e.nativeEvent.offsetX) * -1
                break;
            case 'Tools':
                valueX = (71.825 - e.nativeEvent.offsetX) * -1
                break;
            case 'Timer':
                valueX = (96.7 - e.nativeEvent.offsetX) * -1
                break;
            case 'Notes':
                valueX = (97.312 - e.nativeEvent.offsetX) * -1
                break;
            case 'Insights':
                valueX = (110.138 - e.nativeEvent.offsetX) * -1
                break;
            default:
                break;
        }
        const valueY = e.nativeEvent.offsetY - 5
        lable.style.left = valueX + 'px'
        lable.style.top = valueY + 'px'
    }

    const handleCloseScene = () => {
        scenesBannerRef.current.classList.remove('active')
        setSceneInfo({})
        scenesBannerRef.current.style.minHeight = '63.2rem'
        scenesContainerRef.current.scrollTo(0, 0)
    }

    const hanldeOpenDetailScene = (scene) => {
        scenesBannerRef.current.classList.add('active')
        setSceneInfo(scene)
        if (!scene.pic3) {
            scenesBannerRef.current.style.minHeight = '48rem'
        }
    }

    const handleSetScene = (scene) => {
        if (!scene.isPremium && userInfo?.accessToken) {
            sceneSetting.setPlace(scene.name)
        }
    }

    const testFunc = (type, e) => {
        sceneSetting.setTypeBanner(type)
        if (sceneSetting.typeBanner === e.target.closest('.action').classList[2]) {
            sceneSetting.setTypeBanner('')
        }
    }

    return (
        <div
            className={`
                lateral-right-menu 
                ${sceneSetting.typeBanner === 'Tools' ? 'active' : ''}
                ${settingsContext.isMouseStopped ? 'hide' : ''}
            `}
            onClick={(e) => e.stopPropagation()}
        >
            {/* banner */}
            <div id='banner' className='banner-sub'>
                {/* Mixer */}
                <div id='Mixer' className={`banner-sub-item ${sceneSetting.typeBanner === 'Mixer' ? 'active' : ''}`}>
                    <Mixer />
                </div>

                {/* Templates */}
                <div id='Templates' className={`banner-sub-item ${sceneSetting.typeBanner === 'Templates' ? 'active' : ''}`}>
                    {sceneSetting.typeBanner === 'Templates' && <Templates />}
                </div>

                {/* Scenes */}
                <div id='Scenes' className={`banner-sub-item ${sceneSetting.typeBanner === 'Scenes' ? 'active' : ''}`}>
                    {sceneSetting.typeBanner === 'Scenes' && (
                        <div ref={scenesBannerRef} className='scenes-banner grid wide'>
                            <div ref={scenesContainerRef} className="scenes-banner-container">
                                <div className="banner-header">
                                    <h4>Scenes</h4>
                                </div>
                                <div className="secenes-list row">
                                    {scenesData.map(scene => (
                                        <div
                                            className={`
                                            scene-preview
                                            col l-12 
                                            ${scene.isPremium ? 'lock' : ''} 
                                            ${scene.isLogin && !userInfo?.accessToken ? 'login' : ''}
                                        `}
                                            style={{ margin: '.8rem 0' }}
                                            key={scene.id}
                                            onClick={() => handleSetScene(scene)}
                                        >
                                            <img
                                                className='premium-icon'
                                                src={scene.isPremium ? lockPremiumIcon : lockUserIcon}
                                                alt='premium-icon'
                                            />
                                            <img
                                                src={scene.mainImg}
                                                className='secene-item'
                                                alt={scene.name}
                                                onClick={() => hanldeOpenDetailScene(scene)}
                                            />
                                            <Tooltip
                                                placement="bottom"
                                                title={`${scene.numbScenes} scenes ${scene.numbvariations} variations`}
                                                overlayInnerStyle={styleTooltip}
                                            >
                                                <div className="scene-desc">
                                                    <img src={subIconScenes} alt='' />
                                                    <span>{scene.numbScenes}</span>
                                                    <img src={subIconVariations} alt='' />
                                                    <span>{scene.numbvariations}</span>
                                                </div>
                                            </Tooltip>

                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='scenes-detail-banner'>
                                {sceneInfo.id &&
                                    <SceneDetail
                                        func={handleCloseScene}
                                        sceneInfo={sceneInfo}
                                        userInfo={userInfo}
                                    />
                                }
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Basic tools */}
            {actionDatas.map(action => (
                action.type === 'free' && (
                    <div
                        className={`action basic ${action.name} ${sceneSetting.typeBanner === action.name ? 'selected' : ''}`}
                        key={action.id}
                        onClick={(e) => testFunc(action.name, e)}
                    >
                        <div className="label">{action.name}</div>
                        <div
                            className="svg"
                            onMouseMove={(e) => handleMouseMove(e, action.name)}
                        >
                            {action.svg}
                        </div>
                    </div>
                )
            ))}

            {/* Premium tools */}
            <div className={`premium-tools ${sceneSetting.typeBanner === 'Tools' ? 'open' : 'close'}`}>
                {actionDatas.map(action => (
                    action.type === 'premium' && (
                        <div
                            className={`action ${action.name}`}
                            key={action.id}
                            onClick={() => popupState.setPricingPopup(true)}
                        >
                            <div className="label">
                                {action.name}
                                <img src={premiumIcon} alt='premium-icon' />
                            </div>
                            <div
                                className="svg"
                                onMouseMove={(e) => handleMouseMove(e, action.name)}
                            >
                                {action.svg}
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    )
}

export default Menu
