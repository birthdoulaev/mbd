import { NavLink, Link } from 'react-router-dom';

import Button from '../button/button.component';

import './side-modal.styles.scss';

const SideModal = ({ isSideModalOpen, onSideModalClose }) => {
    return (
        <div className={'side-modal-overlay' + (isSideModalOpen ? ' width-full' : '')} onClick={onSideModalClose}>
            <div className='side-modal-container'>
                <main className='side-modal-content' onClick={e => e.preventDefault()}>
                    <Button onClick={onSideModalClose}>Close</Button>

                    <div className='side-nav-links'>
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
                    </div>

                    <div className='side-social-links'>
                        <Link
                            to={'https://www.facebook.com/profile.php?id=61557189740001'}
                            onClick={onSideModalClose}
                            target="_blank"
                            rel="noopener noreferrer">
                            Facebook
                        </Link>
                        <Link
                            to={'https://www.instagram.com/mothersbirthdoula?igsh=N3FocjZkZTc2bXY4&utm_source=qr'}
                            onClick={onSideModalClose}
                            target="_blank"
                            rel="noopener noreferrer">
                            Instagram
                        </Link>
                        <a href="tel:9293200120">(929) 320-0120</a>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default SideModal;