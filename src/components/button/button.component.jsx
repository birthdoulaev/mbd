import './button.styles.scss';

const Button = ({ children, isLoading = false, customClassName = '', ...otherProps }) => {
    return (
        <div className={`${customClassName} btn-container`}>
            <button className='mbd-btn' disabled={isLoading} {...otherProps}>
                <span>{children}</span>
            </button>
        </div>
    );
}

export default Button;