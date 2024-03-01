import './buttons.styles.scss';

const Button = ({ children, isLoading = false, customClassName = '', ...otherProps }) => {
    return (
        <div className='btn-container'>
            <button type='button' className={`${customClassName} btn-three`} disabled={isLoading} {...otherProps}>
                {children}
            </button>
        </div>
    );
}

export default Button;