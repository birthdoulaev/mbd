import { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';

import { ReactComponent as MbdHomeBackground } from './../../assets/pregnant-woman-on-couch.svg';
import { ReactComponent as MbdPlant } from './../../assets/plant.svg';
import { ReactComponent as VisitService } from './../../assets/services-illustrations/visit-illustration.svg';
import avatarImage from './../../assets/img/DSC_8745-50x50.jpg';

import Button from '../../components/button/button.component';


import 'aos/dist/aos.css';
import './home.styles.scss';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    const navigate = useNavigate();

    const onNavigateToContactHandler = () => navigate('/contact');
    const onNavigateToAboutHandler = () => navigate('/about');
    const onNavigateToServicesHandler = () => navigate('/services');

    return (
        <Fragment>
            <section className='landing pad70'>
                <div className='home-background'>
                    <div className='home-text'>
                        <h1 data-aos="fade-right">Mother's Birth Doula</h1>
                        <h3 data-aos="fade-right" data-aos-offset="300">Birth Doula Services</h3>
                        <span data-aos="fade-right" data-aos-offset="500">Guiding light in your birth story</span>
                        <Button type='button' onClick={onNavigateToContactHandler} customClassName='landing-contact-btn'>
                            Contact me
                        </Button>
                    </div>
                    <div className='home-bg-img'>
                        <MbdPlant className='plant' />
                        <MbdHomeBackground className='woman-on-armchair' />
                    </div>
                </div>
            </section>
            <section data-aos="fade-left" className='banner'>
                <h3>Empowering families with personalized doula services</h3>
                <div className='person-container'>
                    <img src={avatarImage} alt='Avatar' className='avatar' />
                    <span>Evelyn Kulcsar Ernano, DONA Trained birth doula</span>
                </div>
            </section>
            <section className='about-section pad0'>
                <h1 className='section-header'>Get to know me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturj.</p>
                <Button type='button' onClick={onNavigateToAboutHandler} customClassName='read-more-btn'>Read more</Button>
            </section>
            <section className='services-section pad0'>
                <h1 className='section-header'>My services</h1>
                <div className='services-container'>
                    <div data-aos="fade-right" data-aos-duration="600" className='service-container'>
                        <div className='black-box' />
                        <span className='service-title'>Labor prep</span>
                    </div>
                    <div className='service-container'>
                        <div className='black-box' />
                        <span className='service-title'>Labor support</span>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="600" className='service-container'>
                        <VisitService className="service-img" />
                        <span className='service-title'>Postpartum visit</span>
                    </div>
                </div>
                <Button type='button' onClick={onNavigateToServicesHandler} customClassName='see-all-btn'>See all</Button>
            </section>
            <section className='contact-form-home-container'>
                <h1 className='section-header'>Ready to get started?</h1>
                <span>I'm here to support you every step of the way</span>
                <Button type='button' onClick={onNavigateToContactHandler} customClassName='go-to-contact-btn'>Go to contact form</Button>
            </section>
            <footer className='home-footer'>&copy; Mother's Birth Doula. All rights reserved</footer>
        </Fragment>
    )
}

export default Home;