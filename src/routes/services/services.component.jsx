import React, { useEffect, useState } from 'react';

import SupportImg from '../../assets/services-illustrations/labor-support-illustration.png';
import ListImg from '../../assets/services-illustrations/list-illustration.png';
import PhotoImg from '../../assets/services-illustrations/photo-illustration.png';
import PhoneImg from '../../assets/services-illustrations/phone-illustration.png';
import VisitImg from '../../assets/services-illustrations/visit-illustration.png';

import './services.styles.scss';

const Services = () => {
    const [highlightedIndex, setHighlightedIndex] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const containers = document.querySelectorAll('.service-box-container');
            const viewportHeight = window.innerHeight;

            containers.forEach((container, index) => {
                const rect = container.getBoundingClientRect();
                const containerTop = rect.top;
                const containerHeight = rect.height;

                if (containerTop <= viewportHeight / 2 && containerTop + containerHeight > viewportHeight / 2) {
                    setHighlightedIndex(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial highlighting

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [])

    return (
        <div className='services-page pad50'>
            <div className={`service-box-container sbc-left ${highlightedIndex === 0 ? 'highlight' : ''}`}>
                <img src={SupportImg} alt='Labor Support Illustration' className='service-img mr' />
                <div className='side-container'>
                    <h3 className='section-header'>Labor support</h3>
                    <ul className='service-description'>
                        <li>refers to the physical, emotional, and informational assistance provided to individuals during childbirth</li>
                        <li>aims to help you manage pain, make informed decisions, and navigate the labor and delivery process with
                            confidence and empowerment</li>
                    </ul>
                </div>
            </div>
            <div className={`service-box-container sbc-right ${highlightedIndex === 1 ? 'highlight' : ''}`}>
                <div className='side-container left-container'>
                    <h3 className='section-header header-right'>Labor prep</h3>
                    <ul className='service-description'>
                        <li>I will be providing education on childbirth, assisting in creating a birth plan, offering emotional support,
                            teaching coping strategies for pain management, and involving partners in the birthing process</li>
                        <li>to ensure individuals feel empowered, informed, and supported as they approach labor and delivery</li>
                    </ul>
                </div>
                <div className='black-box'>
                </div>
            </div>
            <div className={`service-box-container sbc-left ${highlightedIndex === 2 ? 'highlight' : ''}`}>
                <img src={ListImg} alt='Resources Illustration' className='service-img mr' />
                <div className='side-container'>
                    <h3 className='section-header'>Resources</h3>
                    <ul className='service-description'>
                        <li>I offer educational materials, referrals to childbirth classes, access to support networks,
                            information on local healthcare providers, and emotional support to individuals during pregnancy and childbirth</li>
                        <li>you will be empowered with knowledge, skills, and resources for informed decision-making and positive
                            birth experiences</li>
                    </ul>
                </div>
            </div>
            <div className={`service-box-container sbc-right ${highlightedIndex === 3 ? 'highlight' : ''}`}>
                <div className='side-container left-container'>
                    <h3 className='section-header header-right'>Birth pictures</h3>
                    <ul className='service-description'>
                        <li>typically take candid and respectful photos during labor and birth. These may include shots capturing your
                         strength and determination, the support from partners or family members, and the arrival of the baby</li>
                        <li>I will prioritize privacy and consent, ensuring that any images taken are in line with your wishes
                            and comfort level. The focus is on capturing meaningful moments and memories rather than invasive or graphic imagery</li>
                    </ul>
                </div>
                <img src={PhotoImg} alt='Birth Pictures Illustration' className='service-img ml' />
            </div>
            <div className={`service-box-container sbc-left ${highlightedIndex === 4 ? 'highlight' : ''}`}>
                <img src={PhoneImg} alt='24/7 Phone Availability Illustration' className='service-img mr' />
                <div className='side-container'>
                    <h3 className='section-header'>24/7 phone availability</h3>
                    <ul className='service-description'>
                        <li>from my side during the last trimester, meaning that I am accessible via phone at any time, day or night,
                            starting from the beginning of the third trimester until childbirth. This level of availability ensures that you
                            can reach out to me for support, advice, and reassurance as you approach labor and deliveryy</li>
                        <li>Whether it's questions about early labor signs, concerns about pregnancy discomforts, or emotional support during
                            your final weeks of pregnancy, I will be available to provide assistance and guidance whenever needed</li>
                    </ul>
                </div>
            </div>
            <div className={`service-box-container sbc-right ${highlightedIndex === 5 ? 'highlight' : ''}`}>
                <div className='side-container left-container'>
                    <h3 className='section-header header-right'>Postpartum visit</h3>
                    <ul className='service-description'>
                        <li>I offer emotional support, assists with breastfeeding and newborn care, provide resources,
                            and encourage self-care for new parents</li>
                        <li>I am also there to address any questions or concerns you may have about your birth experience,
                            offering clarification and guidance as needed</li>
                    </ul>
                </div>
                <img src={VisitImg} alt='Postpartum Visit Illustration' className='service-img ml' />
            </div>
            <div className={`service-box-container sbc-left ${highlightedIndex === 6 ? 'highlight' : ''}`}>
                <div className='black-box'>
                </div>
                <div className='side-container'>
                    <h3 className='section-header'>Lactation support</h3>
                    <ul className='service-description'>
                        <li>I will provide personalized lactation support by offering hands-on assistance with breastfeeding
                            techniques, troubleshooting challenges, and reassuring as you establish your breastfeeding relationship with your newborn</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services;