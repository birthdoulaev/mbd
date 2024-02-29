import { Link } from 'react-router-dom';

import { ReactComponent as FacebookIcon } from '../../assets/facebook-176-svgrepo-com.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram-167-svgrepo-com.svg';

import './modal.styles.scss';

const Modal = ({ isModalOpen, onClose }) => {
    if (!isModalOpen) {
        return null;
    }
    return (
        <section className="modal-overlay" onClick={onClose}>
            <div className='modal-container'>
                <article className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="close-x-btn" onClick={onClose}>
                        &#10005;
                    </div>
                    <main className="modal-main-content">
                        <header className='modal-header'>
                            <div className='check-symbol'>&#10003;</div>
                        </header>
                        <h3 className="">Thank you for your message!</h3>
                        <p className="">I will get back to you as quickly as possible.</p>
                        <p>Until then, let's connect on social media</p>
                        <div className='social-media-icons'>
                            <Link to={'https://www.facebook.com/'} target="_blank" rel="noopener noreferrer">
                                <FacebookIcon className='social-media-icon' />
                            </Link>
                            <Link to={'https://www.instagram.com/'} target="_blank" rel="noopener noreferrer">
                                <InstagramIcon className='social-media-icon' />
                            </Link>

                        </div>
                        <footer className="modal-footer">
                            <button className='close-modal-btn' onClick={onClose}>Close</button>
                        </footer>
                    </main>
                </article>
            </div>
        </section>
    )
}

export default Modal;