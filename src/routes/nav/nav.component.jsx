import { Fragment } from "react"
import { Link } from "react-router-dom"

import { ReactComponent as MbdLogo } from './../../assets/MBD_Logo_Color.svg';
import './nav.styles.scss';

const Navigation = () => {
    return (
        <nav className="nav-bar">
            <div className="social-medias-container">
                <span>Facebook</span>
                <span>Instagram</span>
            </div>
            <MbdLogo className="logo" />
            <div className="nav-links">
                <Link className="nav-link" to='/'>
                    Home
                </Link>
                <Link className="nav-link" to='/about'>
                    About
                </Link>
                <Link className="nav-link" to='/contact'>
                    Contact
                </Link>
            </div>
        </nav>
    )
}

export default Navigation;