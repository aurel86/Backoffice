import { useEffect, useState } from 'react';
import LoginButton from '../components/LoginButton/LoginButton';
import CustomInput from '../components/CustomInput/CustomInput';
import './LoginPage.css';


function LoginPage() {
  const [email, setEmail ] = useState('')
  const [password, setPassword ] = useState('')
  const [mailError, setMailError] = useState("")
  const [isNotValid, setIsNotValid] = useState(true)
  const [passwordError, setPasswordError ] = useState("")
  
const handleClick = () => { 
    const body = {
        email : email,
        password : password,
    }
    console.log(body)
}

const onChangeMail= (event) => {
    setEmail(event.target.value)
};
  const inputPassword = (event) => {
    setPassword(event.target.value)
};

    useEffect(() => {
        if(email.length < 4 || password.length < 8) {
        setIsNotValid(true)
        } else {
        setIsNotValid(false)
        }
    
    if(email.length < 4) {
        setMailError("Nombre de caractéres insuffisant")
        } else {
        setMailError("")
    }
    
    if (password.length < 8) {
        setPasswordError("Minimum de 8 caractéres")
    } else {
        setPasswordError("")
    }
    
    }, [email, password])

    return (
    
    <div className='container'>
        <div className='loginContainer'>    
            <div className='customInputContainer'>
                <CustomInput
                type='email'
                label='email'
                onChange={onChangeMail}
                errorMessage={mailError}
                />
                <CustomInput
                type='password'
                label='password'
                onChange={inputPassword}
                errorMessage={passwordError}
                /> 
            </div>

    <div className='loginButtonContainer'>
         <LoginButton onClick={handleClick} disabled={isNotValid}>
         Se Connecter
         </LoginButton>
        
    </div>
    </div>
    </div>
    );

  };
  
      
  export default LoginPage