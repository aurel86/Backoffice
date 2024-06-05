





const LoginButton = ({ children, onClick, disabled }) => {
    return (
        <button disabled={disabled} onClick={onClick}>
{children}
        </button>
    );
};

export default LoginButton;