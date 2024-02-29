import { Link, Outlet, NavLink } from "react-router-dom"

import { ReactComponent as MbdLogo } from './../../assets/MBD_Logo_Color.svg';
import './nav.styles.scss';
import { Fragment } from "react";

const Navigation = () => {
    return (
        <Fragment>
            <nav className="nav-bar">
                <div className="social-medias-container">
                    <Link to={'https://www.facebook.com/'} target="_blank" rel="noopener noreferrer">Facebook</Link>
                    <Link to={'https://www.instagram.com/'} target="_blank" rel="noopener noreferrer">Instagram</Link>
                    <a href="tel:9293200120">(929) 320-0120</a>
                </div>
                <Link to={'/'}>
                    <MbdLogo className="logo" />
                </Link>
                <div className="nav-links">
                    <NavLink className="nav-link" activeclassname="active" to='/'>
                        Home
                    </NavLink>
                    <NavLink className="nav-link" activeclassname="active" to='/about'>
                        About
                    </NavLink>
                    <NavLink className="nav-link" activeclassname="active" to='/services'>
                        Services
                    </NavLink>
                    <NavLink className="nav-link" activeclassname="active" to='/contact'>
                        Contact
                    </NavLink>
                </div>
            </nav>
            <Outlet />
        </Fragment>

    )
}

export default Navigation;