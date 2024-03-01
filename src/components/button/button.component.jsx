import './buttons.styles.scss';

const Button = ({ children, isLoading = false, customClassName = '', ...otherProps }) => {
    return (
        <div className={`${customClassName} btn-container`}>
            <button className='btn-three' disabled={isLoading} {...otherProps}>
                <span>{children}</span>
            </button>
        </div>
    );
}

export default Button;