import './buttons.styles.scss';

const Button = ({ children, isLoading = false, ...otherProps }) => {
    return (
        <button type='button' disabled={isLoading} {...otherProps}>
            {children}
        </button>
    );
}

export default Button;