// Main
import { useContext } from 'react'

//Icon
import angleRightIcon from '../../access/svg/angle-right.svg';
import downloadIcon from '../../access/svg/download.svg';

// Contexr
import { ScenesContext } from '../../context/ScenesContext'
import { PopupContext } from '../../context/PopupContext'

const SceneDetail = ({ func, sceneInfo, userInfo }) => {
    const setSceneInfo = useContext(ScenesContext)
    const popupSetting = useContext(PopupContext)

    return (
        <div className="switch-secene grid wide">
            <div className="switch-secene-header">
                <img src={angleRightIcon} alt='angle-right' onClick={func} />
                <span>Switch scene</span>
            </div>
            <div className={`
                secenes-selector-list row 
                ${(sceneInfo.isPremium) || (sceneInfo.isLogin && !userInfo?.accessToken) ? 'lock' : ''}`
            }>
                {/* PIC 1 */}
                <div
                    className={`col l-12 secene-item-wrapper ${sceneInfo.pic3 ? 'higher' : ''}`}
                    style={{ margin: '.8rem 0' }}
                    onClick={() => setSceneInfo.setLocation('firstOption')}
                >
                    <img src={sceneInfo.pic1} alt='scene-item' />
                    <div className={`scene-actions ${sceneInfo.isPremium ? 'hidden' : ''}`}>
                        <div className={`seleted-scene ${setSceneInfo.location === 'firstOption' ? 'active' : ''}`}></div>
                        <div className='download-scene'>
                            <p>Go Premium to download</p>
                            <img src={downloadIcon} alt='download-icon' />
                        </div>
                    </div>
                </div>

                {/* PIC 2 */}
                <div
                    className={`col l-12 secene-item-wrapper ${sceneInfo.pic3 ? 'higher' : ''}`}
                    style={{ margin: '.8rem 0' }}
                    onClick={() => setSceneInfo.setLocation('secondOption')}
                >
                    <img src={sceneInfo.pic2} alt='scene-item' />
                    <div className={`scene-actions ${sceneInfo.isPremium ? 'hidden' : ''}`}>
                        <div className={`seleted-scene ${setSceneInfo.location === 'secondOption' ? 'active' : ''}`}></div>
                        <div className='download-scene'>
                            <p>Go Premium to download</p>
                            <img src={downloadIcon} alt='download-icon' />
                        </div>
                    </div>
                </div>

                {/* PIC 3 */}
                {sceneInfo.pic3 && (
                    <div
                        className='col l-12 secene-item-wrapper higher'
                        style={{ margin: '.8rem 0' }}
                        onClick={() => setSceneInfo.setLocation('thirdOption')}
                    >
                        <img src={sceneInfo.pic3} alt='scene-item' />
                        <div className={`scene-actions ${sceneInfo.isPremium ? 'hidden' : ''}`}>
                            <div className={`seleted-scene ${setSceneInfo.location === 'thirdOption' ? 'active' : ''}`}></div>
                            <div className='download-scene'>
                                <p>Go Premium to download</p>
                                <img src={downloadIcon} alt='download-icon' />
                            </div>
                        </div>
                    </div>
                )}

                {sceneInfo.isLogin && !userInfo?.accessToken ? (
                    <div className='premium-banner'>
                        <p className='content'>
                            <span>Login</span> to use this catalog of sounds</p>
                        <button className='btn-premium' onClick={() => popupSetting.setLoginPopup(true)}>Login now</button>
                    </div>
                ) : (
                    <div className='premium-banner'>
                        <p className='content'>
                            Get <span>Premium</span> to use our full catalog of sounds</p>
                        <button className='btn-premium' onClick={() => popupSetting.setPricingPopup(true)}>Go to Pricing</button>
                    </div>
                )}

            </div>
        </div>
    )
}

export default SceneDetail
