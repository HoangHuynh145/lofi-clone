// Main
import { useContext, useRef, useEffect, useState } from 'react'

// Icon
import logo from '../../access/svg/logo.svg'
import spotifyLogo from '../../access/svg/spotify.svg'
import sleepyLogo from '../../access/svg/sleepy.svg'
import jazzyLogo from '../../access/svg/jazzy.svg'
import chillLogo from '../../access/svg/chill.svg'
import unmuteIcon from '../../access/svg/volume_on.svg'
import mutedIcon from '../../access/svg/volume_off.svg'
import lockIcon from '../../access/svg/lock.svg'

// Conetxt
import { AudioContext } from '../../context/AudioContext'
import { ScenesContext } from '../../context/ScenesContext'
import { PopupContext } from '../../context/PopupContext'

// Data
import envSounds from '../../data/envAudioData'
import { chillMusic, jazzyMusic, sleepyMusic } from '../../data/audioData'

const Mixer = () => {
    const audioSetting = useContext(AudioContext)
    const sceneSetting = useContext(ScenesContext)
    const popupState = useContext(PopupContext)
    const [isOpenMoreTools, setIsOpenMoreTools] = useState(false)
    const volumeRef = useRef()
    const envAudioRef = useRef()


    const checkIsDisabled = (sound) => {
        const isFounded = sound[sceneSetting.location].includes(sceneSetting.place)
        return isFounded
    }

    const handleChangeMusicType = (type) => {
        audioSetting.setMusicType(type)
    }

    const setMusicVolume = (e) => {
        const volumePercent = e.target.value
        audioSetting.setMusicVolume(volumePercent)
        volumeRef.current.style.background = `linear-gradient(to right, #f3a952 ${volumePercent}%, #191919 ${volumePercent}%)`
    }

    const setEnvAudio = (e, sound) => {
        const volumePercent = +e.target.value

        switch (sound.type) {
            case 'keyBoard':
                audioSetting.setKeyboardVolume(volumePercent)
                break;
            case 'summerStorm':
                audioSetting.setSummerStormVolume(volumePercent)
                break;
            case 'ocean':
                audioSetting.setOceanVolume(volumePercent)
                break;
            case 'cityTraffic':
                audioSetting.setCityTrafficVolume(volumePercent)
                break;
            case 'cityRain':
                audioSetting.setCityRainVolume(volumePercent)
                break;
            case 'birdChirping':
                audioSetting.setBirdsAudio(volumePercent)
                break;

            default:
                break;
        }
    }

    const renderImg = (sound) => {
        const isDisable = checkIsDisabled(sound)

        switch (sound.type) {
            case 'keyBoard':
                sound.typeContext = audioSetting.keyboardVolume
                break;
            case 'summerStorm':
                sound.typeContext = audioSetting.summerStormVolume
                break;
            case 'ocean':
                sound.typeContext = audioSetting.oceanVolume
                break;
            case 'cityTraffic':
                sound.typeContext = audioSetting.cityTrafficVolume
                break;
            case 'cityRain':
                sound.typeContext = audioSetting.cityRainVolume
                break;
            case 'birdChirping':
                sound.typeContext = audioSetting.birdsAudio
                break;
            default:
                break;
        }

        if (isDisable) {
            return (
                <img
                    src={sound.iconDef}
                    alt={sound.type}
                />
            )
        } else {
            return (
                <img
                    src={sound.typeContext > 0 ? sound.iconActive : sound.iconDef}
                    alt={sound.type}
                />
            )
        }
    }

    // Keyboard Env Audio Settings
    useEffect(() => {
        const trackAudio = document.querySelector('.mixer-banner-sounds .env-audio-container .keyBoard .full-track')
        if (trackAudio) {
            const audioKeyBoard = trackAudio.querySelector('.audio-env-element.keyBoard')
            const circleThumbKeyBoard = trackAudio.querySelector('.circle-thumb.keyBoard')
            circleThumbKeyBoard.style.left = `${audioSetting.keyboardVolume}%`
            circleThumbKeyBoard.style.transform = `translateX(${-audioSetting.keyboardVolume}%)`
            if (audioKeyBoard.muted) {
                circleThumbKeyBoard.style.left = `0`
                circleThumbKeyBoard.style.transform = `translateX(0)`
            }
            if (audioKeyBoard.paused && audioSetting.keyboardVolume > 0) {
                audioKeyBoard.play()
                console.log('Vo day luon')
            }
            audioKeyBoard.volume = audioSetting.keyboardVolume / 100
        }

    }, [audioSetting.keyboardVolume, sceneSetting.location])

    // Summer Storm Env Audio Settings
    useEffect(() => {
        const trackAudio = document.querySelector('.mixer-banner-sounds .env-audio-container .summerStorm .full-track')
        if (trackAudio) {
            const audioSummerStorm = trackAudio.querySelector('.audio-env-element.summerStorm')
            const circleThumbSummerStorm = trackAudio.querySelector('.circle-thumb.summerStorm')
            circleThumbSummerStorm.style.left = `${audioSetting.summerStormVolume}%`
            circleThumbSummerStorm.style.transform = `translateX(${-audioSetting.summerStormVolume}%)`
            if (audioSummerStorm.paused && audioSetting.summerStormVolume > 0) {
                audioSummerStorm.play()
            }
            audioSummerStorm.volume = audioSetting.summerStormVolume / 100
        }
    }, [audioSetting.summerStormVolume, sceneSetting.location])

    // Ocean Env Audio Settings
    useEffect(() => {
        const trackAudio = document.querySelector('.mixer-banner-sounds .env-audio-container .ocean .full-track')
        if (trackAudio) {
            const audioOcean = trackAudio.querySelector('.audio-env-element.ocean')
            const circleThumbOcean = trackAudio.querySelector('.circle-thumb.ocean')
            circleThumbOcean.style.left = `${audioSetting.oceanVolume}%`
            circleThumbOcean.style.transform = `translateX(${-audioSetting.oceanVolume}%)`
            if (audioOcean.paused && audioSetting.oceanVolume > 0) {
                audioOcean.play()
            }
            audioOcean.volume = audioSetting.oceanVolume / 100
        }
    }, [audioSetting.oceanVolume, sceneSetting.location])

    // City Traffic Audio Settings
    useEffect(() => {
        const trackAudio = document.querySelector('.mixer-banner-sounds .env-audio-container .cityTraffic .full-track')
        if (trackAudio) {
            const audioCityTraffic = trackAudio.querySelector('.audio-env-element.cityTraffic')
            const circleThumbCityTraffic = trackAudio.querySelector('.circle-thumb.cityTraffic')
            circleThumbCityTraffic.style.left = `${audioSetting.cityTrafficVolume}%`
            circleThumbCityTraffic.style.transform = `translateX(${-audioSetting.cityTrafficVolume}%)`
            if (audioCityTraffic.paused && audioSetting.cityTrafficVolume > 0) {
                audioCityTraffic.play()
            }
            audioCityTraffic.volume = audioSetting.cityTrafficVolume / 100
        }
    }, [audioSetting.cityTrafficVolume, sceneSetting.location])

    // City Traffic Audio Settings
    useEffect(() => {
        const trackAudio = document.querySelector('.mixer-banner-sounds .env-audio-container .cityRain .full-track')
        if (trackAudio) {
            const audioCityRain = trackAudio.querySelector('.audio-env-element.cityRain')
            const circleThumbCityRain = trackAudio.querySelector('.circle-thumb.cityRain')
            circleThumbCityRain.style.left = `${audioSetting.cityRainVolume}%`
            circleThumbCityRain.style.transform = `translateX(${-audioSetting.cityRainVolume}%)`
            if (audioCityRain.paused && audioSetting.cityRainVolume > 0) {
                audioCityRain.play()
            }
            audioCityRain.volume = audioSetting.cityRainVolume / 100
        }
    }, [audioSetting.cityRainVolume, sceneSetting.location])

    // Birds Audio Settings
    useEffect(() => {
        const trackAudio = document.querySelector('.mixer-banner-sounds .env-audio-container .birdChirping .full-track')
        if (trackAudio) {
            const audioBirds = trackAudio.querySelector('.audio-env-element.birdChirping')
            const circleThumbBirds = trackAudio.querySelector('.circle-thumb.birdChirping')
            circleThumbBirds.style.left = `${audioSetting.birdsAudio}%`
            circleThumbBirds.style.transform = `translateX(${-audioSetting.birdsAudio}%)`
            if (audioBirds.paused && audioSetting.birdsAudio > 0) {
                audioBirds.play()
            }
            audioBirds.volume = audioSetting.birdsAudio / 100
        }
    }, [audioSetting.birdsAudio, sceneSetting.location])

    // Reset Env Context
    useEffect(() => {
        audioSetting.setKeyboardVolume(0)
        audioSetting.setSummerStormVolume(0)
        audioSetting.setOceanVolume(0)
        audioSetting.setCityTrafficVolume(0)
        audioSetting.setCityTrafficVolume(0)
        audioSetting.setBirdsAudio(0)
        sceneSetting.setLocation('firstOption')
    }, [sceneSetting.place])

    useEffect(() => {
        envAudioRef.current.scrollTo(0, 0)
    }, [popupState.isMixMode])

    useEffect(() => {
        popupState.setIsMixMode(isOpenMoreTools)
    }, [isOpenMoreTools])

    return (
        <div className='mixer-banner'>
            <div className='mixer-banner-mood'>
                <div className='banner-header'>
                    <h4>Mood</h4>
                    <div className='contact'>
                        <div className='contact-items_hide'>
                            <img src={spotifyLogo} alt='spotify_logo' />
                            <img src={logo} alt='logo' />
                        </div>
                        <div className='contact-items'>
                            <img src={logo} alt='logo' />
                        </div>
                    </div>
                </div>
                <div className='banner-mood-type'>
                    <div
                        className={`mood-type-item ${audioSetting.musicType === sleepyMusic && 'active'}`}
                        onClick={() => handleChangeMusicType(sleepyMusic)}
                    >
                        <img src={sleepyLogo} alt='sleepy_logo' />
                        <span className='mood-title'>Sleepy</span>
                    </div>
                    <div
                        className={`mood-type-item ${audioSetting.musicType === jazzyMusic && 'active'}`}
                        onClick={() => handleChangeMusicType(jazzyMusic)}
                    >
                        <img src={jazzyLogo} alt='jazzy_logo' />
                        <span className='mood-title'>Jazzy</span>
                    </div>
                    <div
                        className={`mood-type-item ${audioSetting.musicType === chillMusic && 'active'}`}
                        onClick={() => handleChangeMusicType(chillMusic)}
                    >
                        <img src={chillLogo} alt='chill_logo' />
                        <span className='mood-title'>Chill</span>
                    </div>
                </div>
                <div className='banner-mood-volume'>
                    <div className='banner-mood-volume_muted'>
                        <img src={mutedIcon} alt='muted-icon' />
                    </div>
                    <input
                        ref={volumeRef}
                        type='range'
                        className='volume-setting'
                        min={0} max={100} value={audioSetting.musicVolume}
                        onInput={setMusicVolume}
                    />
                    <div className='banner-mood-volume_unmute'>
                        <img src={unmuteIcon} alt='unmute-icon' />
                    </div>
                </div>
            </div>
            <div className='mixer-banner-sounds'>
                <div className='banner-header'>
                    <h4>Sounds</h4>
                </div>
                <div
                    ref={envAudioRef}
                    className={`env-audio-container ${isOpenMoreTools ? 'active' : ''}`}
                >
                    {envSounds.map(sound => (
                        sound.places.includes(sceneSetting.place) && (
                            <div className={`banner-sounds-item ${sound.type}`} key={sound.id}>
                                <div className='sound-name'>{sound.name}</div>
                                <div className='full-track'>
                                    {sound.audio && (
                                        <audio
                                            src={sound.audio}
                                            loop
                                            className={`audio-env-element ${sound.type}`}
                                            muted={checkIsDisabled(sound)}
                                        ></audio>
                                    )}
                                    <div className={`circle-thumb ${sound.type}`}>
                                        {renderImg(sound)}
                                    </div>
                                    <input
                                        type='range'
                                        className={`
                                            env-audio 
                                            ${sound.typeContext > 0 ? 'active' : ''}
                                            ${checkIsDisabled(sound) ? 'disabled' : ''}
                                        `}
                                        min={0} max={100}
                                        value={checkIsDisabled(sound) ? 0 : sound.typeContext}
                                        onInput={(e) => setEnvAudio(e, sound)}
                                        disabled={checkIsDisabled(sound)}
                                    />
                                </div>
                            </div>
                        )
                    ))}
                    {isOpenMoreTools && (
                        <div className='premium-env-audio'>
                            {envSounds.map(sound => (
                                !sound.places.includes(sceneSetting.place) && (
                                    <div className={`banner-sounds-item ${sound.type}`} key={sound.id}>
                                        <div className='sound-name'>{sound.name}</div>
                                        <div className='full-track'>
                                            <div className={`circle-thumb ${sound.type}`}>
                                                {renderImg(sound)}
                                            </div>
                                            <input
                                                type='range'
                                                className={`env-audio ${sound.typeContext > 0 ? 'active' : ''}`}
                                                min={0} max={100} value={sound.typeContext}
                                                onInput={(e) => setEnvAudio(e, sound.type)}
                                            />
                                            <div className='lock-env-audio'>
                                                <img src={lockIcon} alt='lock' />
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                            <div className='premium-banner'>
                                <p className='content'>Get <span>Premium</span> to use our full catalog of sounds</p>
                                <button className='btn-premium' onClick={() => popupState.setPricingPopup(true)}>Go to Pricing</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='mixer-banner-mix-mode' onClick={() => setIsOpenMoreTools(!isOpenMoreTools)}>
                <span>{isOpenMoreTools ? 'Normal Mode' : 'Mix Mode'}</span>
            </div>
        </div >
    )
}

export default Mixer
