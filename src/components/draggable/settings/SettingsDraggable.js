//Main
import { useContext, useState } from 'react'
import Draggable from 'react-draggable';
import 'antd/dist/antd.css';
import './settingsDraggable.scss'
import { Switch } from 'antd';
import { SettingsContext } from '../../../context/SettingsContext'
import { PopupContext } from '../../../context/PopupContext'

const SettingsDraggable = () => {
    const draggableSettings = useContext(PopupContext)
    const settingsContext = useContext(SettingsContext)
    const [checkedHideElement, setCheckedHideElement] = useState(settingsContext.isHideElement)
    const [checkedShowClock, setCheckedShowClock] = useState(settingsContext.isShowClock)
    const [checkedShortcuts, setCheckedShortcuts] = useState(settingsContext.isShortcuts)
    const [timeDelayHideElement, setTimeDelayHideElement] = useState(settingsContext.timeHiden)


    const handleSaveSettings = () => {
        settingsContext.setIsHideElement(checkedHideElement)
        settingsContext.setTimeHiden(timeDelayHideElement <= 0 ? 1 : timeDelayHideElement)
        settingsContext.setIsShowClock(checkedShowClock)
        settingsContext.setIsShortcuts(checkedShortcuts)
        draggableSettings.setisOpenSettings(false)
    }

    return (
        <Draggable bounds="body" handle=".settings-header" defaultPosition={{ x: 254, y: 128 }}>
            <div className={`settings-container ${draggableSettings.isOpenSettings ? 'open' : 'close'}`}>
                <div className="d-flex-sp settings-header">
                    <span className="header-title">General Settings</span>
                    <svg
                        xlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        width="13" height="12" viewBox="0 0 13 12" fill="none"
                        onClick={() => draggableSettings.setisOpenSettings(false)}
                    >
                        <path d="M0.760185 11.7339C0.874895 11.8486 1.01046 11.9242 1.16689 11.9607C1.32331 12.0024 1.47713 12.0024 1.62834 11.9607C1.78476 11.9242 1.92033 11.8512 2.03504 11.7417L6.50093 7.26796L10.9746 11.7417C11.1415 11.9085 11.3501 11.992 11.6003 11.992C11.8506 11.9972 12.0644 11.9111 12.2417 11.7339C12.4137 11.5566 12.4998 11.3428 12.4998 11.0925C12.4998 10.8422 12.4164 10.6337 12.2495 10.4668L7.77578 5.99311L12.2495 1.52722C12.4164 1.36036 12.4998 1.1518 12.4998 0.901521C12.505 0.646029 12.419 0.432251 12.2417 0.260185C12.0644 0.0881186 11.8506 0.00208565 11.6003 0.00208565C11.3501 0.00208565 11.1415 0.0855116 10.9746 0.252363L6.50093 4.72608L2.03504 0.252363C1.92033 0.142867 1.78476 0.0698692 1.62834 0.0333704C1.47713 -0.00834259 1.32331 -0.0109497 1.16689 0.0255492C1.01046 0.062048 0.874895 0.14026 0.760185 0.260185C0.650688 0.374895 0.575083 0.510462 0.53337 0.666886C0.496872 0.82331 0.496872 0.979733 0.53337 1.13616C0.575083 1.28737 0.650688 1.41772 0.760185 1.52722L5.22608 5.99311L0.760185 10.4668C0.650688 10.5763 0.575083 10.7093 0.53337 10.8657C0.491657 11.0169 0.48905 11.1707 0.525549 11.3272C0.567262 11.4888 0.645474 11.6244 0.760185 11.7339Z" fill="white"></path>
                    </svg>
                </div>
                <div className="d-flex-sp gap-nor hide-element-setting">
                    <div className="settings-content">
                        <h5 className="setting-title">Hide elements</h5>
                        <p className="settings-desc">You can chose to show or hide the interface after a period of inactivity.</p>
                    </div>
                    <Switch
                        className="switch settings-switch"
                        onChange={(checked) => setCheckedHideElement(checked)}
                        checked={checkedHideElement}
                    />
                </div>
                <div className="d-flex-sp gap-s set-time-hidden">
                    <p className='f1'>Hide After</p>
                    <input
                        type='number'
                        value={timeDelayHideElement}
                        className='time-hiden-input f1'
                        onChange={(e) => setTimeDelayHideElement(+e.target.value)}
                    />
                    <span>sec</span>
                </div>
                <div className="d-flex-sp gap-nor side-setting">
                    <h5 className="setting-title">Show Clock</h5>
                    <Switch
                        className="switch settings-switch"
                        onChange={() => setCheckedShowClock(!checkedShowClock)}
                        checked={checkedShowClock}
                    />
                </div>
                <div className="d-flex-sp gap-nor side-setting">
                    <h5 className="setting-title">Shortcuts</h5>
                    <Switch
                        className="switch settings-switch"
                        onChange={() => setCheckedShortcuts(!checkedShortcuts)}
                        checked={checkedShortcuts}
                    />
                </div>
                <div className="f1"></div>
                <button className="save-change-btn" onClick={handleSaveSettings}>Save</button>
            </div>
        </Draggable>
    )
}

export default SettingsDraggable
