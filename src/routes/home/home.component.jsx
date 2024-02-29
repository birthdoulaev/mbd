import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as MbdHomeBackground } from './../../assets/pregnant-woman-on-couch.svg';
import Button from '../../components/button/button.component';
import './home.styles.scss';

const Home = () => {
    const navigate = useNavigate();

    const onNavigateToContactHandler = () => navigate('/contact');
    const onNavigateToAboutHandler = () => navigate('/about');
    const onNavigateToServicesHandler = () => navigate('/services');



    return (
        <Fragment>
            <section className='landing pad70'>
                <div className='home-background'>
                    <div className='home-text'>
                        <h1>Mother's Birth Doula</h1>
                        <h3>Birth Doula Services</h3>
                        <span>Providing support, guidance, and care for your unique journey into parenthood</span>
                        <Button className='call-to-action-btn' onClick={onNavigateToContactHandler}>
                            Contact me
                        </Button>
                    </div>
                    <MbdHomeBackground className='woman-on-armchair' />
                </div>
            </section>
            <section className='banner'>
                <h3>Empowering families with personalized doula services</h3>
                <div className='person-container'>
                    <div className='black-void' />
                    <span>Evelyn Kulcsar Ernano, DONA Trained birth doula</span>
                </div>
            </section>
            <section className='about-section pad0'>
                <h1 className='section-header'>Get to know me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturj.</p>
                <Button onClick={onNavigateToAboutHandler} className='read-more-btn'>Read more</Button>
            </section>
            <section className='services-section pad0'>
                <h1 className='section-header'>My services</h1>
                <div className='services-container'>
                    <div className='service-container'>
                        <div className='black-box' />
                        <span>Service 1</span>
                    </div>
                    <div className='service-container'>
                        <div className='black-box' />
                        <span>Service 2</span>
                    </div>
                    <div className='service-container'>
                        <div className='black-box' />
                        <span>Service 3</span>
                    </div>
                </div>
                <Button onClick={onNavigateToServicesHandler} className='see-all-btn'>See all</Button>
            </section>
            <section className='contact-form-home-container'>
                <h1 className='section-header'>Ready to get started?</h1>
                <span>I'm here to support you every step of the way</span>
                <Button onClick={onNavigateToContactHandler} className='go-to-contact-btn'>Go to contact form</Button>
            </section>
            <footer className='home-footer'>&copy; Mother's Birth Doula. All rights reserved</footer>
        </Fragment>
    )
}

export default Home;