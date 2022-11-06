// Video
import newYorkInDay from '../../access/NewYork/New+York+Bedroom+Day.mp4'
import newYorkInDayRain from '../../access/NewYork/New+York+Bedroom+Rainy+Day.mp4'

import newYorkInNight from '../../access/NewYork/New+York+Bedroom+Night.mp4'
import newYorkInNightRain from '../../access/NewYork/New+York+Bedroom+Rainy+Night.mp4'

import newYorkOutDay from '../../access/NewYork/Central+Park+Day.mp4'
import newYorkOutDayRain from '../../access/NewYork/Central+Park+Rainy+Day.mp4'

import newYorkOutNight from '../../access/NewYork/Central+Park+Night.mp4'
import newYorkOutNightRain from '../../access/NewYork/Central+Park+Rainy+Night.mp4'

const NewYork = ({ envAudio, time, location }) => {

    if (location === 'firstOption') {
        return (
            <div className="background-video-wrapper" key={location}>
                <video
                    src={newYorkInDay}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: time && envAudio.cityRainVolume === 0 ? 1 : 0 }}
                ></video>

                <video
                    src={newYorkInDayRain}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: time && envAudio.cityRainVolume > 0 ? 1 : 0 }}
                ></video>

                <video
                    src={newYorkInNight}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: !time && envAudio.cityRainVolume === 0 ? 1 : 0 }}
                ></video>

                <video
                    src={newYorkInNightRain}
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
                    src={newYorkOutDay}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: time && envAudio.cityRainVolume === 0 ? 1 : 0 }}
                ></video>

                <video
                    src={newYorkOutDayRain}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: time && envAudio.cityRainVolume > 0 ? 1 : 0 }}
                ></video>

                <video
                    src={newYorkOutNight}
                    preload='auto'
                    loop={true}
                    playsInline={true}
                    autoPlay
                    muted={true}
                    className='video-player'
                    style={{ opacity: !time && envAudio.cityRainVolume === 0 ? 1 : 0 }}
                ></video>

                <video
                    src={newYorkOutNightRain}
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

export default NewYork
