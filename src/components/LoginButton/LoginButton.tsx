





const LoginButton = ({ children, onClick, disabled }) => {
    return (
        <button
        style={{
            backgroundColor:'#afb3b3',
            fontSize:'1rem',
            boxShadow:'2px 1px 1px 1px black ',
        }}
        
        disabled={disabled} onClick={onClick}>
        {children}
        
            

       
        </button>
    );
};

export default LoginButton;