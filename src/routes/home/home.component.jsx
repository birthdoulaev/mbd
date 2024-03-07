import { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';

import { ReactComponent as MbdHomeBackground } from './../../assets/pregnant-woman-on-couch.svg';
import { ReactComponent as MbdPlant } from './../../assets/plant.svg';
import { ReactComponent as VisitService } from './../../assets/services-illustrations/visit-illustration.svg';
import { ReactComponent as SupportService } from './../../assets/services-illustrations/labor-support-illustration.svg';
import { ReactComponent as PrepService } from './../../assets/services-illustrations/labor-prep-illustration.svg';
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
                <article className='home-background'>
                    <div className='home-text'>
                        <h1 data-aos="fade-right">Mother's Birth Doula</h1>
                        <h3 data-aos="fade-right" data-aos-offset="300">Guiding light in your birth story</h3>
                        <q className='quote'>I do not care what kind of birth you have... a home birth, scheduled cesarean, epidural hospital birth,
                            or if you birth alone in the woods next to a baby deer. I care that you are supported in your choices, and that you are respected.</q>
                        <div className='quote-source'>
                            <span>- January Harshe, author and educator</span>
                        </div>
                        <Button type='button' onClick={onNavigateToContactHandler} customClassName='landing-contact-btn'>
                            Contact me
                        </Button>
                    </div>
                    <div className='home-bg-img'>
                        <MbdPlant className='plant' />
                        <MbdHomeBackground className='woman-on-armchair' />
                    </div>
                </article>
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
                <p className='mbd-p home-about-text'>My name is Evelyn, and I am deeply passionate about supporting families
                    during one of life's most sacred journeys: childbirth. As a birth doula, and a mother,
                    I bring compassion, knowledge, and unwavering support to expectant parents throughout
                    the journey of bringing new life into the world. My role is to provide emotional, physical,
                    and informational support ...</p>
                <Button type='button' onClick={onNavigateToAboutHandler} customClassName='read-more-btn'>Read more</Button>
            </section>
            <section className='services-section pad0'>
                <h1 className='section-header'>My services</h1>
                <article className='services-container'>
                    <div data-aos="fade-right" data-aos-duration="600" className='service-container'>
                        <PrepService className="service-img" />
                        <span className='service-title'>Labor prep</span>
                    </div>
                    <div className='service-container'>
                        <SupportService className="service-img" />
                        <span className='service-title'>Labor support</span>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="600" className='service-container'>
                        <VisitService className="service-img" />
                        <span className='service-title'>Postpartum visit</span>
                    </div>
                </article>
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