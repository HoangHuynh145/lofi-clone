//Main
import './sidePage.scss'

//Icon
import updateImg from '../../access/svg/update.svg'

const SidePage = () => {
    return (
        <div className="mobile">
            <img className="img-update" src={updateImg} alt="" />
            <h2>Lofi mobile version in progress...</h2>
        </div>
    )
}

export default SidePage
