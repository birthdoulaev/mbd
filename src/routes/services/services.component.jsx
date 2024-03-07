// import { ReactComponent as ListIllustration } from './../../assets/services-illustrations/list-illustration.svg';
// import { ReactComponent as PhoneIllustration } from './../../assets/services-illustrations/phone-illustration.svg';
// import { ReactComponent as PhotoIllustration } from './../../assets/services-illustrations/photo-illustration.svg';
// import { ReactComponent as VisitIllustration } from './../../assets/services-illustrations/visit-illustration.svg';
// import { ReactComponent as SupportService } from './../../assets/services-illustrations/labor-support-illustration.svg';

import { useEffect } from 'react';
import AOS from 'aos';

import SupportImg from '../../assets/services-illustrations/labor-support-illustration.png';
import ListImg from '../../assets/services-illustrations/list-illustration.png';
import PhotoImg from '../../assets/services-illustrations/photo-illustration.png';
import PhoneImg from '../../assets/services-illustrations/phone-illustration.png';
import VisitImg from '../../assets/services-illustrations/visit-illustration.png';

import 'aos/dist/aos.css';
import './services.styles.scss';

const Services = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='services-page pad50'>
            <div data-aos="zoom-in-right" className='service-box-container sbc-left'>
                {/*<SupportService className='service-illustration' />*/}
                <img src={SupportImg} alt='Labor Support Illustration' className='service-img mr' />
                <div className='side-container'>
                    <h3>Labor support</h3>
                    <ul className='service-description'>
                        <li>refers to the physical, emotional, and informational assistance provided to individuals during childbirth</li>
                        <li>aims to help you manage pain, make informed decisions, and navigate the labor and delivery process with confidence and empowerment</li>
                    </ul>
                </div>
            </div>
            <div data-aos="zoom-in-left" className='service-box-container sbc-right'>
                <div className='side-container left-container'>
                    <h3 className='header-right'>Labor prep</h3>
                    <ul className='service-description'>
                        <li>providing education on childbirth, assisting in creating a birth plan, offering emotional support, teaching coping strategies for pain management, and involving partners in the birthing process</li>
                        <li>I ensure individuals feel empowered, informed, and supported as they approach labor and delivery</li>
                    </ul>
                </div>
                <div className='black-box'>
                </div>
            </div>
            <div data-aos="zoom-in-right" className='service-box-container sbc-left'>
                {/*<ListIllustration className='service-illustration' />*/}
                <img src={ListImg} alt='Resources Illustration' className='service-img mr' />
                <div className='side-container'>
                    <h3>Resources</h3>
                    <ul className='service-description'>
                        <li>I offer educational materials, referrals to childbirth classes, access to support networks, information on local healthcare providers, and emotional support to individuals during pregnancy and childbirth</li>
                        <li>you will be empowered with knowledge, skills, and resources for informed decision-making and positive birth experiences</li>
                    </ul>
                </div>
            </div>
            <div data-aos="zoom-in-left" className='service-box-container sbc-right'>
                <div className='side-container left-container'>
                    <h3 className='header-right'>Birth pictures</h3>
                    <ul className='service-description'>
                        <li>typically take candid and respectful photos during labor and birth. These may include shots capturing the birthing person's strength and determination, the support from partners or family members, and the arrival of the baby</li>
                        <li>prioritize privacy and consent, ensuring that any images taken are in line with the birthing person's wishes and comfort level. The focus is on capturing meaningful moments and memories rather than invasive or graphic imagery</li>
                    </ul>
                </div>
                {/*<PhotoIllustration className='service-illustration' />*/}
                <img src={PhotoImg} alt='Birth Pictures Illustration' className='service-img ml' />
            </div>
            <div data-aos="zoom-in-right" className='service-box-container sbc-left'>
                {/*<PhoneIllustration className='service-illustration' />*/}
                <img src={PhoneImg} alt='24/7 Phone Availability Illustration' className='service-img mr' />
                <div className='side-container'>
                    <h3>24/7 phone availability</h3>
                    <ul className='service-description'>
                        <li>from birth doulas during the last trimester means that they are accessible via phone at any time, day or night, starting from the beginning of the third trimester until childbirth. This level of availability ensures that individuals can reach out to their doula for support, advice, and reassurance as they approach labor and deliveryy</li>
                        <li>Whether it's questions about early labor signs, concerns about pregnancy discomforts, or emotional support during the final weeks of pregnancy, the doula is available to provide assistance and guidance whenever needed</li>
                    </ul>
                </div>
            </div>
            <div data-aos="zoom-in-left" className='service-box-container sbc-right'>
                <div className='side-container left-container'>
                    <h3 className='header-right'>Postpartum visit</h3>
                    <ul className='service-description'>
                        <li>a birth doula offers emotional support, assists with breastfeeding and newborn care, provides resources, and encourages self-care for new parents</li>
                        <li>They are also there to address any questions or concerns the client may have about their birth experience, offering clarification and guidance as needed</li>
                    </ul>
                </div>
                {/*<VisitIllustration className='service-illustration' />*/}
                <img src={VisitImg} alt='Postpartum Visit Illustration' className='service-img ml' />
            </div>
            <div data-aos="zoom-in-right" className='service-box-container sbc-left'>
                <div className='black-box'>
                </div>
                <div className='side-container'>
                    <h3>Lactation support</h3>
                    <ul className='service-description'>
                        <li>Birth doulas provide personalized lactation support by offering hands-on assistance with breastfeeding techniques, troubleshooting challenges, and reassuring new parents as they establish their breastfeeding relationship with their newborn</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services;