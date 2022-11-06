//Main
import { useContext, useEffect } from 'react'
import HonoluluBg from './Honolulu'
import BookCafe from './BookCafe'
import NewYork from './NewYork'
import './background.scss'

// Context
import { AudioContext } from '../../context/AudioContext'
import { ScenesContext } from '../../context/ScenesContext'
import { SettingsContext } from '../../context/SettingsContext'

const Background = () => {
    const setEnvAudio = useContext(AudioContext)
    const sceneInfo = useContext(ScenesContext)
    const settingsContext = useContext(SettingsContext)

    const setMusicVolume = (e, typeContext) => {
        const volumePercent = +e.target.value
        e.target.style.background = `linear-gradient(to right, #f3a952 ${volumePercent}%, rgba(40, 40, 40, 0.3) ${volumePercent}%)`

        switch (typeContext) {
            case 'Summer storm':
                setEnvAudio.setSummerStormVolume(volumePercent)
                break;
            case 'keyBoard':
                setEnvAudio.setKeyboardVolume(volumePercent)
                break;
            case 'City Traffic':
                setEnvAudio.setCityTrafficVolume(volumePercent)
                break;
            case 'City Rain':
                setEnvAudio.setCityRainVolume(volumePercent)
                break;
            case 'Ocean':
                setEnvAudio.setOceanVolume(volumePercent)
                break;

            case 'Birds':
                setEnvAudio.setBirdsAudio(volumePercent)
                break;
            default:
                break;
        }
    }

    const setAudioWhenClickCircle = (type) => {
        switch (type) {
            case 'Summer storm':
                if (setEnvAudio.summerStormVolume > 0) {
                    setEnvAudio.setSummerStormVolume(0);
                } else if (setEnvAudio.summerStormVolume === 0) {
                    setEnvAudio.setSummerStormVolume(50);
                }
                break;

            case 'keyBoard':
                if (setEnvAudio.keyboardVolume > 0) {
                    setEnvAudio.setKeyboardVolume(0);
                } else if (setEnvAudio.keyboardVolume === 0) {
                    setEnvAudio.setKeyboardVolume(50);
                }
                break;

            case 'City Traffic':
                if (setEnvAudio.cityTrafficVolume > 0) {
                    setEnvAudio.setCityTrafficVolume(0);
                } else if (setEnvAudio.cityTrafficVolume === 0) {
                    setEnvAudio.setCityTrafficVolume(50);
                }
                break;

            case 'City Rain':
                if (setEnvAudio.cityRainVolume > 0) {
                    setEnvAudio.setCityRainVolume(0);
                } else if (setEnvAudio.cityRainVolume === 0) {
                    setEnvAudio.setCityRainVolume(50);
                }
                break;

            case 'Ocean':
                if (setEnvAudio.oceanVolume > 0) {
                    setEnvAudio.setOceanVolume(0);
                } else if (setEnvAudio.oceanVolume === 0) {
                    setEnvAudio.setOceanVolume(50);
                }
                break;

            case 'Birds':
                if (setEnvAudio.birdsAudio > 0) {
                    setEnvAudio.setBirdsAudio(0);
                } else if (setEnvAudio.birdsAudio === 0) {
                    setEnvAudio.setBirdsAudio(50);
                }
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        const popoverActions = document.querySelectorAll('.background-video .popover-action')
        popoverActions.forEach(popoverAction => {
            popoverAction.classList.toggle('hide', settingsContext.isMouseStopped)
        })
    }, [settingsContext.isMouseStopped])


    useEffect(() => {
        const audioSettings = document.querySelectorAll('.volume-env-audio')
        audioSettings.forEach(audio => {
            switch (audio.classList[1]) {
                case 'summerStorm':
                    audio.style.background = ` linear-gradient(
                            to right, #f3a952 ${+setEnvAudio.summerStormVolume}%, rgba(40, 40, 40, 0.3) ${setEnvAudio.summerStormVolume}%
                            )`
                    break;
                case 'keyBoard':
                    audio.style.background = `linear-gradient(
                        to right, #f3a952 ${+setEnvAudio.keyboardVolume}%, rgba(40, 40, 40, 0.3) ${setEnvAudio.keyboardVolume}%
                        )`
                    break;
                case 'cityTraffic':
                    audio.style.background = `linear-gradient(
                        to right, #f3a952 ${+setEnvAudio.cityTrafficVolume}%, rgba(40, 40, 40, 0.3) ${setEnvAudio.cityTrafficVolume}%
                        )`
                    break;
                case 'cityRain':
                    audio.style.background = `linear-gradient(
                        to right, #f3a952 ${+setEnvAudio.cityRainVolume}%, rgba(40, 40, 40, 0.3) ${setEnvAudio.cityRainVolume}%
                        )`
                    break;
                case 'ocean':
                    audio.style.background = `linear-gradient(
                        to right, #f3a952 ${+setEnvAudio.oceanVolume}%, rgba(40, 40, 40, 0.3) ${setEnvAudio.oceanVolume}%
                        )`
                    break;

                case 'birds':
                    audio.style.background = `linear-gradient(
                        to right, #f3a952 ${+setEnvAudio.birdsAudio}%, rgba(40, 40, 40, 0.3) ${setEnvAudio.birdsAudio}%
                        )`
                    break;
                default:
                    break;
            }
        })
    }, [setEnvAudio])

    const renderBg = () => {
        if (sceneInfo.place === 'Honolulu') {
            return (
                <HonoluluBg envAudio={setEnvAudio} time={sceneInfo.morningScene} location={sceneInfo.location} />
            )
        } else if (sceneInfo.place === 'Book Cafe') {
            return (
                <BookCafe envAudio={setEnvAudio} time={sceneInfo.morningScene} location={sceneInfo.location} />
            )
        } else {
            return (
                <NewYork envAudio={setEnvAudio} time={sceneInfo.morningScene} location={sceneInfo.location} />
            )
        }
    }

    const summerStormBtnLocation = () => {
        if (sceneInfo.place === 'Honolulu') {
            return { top: '18%', left: '40%' }
        }
    }

    const keyBoardBtnLocation = () => {
        if (sceneInfo.place === 'Honolulu') {
            if (sceneInfo.location === 'secondOption') {
                return { display: 'none' }
            } else {
                return { top: '82%', right: '21%' }
            }
        } else if (sceneInfo.place === 'Book Cafe') {
            if (sceneInfo.location === 'firstOption') {
                return { display: 'none' }
            } else if (sceneInfo.location === 'secondOption') {
                return { top: '76%', right: '3%' }
            }
        }
    }

    const oceanBtnLocation = () => {
        if (sceneInfo.location === 'secondOption') {
            return { top: '65%', right: '31%' }
        } else {
            return { display: 'none' }
        }
    }

    const cityRainBtnLocation = () => {
        if (sceneInfo.place === 'Book Cafe') {
            if (sceneInfo.location === 'firstOption') {
                return { top: '43%', left: '6%' }
            } else if (sceneInfo.location === 'secondOption') {
                return { top: '17%', left: '16%' }
            }
        } else if (sceneInfo.place === 'New York') {
            if (sceneInfo.location === 'firstOption') {
                return { top: '22%', right: '28%' }
            } else if (sceneInfo.location === 'secondOption') {
                return { top: '17%', right: '37%' }
            } else {
                return { display: 'none' }

            }
        }
    }

    const cityTrafficBtnLocation = () => {
        if (sceneInfo.place === 'Book Cafe') {
            if (sceneInfo.location === 'firstOption') {
                return { top: '68%', right: '57%' }
            } else if (sceneInfo.location === 'secondOption') {
                return { display: 'none' }
            }
        } else if (sceneInfo.place === 'New York') {
            if (sceneInfo.location === 'firstOption') {
                return { top: '43%', left: '5%' }
            } else {
                return { display: 'none' }
            }
        }
    }

    const birdsBtnLocation = () => {
        if (sceneInfo.location === 'secondOption') {
            return { top: '33%', left: '16%' }
        } else {
            return { display: 'none' }
        }
    }

    return (
        <div className='background-video'>
            {renderBg()}

            {/* Summer Storm Audio */}
            {['Honolulu'].map(sceneName => sceneInfo.place === sceneName && (
                <div className='popover-action' style={summerStormBtnLocation()} key={sceneName}>
                    <div className='popover-circle' onClick={() => setAudioWhenClickCircle('Summer storm')}>
                        <div className='popover-circle-hover'></div>
                    </div>
                    <div className='popover-card'>
                        <h6 className='popover-card-content'>Summer storm</h6>
                        {setEnvAudio.summerStormVolume > 0 && (
                            <div className='track-full'>
                                <input
                                    type='range'
                                    onInput={(e) => setMusicVolume(e, 'Summer storm')}
                                    min={0}
                                    max={100}
                                    className='volume-env-audio summerStorm'
                                    value={setEnvAudio.summerStormVolume}
                                />
                            </div>
                        )}
                    </div>
                </div>
            ))}

            {/* Ocean Audio */}
            {['Honolulu'].map(sceneName => sceneInfo.place === sceneName && (
                <div className='popover-action' style={oceanBtnLocation()} key={sceneName}>
                    <div className='popover-circle' onClick={() => setAudioWhenClickCircle('Ocean')}>
                        <div className='popover-circle-hover'></div>
                    </div>
                    <div className='popover-card'>
                        <h6 className='popover-card-content'>Ocean</h6>
                        {setEnvAudio.oceanVolume > 0 && (
                            <div className='track-full'>
                                <input
                                    type='range'
                                    onInput={(e) => setMusicVolume(e, 'Ocean')}
                                    min={0}
                                    max={100}
                                    className='volume-env-audio ocean'
                                    value={setEnvAudio.oceanVolume}
                                />
                            </div>
                        )}
                    </div>
                </div>
            ))}

            {/* KeyBoard Audio */}
            {['Honolulu', 'Book Cafe'].map(sceneName => sceneInfo.place === sceneName && (
                <div
                    className='popover-action'
                    style={keyBoardBtnLocation()}
                    key={sceneName}
                >
                    <div className='popover-circle' onClick={() => setAudioWhenClickCircle('keyBoard')}>
                        <div className='popover-circle-hover'></div>
                    </div>
                    <div className='popover-card'>
                        <h6 className='popover-card-content'>Keyboard</h6>
                        {setEnvAudio.keyboardVolume > 0 && (
                            <div className='track-full'>
                                <input
                                    type='range'
                                    onInput={(e) => setMusicVolume(e, 'keyBoard')}
                                    min={0}
                                    max={100}
                                    className='volume-env-audio keyBoard'
                                    value={setEnvAudio.keyboardVolume}
                                />
                            </div>
                        )}
                    </div>
                </div>

            ))}

            {/* City Rain Audio */}
            {['Book Cafe', 'New York'].map(sceneName => sceneInfo.place === sceneName && (
                <div
                    className='popover-action'
                    style={cityRainBtnLocation()}
                    key={sceneName}
                >
                    <div className='popover-circle' onClick={() => setAudioWhenClickCircle('City Rain')}>
                        <div className='popover-circle-hover'></div>
                    </div>
                    <div className='popover-card'>
                        <h6 className='popover-card-content'>City Rain</h6>
                        {setEnvAudio.cityRainVolume > 0 && (
                            <div className='track-full'>
                                <input
                                    type='range'
                                    onInput={(e) => setMusicVolume(e, 'City Rain')}
                                    min={0}
                                    max={100}
                                    className='volume-env-audio cityRain'
                                    value={setEnvAudio.cityRainVolume}
                                />
                            </div>
                        )}
                    </div>
                </div>
            ))}

            {/* City Traffic Audio */}
            {['Book Cafe', 'New York'].map(sceneName => sceneInfo.place === sceneName && (
                <div
                    className='popover-action'
                    style={cityTrafficBtnLocation()}
                    key={sceneName}
                >
                    <div className='popover-circle' onClick={() => setAudioWhenClickCircle('City Traffic')}>
                        <div className='popover-circle-hover'></div>
                    </div>
                    <div className='popover-card'>
                        <h6 className='popover-card-content'>City Traffic</h6>
                        {setEnvAudio.cityTrafficVolume > 0 && (
                            <div className='track-full'>
                                <input
                                    type='range'
                                    onInput={(e) => setMusicVolume(e, 'City Traffic')}
                                    min={0}
                                    max={100}
                                    className='volume-env-audio cityTraffic'
                                    value={setEnvAudio.cityTrafficVolume}
                                />
                            </div>
                        )}
                    </div>
                </div>
            ))}

            {/* Birds Audio */}
            {['New York'].map(sceneName => sceneInfo.place === sceneName && (
                <div
                    className='popover-action'
                    style={birdsBtnLocation()}
                    key={sceneName}
                >
                    <div className='popover-circle' onClick={() => setAudioWhenClickCircle('Birds')}>
                        <div className='popover-circle-hover'></div>
                    </div>
                    <div className='popover-card'>
                        <h6 className='popover-card-content'>Birds Chirping</h6>
                        {setEnvAudio.birdsAudio > 0 && (
                            <div className='track-full'>
                                <input
                                    type='range'
                                    onInput={(e) => setMusicVolume(e, 'Birds')}
                                    min={0}
                                    max={100}
                                    className='volume-env-audio birds'
                                    value={setEnvAudio.birdsAudio}
                                />
                            </div>
                        )}
                    </div>
                </div>
            ))}

            {/* Enter In Book Cafe Out Scene */}
            {sceneInfo.place === 'Book Cafe' && sceneInfo.location === 'firstOption' && (
                <div
                    className='popover-action'
                    style={{ top: '60%', right: '27%' }}
                >
                    <div className='popover-circle' onClick={() => sceneInfo.setLocation('secondOption')}>
                        <div className='popover-circle-hover'></div>
                    </div>
                    <div className='popover-card'>
                        <h6 className='popover-card-content'>Enter</h6>
                    </div>
                </div>
            )}

            {/* Out In Book Cafe In Scene */}
            {sceneInfo.place === 'Book Cafe' && sceneInfo.location === 'secondOption' && (
                <div
                    className='popover-action'
                    style={{ top: '67%', left: '0%' }}
                >
                    <div className='popover-circle' onClick={() => sceneInfo.setLocation('firstOption')}>
                        <div className='popover-circle-hover'></div>
                    </div>
                    <div className='popover-card'>
                        <h6 className='popover-card-content'>Go Out</h6>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Background
