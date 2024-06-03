import { useState } from 'react';
import LoginButton from '../components/LoginButton';
import CustomInput from '../components/CustomInput';
import './LoginPage.css'

function LoginPage() {
  const [email, setEmail ] = useState('')
  const [password, setPassword ] = useState('')
  const handleClick = (event) => {
    console.log(email,password)
  };
  const onChangeMail= (event) => {
    setEmail(event.target.value)
  };
  const inputPassword = (event) => {
    setPassword(event.target.value)
    
  };

   
  return (
    
    
    
    <div className='container'>
    <div className='loginContainer'>    

    
    {/* <LoginButton onClick={handleClick}>
      Se Connecter
      </LoginButton>
    <CustomInput 
      type='email'
      label='email'
     onChange={onChangeMail}
     />
     <CustomInput
        type='password'
        label='password'
        onChange={inputPassword}
        
        /> */}
        </div>
    
    </div>

    

     
      
    );

  };
    
      
  export default LoginPage




      

   
    

