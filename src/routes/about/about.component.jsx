import { Fragment } from "react";

import './about.styles.scss';

const About = () => {
    return (
        <Fragment>
            <div className="about-the-owner">
                <div className="about-container">
                    <h1>About Myself</h1>
                    <p>I am a mother of one, and lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue</p>
                </div>
            </div>
            <div className="philosophy-and-mission-container">
                <div className="philosophy-container">
                    <h1>My Philosophy</h1>
                    <p>I believe that every parent deserves compassionate, non-judgemental support as they grow their family. I'm comitted to helping you make informed decisions that align with your unique values and preferences. My services are designed to empower you to trust your intincts, advocate for your needs, and embrace the journey of parenthood with grace and resilience</p>
                </div>
                <div className="philosophy-container">
                    <h1>My Mission</h1>
                    <p>I believe that every parent deserves compassionate, non-judgemental support as they grow their family. I'm comitted to helping you make informed decisions that align with your unique values and preferences. My services are designed to empower you to trust your intincts, advocate for your needs, and embrace the journey of parenthood with grace and resilience</p>
                </div>
            </div>
        </Fragment>
    )
}

export default About;