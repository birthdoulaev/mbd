import { Fragment, useState } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { ReactComponent as MbdLogo } from './../../assets/MBD_Logo_Color.svg';
import SideModal from "../../components/side-modal/side-modal.component";

import './nav.styles.scss';

const Navigation = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const [isSideModalOpen, setIsSideModalOpen] = useState(false);

    const handleMenuBtnClick = () => {
        setIsSideModalOpen(!isSideModalOpen)
    }

    const closeSideModal = () => {
        setIsSideModalOpen(false);
    };

    return (
        <Fragment>
            <nav className="nav-bar pad0">
                <div className={"social-medias-container" + (isMobile ? ' hide-content' : '')}>
                    <Link
                        to={'https://www.facebook.com/profile.php?id=61557189740001'}
                        target="_blank"
                        rel="noopener noreferrer">
                        Facebook
                    </Link>
                    <Link
                        to={'https://www.instagram.com/mothersbirthdoula?igsh=N3FocjZkZTc2bXY4&utm_source=qr'}
                        target="_blank"
                        rel="noopener noreferrer">
                        Instagram
                    </Link>
                    <a href="tel:9293200120">(929) 320-0120</a>
                </div>
                <Link to={'/'}>
                    <MbdLogo className="logo" />
                </Link>
                <div className={"nav-links" + (isMobile ? ' hide-content' : '')}>
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
                <div className={"nav-btn" + (isMobile ? ' show-btn' : '')} onClick={handleMenuBtnClick}>
                    <img src={require("./../../assets/menu.png")} alt="Menu" height={20} />
                </div>
            </nav>
            <section>
                <SideModal
                    isSideModalOpen={isSideModalOpen}
                    onSideModalClose={closeSideModal}
                />
            </section>
            <Outlet />
        </Fragment>

    )
}

export default Navigation;