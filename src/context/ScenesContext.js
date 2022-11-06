import { createContext, useState } from 'react'

const ScenesContext = createContext()

const ScenesProvider = ({children}) => {
    const [morningScene, setMorningScene] = useState(true)
    const [place, setPlace] = useState('New York')
    const [location, setLocation] = useState('firstOption')
    const [isDone, setIsDone] = useState(false)
    const [typeBanner, setTypeBanner] = useState('')

    const values = {
        morningScene, setMorningScene,
        place, setPlace,
        location, setLocation,
        isDone, setIsDone,
        typeBanner, setTypeBanner
    }
    
    return (
        <ScenesContext.Provider value={values}>
            {children}
        </ScenesContext.Provider>
    )
}

export {ScenesProvider, ScenesContext}
