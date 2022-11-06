// Main
import { useState, useContext } from 'react'
import { PopupContext } from '../../../context/PopupContext'
import Draggable from 'react-draggable';
import 'antd/dist/antd.css';
import './shareDraggable.scss'

// Icon
import closeIcon from '../../../access/svg/close-icon.svg'


const ShareDraggable = () => {
    const stateSetting = useContext(PopupContext)
    const [isCopied, setisCopied] = useState(false)


    const handleCopyLink = (e) => {
        setisCopied(true)
        navigator.clipboard.writeText(e.target.value);
    }

    return (
        <Draggable bounds="body" defaultPosition={{ x: 556, y: 210 }}>
            <div className={`share-container`}>
                <img
                    src={closeIcon}
                    alt='icon-close'
                    className='share-close-icon'
                    onClick={() => stateSetting.setisShare(false)}
                />
                <h2>Share</h2>
                <p>Copy the link to share your combination of music, scenery and sounds with your friends!</p>
                <input
                    className={`share-link ${isCopied ? 'active' : ''}`}
                    value='Day la link'
                    contentEditable="false"
                    onClick={handleCopyLink}
                    readOnly
                />
                <span>{isCopied ? 'Copied!' : ''}</span>
                <button className="share-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" fill="none" className="injected-svg" data-src="/static/media/twitter.cf38f5a28225f2c2d183b0c798843bf6.svg" xlink="http://www.w3.org/1999/xlink">
                        <path d="M24.9512 2.86163C24.3576 3.75663 23.6349 4.55716 22.807 5.23675C22.6997 5.32295 22.613 5.43254 22.5536 5.55733C22.4941 5.68212 22.4634 5.81886 22.4637 5.95732V6.04223C22.4543 7.84571 22.1262 9.63303 21.4951 11.3203C20.8449 13.0888 19.8793 14.7221 18.6461 16.1394C16.9963 18.0375 14.8712 19.4531 12.4933 20.2379C10.9265 20.7511 9.28843 21.0083 7.64116 20.9998C5.03237 20.9971 2.4706 20.2988 0.215098 18.9758C0.134334 18.9294 0.0708256 18.8577 0.0342816 18.7715C-0.00226234 18.6853 -0.00983018 18.5894 0.0127345 18.4985C0.0356027 18.4085 0.087668 18.3289 0.160618 18.2723C0.233567 18.2158 0.323195 18.1855 0.415188 18.1864H1.03819C3.02112 18.186 4.95868 17.5875 6.60205 16.4675C5.62243 16.3059 4.70579 15.8753 3.95259 15.2228C3.19939 14.5703 2.6387 13.7211 2.33196 12.7683C2.31691 12.7213 2.31422 12.6712 2.32417 12.6229C2.33412 12.5746 2.35635 12.5297 2.38869 12.4926C2.42103 12.4556 2.46237 12.4277 2.50863 12.4116C2.55489 12.3956 2.60449 12.392 2.65255 12.4011C2.95238 12.4587 3.25686 12.4879 3.56205 12.4883H3.67574C2.72624 12.048 1.9235 11.3395 1.36461 10.4484C0.805733 9.5573 0.514658 8.52185 0.526601 7.46731C0.527249 7.41784 0.540565 7.36937 0.565254 7.32663C0.589944 7.28389 0.625167 7.24832 0.667503 7.22337C0.709839 7.19843 0.757848 7.18496 0.806865 7.18428C0.855882 7.18359 0.904242 7.19572 0.947245 7.21947C1.33249 7.43659 1.7457 7.59877 2.17507 7.70138C1.32481 6.85299 0.777558 5.7438 0.619133 4.54773C0.460709 3.35165 0.700067 2.13633 1.29968 1.09233C1.32268 1.05386 1.35438 1.02143 1.39219 0.997703C1.43 0.973975 1.47283 0.95962 1.51719 0.955814C1.56156 0.952008 1.60618 0.95886 1.64741 0.975807C1.68865 0.992755 1.72532 1.01932 1.75442 1.05332C2.94527 2.53905 4.41972 3.76817 6.09026 4.66775C7.76081 5.56733 9.59339 6.11902 11.4792 6.29007H11.4997C11.5276 6.28915 11.5551 6.28258 11.5805 6.27075C11.6059 6.25893 11.6287 6.24209 11.6475 6.22123C11.6656 6.20035 11.6792 6.1759 11.6874 6.14943C11.6956 6.12296 11.6983 6.09505 11.6952 6.06748C11.6248 5.40104 11.6679 4.72736 11.8226 4.07558C11.9581 3.50498 12.1888 2.96179 12.5047 2.46922C13.1677 1.41825 14.1777 0.637876 15.356 0.2662C15.9087 0.0913116 16.4843 0.00156944 17.0636 2.64575e-06C18.3771 -0.00130457 19.6458 0.481831 20.6311 1.35853C20.7566 1.47113 20.9179 1.53463 21.0858 1.53752C21.1411 1.5366 21.1961 1.52889 21.2495 1.51458C22.1758 1.27807 23.0634 0.907848 23.8848 0.415362C23.9343 0.386531 23.9912 0.373403 24.0481 0.377689C24.1051 0.381975 24.1594 0.403477 24.2041 0.439392C24.2487 0.475307 24.2817 0.52397 24.2985 0.579037C24.3154 0.634104 24.3154 0.693021 24.2986 0.74811C24.023 1.61665 23.5351 2.40113 22.8798 3.02915C23.4708 2.88668 24.0477 2.69004 24.6033 2.44168C24.6593 2.41649 24.7219 2.41042 24.7817 2.42439C24.8414 2.43835 24.895 2.4716 24.9344 2.51908C24.9737 2.56656 24.9966 2.62569 24.9997 2.68751C25.0027 2.74932 24.9857 2.81045 24.9512 2.86163Z" fill="#1D93DF"></path>
                    </svg>
                    Share
                </button>
            </div>
        </Draggable>
    )
}

export default ShareDraggable
