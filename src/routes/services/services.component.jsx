import React, { useEffect, useState } from 'react';

import SupportImg from '../../assets/services-illustrations/labor-support-illustration.png';
import ListImg from '../../assets/services-illustrations/list-illustration.png';
import PhotoImg from '../../assets/services-illustrations/photo-illustration.png';
import PhoneImg from '../../assets/services-illustrations/phone-illustration.png';
import VisitImg from '../../assets/services-illustrations/visit-illustration.png';
import LactationImg from '../../assets/services-illustrations/lactation-support-illustration.png';


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
        <main className='services-page pad50'>
            <section className={`service-box-container sbc-left ${highlightedIndex === 0 ? 'highlight' : ''}`}>
                <img src={SupportImg} alt='Labor Support Illustration' className='service-img mr' />
                <article className='side-container'>
                    <h3 className='section-header'>Labor support</h3>
                    <ul className='service-description'>
                        {/*<li>Refers to the physical, emotional, and informational assistance provided to individuals during childbirth</li>*/}
                        <li>It encompasses the provision of physical, emotional, and informational assistance to individuals during childbirth.</li>
                        <li>Its purpose is to aid you in managing pain, making informed decisions, and navigating the labor and delivery process with confidence and empowerment.</li>
                        {/*<li>Aims to help you manage pain, make informed decisions, and navigate the labor and delivery process with
                            confidence and empowerment</li>*/}
                    </ul>
                </article>
            </section>
            <section className={`service-box-container sbc-right ${highlightedIndex === 1 ? 'highlight' : ''}`}>
                <article className='side-container left-container'>
                    <h3 className='section-header header-right'>Labor prep</h3>
                    <ul className='service-description'>
                        <li> I offer comprehensive education on childbirth, personalized assistance in crafting a tailored birth plan, unwavering emotional support,
                            effective coping strategies for pain management, and active involvement of partners throughout the birthing process.</li>
                        <li>My goal is to empower individuals, ensuring they feel informed, supported, and confident as they approach the transformative journey of labor and delivery.</li>
                        {/* <li>I will be providing education on childbirth, assisting in creating a birth plan, offering emotional support,
                            teaching coping strategies for pain management, and involving partners in the birthing process</li>
                        <li>To ensure individuals feel empowered, informed, and supported as they approach labor and delivery</li>*/}
                    </ul>
                </article>
                <div className='black-box'>
                </div>
            </section>
            <section className={`service-box-container sbc-left ${highlightedIndex === 2 ? 'highlight' : ''}`}>
                <img src={ListImg} alt='Resources Illustration' className='service-img mr' />
                <article className='side-container'>
                    <h3 className='section-header'>Resources</h3>
                    <ul className='service-description'>
                        <li>In my resources, you'll find a wealth of educational materials, referrals to reputable childbirth classes, connections to support networks,
                            detailed information on local healthcare providers, and compassionate emotional support throughout your pregnancy and childbirth journey. </li>
                        <li>With these resources at your disposal, you'll be equipped with the knowledge, skills, and support necessary for making informed
                            decisions and achieving positive birth experiences.</li>
                        {/*<li>I offer educational materials, referrals to childbirth classes, access to support networks,
                            information on local healthcare providers, and emotional support to individuals during pregnancy and childbirth</li>
                        <li>You will be equipped with knowledge, skills, and resources for informed decision-making and positive
                    birth experiences</li>*/}
                    </ul>
                </article>
            </section>
            <section className={`service-box-container sbc-right ${highlightedIndex === 3 ? 'highlight' : ''}`}>
                <article className='side-container left-container'>
                    <h3 className='section-header header-right'>Birth pictures</h3>
                    <ul className='service-description'>
                        <li>I specialize in capturing candid and respectful photos during labor and birth. These images focus on showcasing your strength and determination,
                            the supportive presence of partners or family members, and the emotional moment of your baby's arrival.</li>
                        <li>My priority is to respect your privacy and consent at all times. I ensure that any pictures taken align with your wishes and comfort level.
                            My focus is on capturing meaningful moments and creating lasting memories, rather than intrusive or graphic imagery.</li>
                        {/* <li>I would typically take candid and respectful photos during labor and birth. These may include shots capturing your
                            strength and determination, the support from partners or family members, and the arrival of the baby</li>
                        <li>I will prioritize privacy and consent, ensuring that any images taken are in line with your wishes
                and comfort level. The focus is on capturing meaningful moments and memories rather than invasive or graphic imagery</li>*/}
                    </ul>
                </article>
                <img src={PhotoImg} alt='Birth Pictures Illustration' className='service-img ml' />
            </section>
            <section className={`service-box-container sbc-left ${highlightedIndex === 4 ? 'highlight' : ''}`}>
                <img src={PhoneImg} alt='24/7 Phone Availability Illustration' className='service-img mr' />
                <article className='side-container'>
                    <h3 className='section-header'>24/7 phone availability</h3>
                    <ul className='service-description'>
                        <li>Throughout the final trimester, I'm accessible via phone 24/7, ensuring continuous support from the beginning of the third trimester until childbirth.
                            You can reach out to me anytime, day or night, for support, advice, and reassurance as you prepare for labor and delivery.</li>
                        <li>Whether you have questions about early labor signs, concerns regarding pregnancy discomforts, or simply need emotional support during your
                            final weeks of pregnancy, I'm here to provide assistance and guidance whenever you need it.</li>
                        {/* <li>During the last trimester, meaning that I am accessible via phone at any time, day or night,
                            starting from the beginning of the third trimester until childbirth. This level of availability ensures that you
                            can reach out to me for support, advice, and reassurance as you approach labor and deliveryy</li>
                        <li>Whether it's questions about early labor signs, concerns about pregnancy discomforts, or emotional support during
            your final weeks of pregnancy, I will be available to provide assistance and guidance whenever needed</li>*/}
                    </ul>
                </article>
            </section>
            <section className={`service-box-container sbc-right ${highlightedIndex === 5 ? 'highlight' : ''}`}>
                <article className='side-container left-container'>
                    <h3 className='section-header header-right'>Postpartum visit</h3>
                    <ul className='service-description'>
                        <li>At the postpartum visit, I provide vital emotional support, assist with breastfeeding and newborn care,
                            offer valuable resources, and encourage self-care for new parents.</li>
                        <li>Additionally, I'm available to address any questions or concerns you may have about your birth experience,
                            offering clarification and guidance as needed.</li>
                        <li>My aim is to ensure a smooth transition into parenthood by providing comprehensive support and assistance during this critical period.</li>
                        {/*<li>I offer emotional support, assists with breastfeeding and newborn care, provide resources,
                            and encourage self-care for new parents</li>
                        <li>I am also there to address any questions or concerns you may have about your birth experience,
        offering clarification and guidance as needed</li>*/}
                    </ul>
                </article>
                <img src={VisitImg} alt='Postpartum Visit Illustration' className='service-img ml' />
            </section>
            <section className={`service-box-container sbc-left ${highlightedIndex === 6 ? 'highlight' : ''}`}>
                <img src={LactationImg} alt='Lactation Support Illustration' className='service-img mr' />
                <article className='side-container'>
                    <h3 className='section-header'>Lactation support</h3>
                    <ul className='service-description'>
                        <li> I offer personalized assistance to help you establish a successful breastfeeding relationship with your newborn.
                            This includes hands-on support with breastfeeding techniques, troubleshooting challenges that may arise,
                            and providing reassurance throughout the process.</li>
                        <li>My goal is to empower you with the knowledge and confidence needed to navigate breastfeeding with ease and comfort,
                            ensuring both you and your baby experience the numerous benefits it provides.</li>
                        {/* <li>I will provide personalized lactation support by offering hands-on assistance with breastfeeding
    techniques, troubleshooting challenges, and reassuring as you establish your breastfeeding relationship with your newborn</li>*/}
                    </ul>
                </article>
            </section>
        </main>
    )
}

export default Services;