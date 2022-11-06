import { createContext, useState } from 'react'


const PopupContext = createContext()

const PopupProvider = ({ children }) => {
    const [isMixMode, setIsMixMode] = useState(false)
    const [pricingPopup, setPricingPopup] = useState(false)
    const [loginPopup, setLoginPopup] = useState(false)
    const [signupPopup, setSignupPopup] = useState(false)
    const [isRemovePopup, setIsRemovePopup] = useState(false)
    const [isGuildPopup, setIsGuildPopup] = useState(false)
    const [aboutUsPopup, setAboutUsPopup] = useState(false)
    const [userSettingsPopup, setUserSettingsPopup] = useState(false)


    const [isOpenSettings, setisOpenSettings] = useState(false)
    const [isShare, setisShare] = useState(false)

    const values = {
        isMixMode, setIsMixMode,
        pricingPopup, setPricingPopup,
        isRemovePopup, setIsRemovePopup,
        isOpenSettings, setisOpenSettings,
        isShare, setisShare,
        loginPopup, setLoginPopup,
        signupPopup, setSignupPopup,
        isGuildPopup, setIsGuildPopup,
        aboutUsPopup, setAboutUsPopup,
        userSettingsPopup, setUserSettingsPopup
    }

    return (
        <PopupContext.Provider value={values} >
            {children}
        </PopupContext.Provider>
    )
}

export {PopupContext, PopupProvider}
