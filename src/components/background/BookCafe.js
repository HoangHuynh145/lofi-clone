// Video
import bookCafeOutDay from '../../access/Cafe/Outside+Day.mp4'
import bookCafeOutDayRain from '../../access/Cafe/Outside+Rainy+day.mp4'

import bookCafeOutNight from '../../access/Cafe/Outside+Night.mp4'
import bookCafeOutNightRain from '../../access/Cafe/Outside+Rainy+Night.mp4'

import bookCafeInDay from '../../access/Cafe/Home+Day.mp4'
import bookCafeInDayRain from '../../access/Cafe/Home+Rainy+Day.mp4'

import bookCafeInNight from '../../access/Cafe/Home+Night.mp4'
import bookCafeInNightRain from '../../access/Cafe/Home+Rainy+Nght.mp4'


const BookCafe = ({ envAudio, time, location }) => {

    if (location === 'firstOption') {
        return (
            <div className="background-video-wrapper" key={location}>
                <video
                    src={bookCafeOutDay}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: time && envAudio.cityRainVolume === 0 ? 1 : 0 }}
                ></video>

                <video
                    src={bookCafeOutDayRain}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: time && envAudio.cityRainVolume > 0 ? 1 : 0 }}
                ></video>

                <video
                    src={bookCafeOutNight}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: !time && envAudio.cityRainVolume === 0 ? 1 : 0 }}
                ></video>

                <video
                    src={bookCafeOutNightRain}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: !time && envAudio.cityRainVolume > 0 ? 1 : 0 }}
                ></video>
            </div>
        )
    } else if (location === 'secondOption') {
        return (
            <div className='background-video-wrapper' key={location}>
                <video
                    src={bookCafeInDay}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: time && envAudio.cityRainVolume === 0 ? 1 : 0 }}
                ></video>

                <video
                    src={bookCafeInDayRain}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: time && envAudio.cityRainVolume > 0 ? 1 : 0 }}
                ></video>

                <video
                    src={bookCafeInNight}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: !time && envAudio.cityRainVolume === 0 ? 1 : 0 }}
                ></video>

                <video
                    src={bookCafeInNightRain}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: !time && envAudio.cityRainVolume > 0 ? 1 : 0 }}
                ></video>
            </div>
        )
    }

}

export default BookCafe
