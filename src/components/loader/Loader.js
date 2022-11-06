//Main
import './loader.scss'

// Icon
import mainLogo from '../../access/img/mainLogo.gif'

const Loader = () => {
    return (
        <div className="main-loader">
            <img src={mainLogo} alt="logo" />
        </div>
    )
}

export default Loader
