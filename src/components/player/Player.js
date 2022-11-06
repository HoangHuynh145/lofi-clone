//Main
import { useRef, useContext, useEffect, useState } from 'react'

//Icon
import prevBrn from '../../access/svg/new-prev-btn.svg';
import playBtn from '../../access/svg/new-play-btn.svg';
import pauseBtn from '../../access/svg/new-pause-btn.svg';
import nextBtn from '../../access/svg/new-next-btn.svg';

//Context
import { AudioContext } from '../../context/AudioContext'

const Player = () => {
    const audioSetting = useContext(AudioContext)
    const typeSong = audioSetting.musicType

    const [isPlay, setIsPlay] = useState(false)
    const [currentSong, setCurrentSong] = useState(typeSong[0])

    const btnMessagesRef = useRef()
    const audioRef = useRef()

    const handleNextSong = () => {
        const songIndex = typeSong.findIndex(song => song.id === currentSong.id)
        let currentSongIndex = songIndex + 1
        if (currentSongIndex >= typeSong.length) {
            currentSongIndex = 0;
        }
        setCurrentSong(typeSong[currentSongIndex])
    }

    const handlePrevSong = () => {
        const songIndex = typeSong.findIndex(song => song.id === currentSong.id)
        let currentSongIndex = songIndex - 1
        if (currentSongIndex < 0) {
            currentSongIndex = typeSong.length - 1;
        }
        setCurrentSong(typeSong[currentSongIndex])
    }

    useEffect(() => {
        setCurrentSong(typeSong[0])
    }, [typeSong])

    useEffect(() => {
        if (isPlay) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
        audioRef.current.volume = audioSetting.musicVolume / 100
    })

    return (
        <div className="music-control">
            <audio
                ref={audioRef}
                src={currentSong.src}
                className='main-audio-music'
                onEnded={handleNextSong}
            ></audio>
            <button
                className='control-btn'
                onClick={handlePrevSong}
            >
                <img src={prevBrn} alt='control-btn' />
            </button>

            <button
                className='control-btn'
                onClick={() => setIsPlay(!isPlay)}
            >
                <img src={isPlay ? playBtn : pauseBtn} alt='control-btn' />
            </button>

            <button
                className='control-btn'
                onClick={handleNextSong}
            >
                <img src={nextBtn} alt='control-btn' />
            </button>

            <div className='control-messages'>
                <div ref={btnMessagesRef} className='control-messages-content'>
                    <div className='control-messages-close' onClick={() => btnMessagesRef.current.style.display = 'none'}>
                        <svg
                            xlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg"
                            width="6.5" height="6" viewBox="0 0 13 12" fill="none"
                        >
                            <path d="M0.760185 11.7339C0.874895 11.8486 1.01046 11.9242 1.16689 11.9607C1.32331 12.0024 1.47713 12.0024 1.62834 11.9607C1.78476 11.9242 1.92033 11.8512 2.03504 11.7417L6.50093 7.26796L10.9746 11.7417C11.1415 11.9085 11.3501 11.992 11.6003 11.992C11.8506 11.9972 12.0644 11.9111 12.2417 11.7339C12.4137 11.5566 12.4998 11.3428 12.4998 11.0925C12.4998 10.8422 12.4164 10.6337 12.2495 10.4668L7.77578 5.99311L12.2495 1.52722C12.4164 1.36036 12.4998 1.1518 12.4998 0.901521C12.505 0.646029 12.419 0.432251 12.2417 0.260185C12.0644 0.0881186 11.8506 0.00208565 11.6003 0.00208565C11.3501 0.00208565 11.1415 0.0855116 10.9746 0.252363L6.50093 4.72608L2.03504 0.252363C1.92033 0.142867 1.78476 0.0698692 1.62834 0.0333704C1.47713 -0.00834259 1.32331 -0.0109497 1.16689 0.0255492C1.01046 0.062048 0.874895 0.14026 0.760185 0.260185C0.650688 0.374895 0.575083 0.510462 0.53337 0.666886C0.496872 0.82331 0.496872 0.979733 0.53337 1.13616C0.575083 1.28737 0.650688 1.41772 0.760185 1.52722L5.22608 5.99311L0.760185 10.4668C0.650688 10.5763 0.575083 10.7093 0.53337 10.8657C0.491657 11.0169 0.48905 11.1707 0.525549 11.3272C0.567262 11.4888 0.645474 11.6244 0.760185 11.7339Z" fill="white"></path>
                        </svg>
                    </div>
                    <p>
                        Native player controls have
                        <br />
                        moved here!  🎧
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Player
