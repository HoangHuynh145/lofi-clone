// Video
import honoluluInDay from '../../access/Honolulu/Honolulu+Balcony+Day.mp4'
import honoluluInDayRain from '../../access/Honolulu/Honolulu+Balcony+Rainy+Day.mp4'

import honoluluInNight from '../../access/Honolulu/Honolulu+Balcony+Night.mp4'
import honoluluInNightRain from '../../access/Honolulu/Honolulu+Balcony+Rainy+Night.mp4'

import honoluluOutDay from '../../access/Honolulu/Honolulu+Beach+Day.mp4'
import honoluluOutDayRain from '../../access/Honolulu/Honolulu+Beach+Rainy+Day.mp4'

import honoluluOutNight from '../../access/Honolulu/Honolulu+Beach+Night.mp4'
import honoluluOutNightRain from '../../access/Honolulu/Honolulu+Beach+Rainy+Night.mp4'


const Honolulu = ({ envAudio, time, location }) => {

    if (location === 'firstOption') {
        return (
            <div className="background-video-wrapper" key={location}>
                <video
                    src={honoluluInDay}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: time && envAudio.summerStormVolume === 0 ? 1 : 0 }}
                ></video>

                <video
                    src={honoluluInDayRain}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: time && envAudio.summerStormVolume > 0 ? 1 : 0 }}
                ></video>

                <video
                    src={honoluluInNight}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: !time && envAudio.summerStormVolume === 0 ? 1 : 0 }}
                ></video>

                <video
                    src={honoluluInNightRain}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: !time && envAudio.summerStormVolume > 0 ? 1 : 0 }}
                ></video>
            </div>
        )
    } else if (location === 'secondOption') {
        return (
            <div className='background-video-wrapper' key={location}>
                <video
                    src={honoluluOutDay}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: time && envAudio.summerStormVolume === 0 ? 1 : 0 }}
                ></video>

                <video
                    src={honoluluOutDayRain}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: time && envAudio.summerStormVolume > 0 ? 1 : 0 }}
                ></video>

                <video
                    src={honoluluOutNight}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: !time && envAudio.summerStormVolume === 0 ? 1 : 0 }}
                ></video>

                <video
                    src={honoluluOutNightRain}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: !time && envAudio.summerStormVolume > 0 ? 1 : 0 }}
                ></video>
            </div>
        )
    }

}

export default Honolulu
