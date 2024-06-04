import { useState } from 'react';
import LoginButton from '../components/LoginButton/LoginButton';
import CustomInput from '../components/CustomInput/CustomInput';
import './LoginPage.css';

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

    
    <div className='customInputContainer'>
    <CustomInput 
      type='email'
      label='email'
      onChange={onChangeMail}
      
      />
     <CustomInput
        type='password'
        label='password'
        onChange={inputPassword}
        
        />  
    </div>

    <div className='loginButtonContainer'>
         <LoginButton onClick={handleClick}>
         Se Connecter
         </LoginButton>
    </div>
        </div>
        
        </div>
        
         
      
    
    
       
    
        
    
    

    

     
      
    );

  };
    
      
  export default LoginPage




      

   
    

