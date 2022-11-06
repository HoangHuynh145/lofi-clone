import { createContext, useState } from 'react'
import { chillMusic } from '../data/audioData'

const AudioContext = createContext()

const AudioProvider = ({ children }) => {
    const [musicType, setMusicType] = useState(chillMusic)
    const [musicVolume, setMusicVolume] = useState(50)
    const [keyboardVolume, setKeyboardVolume] = useState(0)
    const [summerStormVolume, setSummerStormVolume] = useState(0)
    const [oceanVolume, setOceanVolume] = useState(0)
    const [cityTrafficVolume, setCityTrafficVolume] = useState(0)
    const [cityRainVolume, setCityRainVolume] = useState(0)
    const [birdsAudio, setBirdsAudio] = useState(0)
    

    const values = {
        musicType, setMusicType,
        musicVolume, setMusicVolume,
        keyboardVolume, setKeyboardVolume,
        summerStormVolume, setSummerStormVolume,
        oceanVolume, setOceanVolume,
        cityRainVolume, setCityRainVolume,
        cityTrafficVolume, setCityTrafficVolume,
        birdsAudio, setBirdsAudio
    }

    return (
        <AudioContext.Provider value={values} >
            {children}
        </AudioContext.Provider>
    )
}

export { AudioContext, AudioProvider }
