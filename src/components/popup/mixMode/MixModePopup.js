//Main
import { useContext, useState } from 'react'
import './mixModePopup.scss'

// Icon
import closeIcon from '../../../access/svg/close-icon.svg';
import mixModeicon from '../../../access/svg/mix-icon.svg'

// Lib
import { Checkbox } from 'antd';

//Context
import { PopupContext } from '../../../context/PopupContext'


const MixModePopup = () => {
    const popupState = useContext(PopupContext)
    const [isCheck, setIsCheck] = useState(false)

    const handleClosePopup = () => {
        if (isCheck) {
            popupState.setIsRemovePopup(true)
        }
        popupState.setIsMixMode(false)
    }

    return (
        <div
            className='popup-mix-mode'
        >
            <div className="popup-content">
                <img
                    src={closeIcon}
                    className="popup-close-icon"
                    alt="icon-close"
                    onClick={handleClosePopup} />
                <img src={mixModeicon} className="mix-mode-icon" alt='mix-mode' />
                <span className="title">Mix Mode</span>
                <p className="desc">In the mix mode, you can mix all the background sounds regardless of the set you've chosen</p>
                <Checkbox
                    onChange={(e) => setIsCheck(e.target.checked)}
                >
                    Don't show again
                </Checkbox>
                <button
                    className='btn-premium'
                    onClick={handleClosePopup}
                >
                    Confirm
                </button>
            </div>
        </div>
    )
}

export default MixModePopup
