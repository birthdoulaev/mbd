import { Link } from 'react-router-dom';
import profileImage from './../../assets/img/DSC_8745_800x1200.jpg';

import './about.styles.scss';

const About = () => {
    return (
        <main className="about-page">
            <article className="doula-container pad50">
                <h1 className='section-header'>What is a doula?</h1>
                <p className='mbd-p doula-p'>A birth doula provides continuous physical, emotional, and informational support to
                    expectant mothers before, during, and after childbirth. Overall, a birth doula's primary goal is to ensure that the mother feels supported, empowered, and
                    respected during one of the most transformative experiences of her life. Their role includes: </p>
                <ul className='doula-list'>
                    <li>
                        <div className='list-element-content'>
                            <h2 className='list-title'>Emotional support</h2>
                            <p>Offering reassurance, encouragement,
                                and empathy throughout the entire birthing process, helping the mother feel more confident and relaxed.</p>
                        </div>
                    </li>
                    <li>
                        <div className='list-element-content'>
                            <h2 className='list-title'>Physical support</h2>
                            <p>Providing comfort measures such as massage,
                                positioning suggestions, and breathing techniques to help manage pain and promote relaxation during labor.</p>
                        </div>
                    </li>
                    <li>
                        <div className='list-element-content'>
                            <h2 className='list-title'>Advocacy</h2>
                            <p>Helping the mother communicate her wishes and make informed decisions about her birth plan by
                                providing evidence-based information and helping to navigate medical procedures and interventions.</p>
                        </div>
                    </li>
                    <li>
                        <div className='list-element-content'>
                            <h2 className='list-title'>Continuous presence</h2>
                            <p>Remaining by the mother's side throughout labor and delivery,
                                offering dependable support and guidance to both the mother and her partner.</p>
                        </div>
                    </li>
                    <li>
                        <div className='list-element-content'>
                            <h2 className='list-title'>Postpartum support</h2>
                            <p>Assisting with initial breastfeeding, providing emotional support,
                                and helping the mother process her birth experience in the days following delivery.</p>
                        </div>
                    </li>
                </ul>
            </article>
            <article className="about-container pad50">
                <div className="about-text">
                    <h1 className='section-header'>About Myself</h1>
                    <p className='mbd-p'>Hello! My name is Evelyn, and I am deeply passionate about supporting families
                        during one of life's most sacred journeys: childbirth. As a birth doula, and a mother,
                        I bring compassion, knowledge, and unwavering support to expectant parents throughout
                        the journey of bringing new life into the world. My role is to provide emotional, physical,
                        and informational support, ensuring that families feel empowered, informed, and respected as
                        they welcome their newest member into the world. With a deep understanding of the spiritual
                        dimensions of childbirth and a commitment to personalized care, I strive to create a calm and
                        nurturing environment where parents can feel confident, connected and supported every step of the way.</p>
                </div>
                <div className='profile-img-container'>
                    <img src={profileImage} alt='Evelyn Kulcsar-Ernano profile' className="profile-img" />
                    <div>
                        <span className='image-credit'>
                            Image by&nbsp;
                            <Link to={'https://matveyzphoto.com/'} target="_blank"
                                rel="noopener noreferrer" className='image-credit-link'>Matvey Zabbi</Link>
                        </span>
                    </div>
                </div>
            </article>
            <article className="philosophy-and-mission-container pad50">
                <div className="mission-container">
                    <h1 className='section-header'>My Mission</h1>
                    <p className='mbd-p'>I strive to create a safe and nurturing environment where individuals can trust their instincts,
                        make informed decisions, and embrace the transformative power of birth. By offering compassionate guidance,
                        education, and encouragement, I aim to empower birthing individuals to tap into their inner strength and
                        welcome their new arrival with confidence and joy.</p>
                </div>
            </article>
        </main>
    )
}

export default About;