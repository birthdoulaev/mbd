import { NavLink, Link } from 'react-router-dom';

import Button from '../button/button.component';
import PhoneButton from '../phone-button/phone-button.component';

import { ReactComponent as FacebookIcon } from '../../assets/facebook-176-svgrepo-com.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram-167-svgrepo-com.svg';

import './side-modal.styles.scss';

const SideModal = ({ isSideModalOpen, onSideModalClose }) => {
    return (
        <div className={'side-modal-overlay' + (isSideModalOpen ? ' width-full' : '')} onClick={onSideModalClose}>
            <div className='side-modal-container'>
                <main className='side-modal-content' onClick={e => e.stopPropagation()}>
                    <div className="close-x-btn" onClick={onSideModalClose}>
                        &#10005;
                    </div>
                    <article className='side-nav-links'>
                        <NavLink className="nav-link" activeclassname="active" onClick={onSideModalClose} to='/'>
                            Home
                        </NavLink>
                        <NavLink className="nav-link" activeclassname="active" onClick={onSideModalClose} to='/about'>
                            About
                        </NavLink>
                        <NavLink className="nav-link" activeclassname="active" onClick={onSideModalClose} to='/services'>
                            Services
                        </NavLink>
                        <NavLink className="nav-link" activeclassname="active" onClick={onSideModalClose} to='/contact'>
                            Contact
                        </NavLink>
                    </article>

                    <article className='side-social-links'>
                        <Link
                            to={'https://www.facebook.com/profile.php?id=61557189740001'}
                            onClick={onSideModalClose}
                            target="_blank"
                            rel="noopener noreferrer">
                            <FacebookIcon className="social-media-icon" />
                        </Link>
                        <Link
                            to={'https://www.instagram.com/mothersbirthdoula?igsh=N3FocjZkZTc2bXY4&utm_source=qr'}
                            onClick={onSideModalClose}
                            target="_blank"
                            rel="noopener noreferrer">
                            <InstagramIcon className="social-media-icon" />
                        </Link>
                        <PhoneButton />
                    </article>
                    <Button onClick={onSideModalClose}>Close</Button>
                </main>
            </div>
        </div>
    )
}

export default SideModal;