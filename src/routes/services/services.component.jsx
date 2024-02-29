import { ReactComponent as ListIllustration } from './../../assets/services-illustrations/list-illustration.svg';
import { ReactComponent as PhoneIllustration } from './../../assets/services-illustrations/phone-illustration.svg';
import { ReactComponent as PhotoIllustration } from './../../assets/services-illustrations/photo-illustration.svg';
import { ReactComponent as VisitIllustration } from './../../assets/services-illustrations/visit-illustration.svg';

import './services.styles.scss';

const Services = () => {
    return (
        <div className='services-page'>
            <div className='service-box-container'>
                <div className='black-box'>
                </div>
                <div className='side-container'>
                    <h3>Labor support</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div className='service-box-container'>
                <div className='side-container left-container'>
                    <h3>Labor prep</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className='black-box'>
                </div>
            </div>
            <div className='service-box-container'>
                <ListIllustration className='service-illustration'/>
                <div className='side-container'>
                    <h3>Resources</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div className='service-box-container'>
                <div className='side-container left-container'>
                    <h3>Birth pictures</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <PhotoIllustration className='service-illustration' />
            </div>
            <div className='service-box-container'>
                <PhoneIllustration className='service-illustration'/>
                <div className='side-container'>
                    <h3>24/7 phone availability</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div className='service-box-container'>
                <div className='side-container left-container'>
                    <h3>Postpartum visit</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <VisitIllustration className='service-illustration'/>
            </div>
            <div className='service-box-container'>
                <div className='black-box'>
                </div>
                <div className='side-container'>
                    <h3>Lactation support</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>
    )
}

export default Services;