import NotFoundImg from '../../assets/404.png';

import './not-found.styles.scss';

const NotFound = () => {
    return (
        <div className="not-found-page">
            <h1>Oops! It seems like you've reached a dead end</h1>
            <p>The page you're looking for might have been removed, renamed, or is temporarily unavailable</p>
            <img src={NotFoundImg} alt="404 Illustration" className="not-found-img" />
        </div>
    )
}

export default NotFound;