import { createContext, useState } from 'react'

const SettingsContext = createContext()

const SettingsProvider = ({ children }) => {
    const [timeHiden, setTimeHiden] = useState(15)
    const [isHideElement, setIsHideElement] = useState(false)
    const [isShowClock, setIsShowClock] = useState(false)
    const [isShortcuts, setIsShortcuts] = useState(false)
    const [isMouseStopped, setIsMouseStopped] = useState(false)


    const values = {
        timeHiden, setTimeHiden,
        isHideElement, setIsHideElement,
        isShowClock, setIsShowClock,
        isShortcuts, setIsShortcuts,
        isMouseStopped, setIsMouseStopped
    }

    return (
        <SettingsContext.Provider value={values}>
            {children}
        </SettingsContext.Provider>
    )
}

export { SettingsProvider, SettingsContext }
