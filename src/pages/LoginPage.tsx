import { useEffect, useState } from 'react';
import LoginButton from '../components/LoginButton/LoginButton';
import CustomInput from '../components/CustomInput/CustomInput';
import './LoginPage.css';


function LoginPage() {
  const [email, setEmail ] = useState('')
  const [password, setPassword ] = useState('')
  const [mailError, setMailError] = useState("")
  const [isNotValid, setIsNotValid] = useState(true)
  
  const handleClick = (event) => {
    
    
  };
  const onChangeMail= (event) => {
    setEmail(event.target.value)
  };
  const inputPassword = (event) => {
    setPassword(event.target.value)
};

    
  useEffect(() => {

    console.log(email.length, password.length);

    if(email.length < 4 || password.length < 8) {
      setIsNotValid(true)
    } else {
      setIsNotValid(false)
    }
    


    if(email.length < 8) {
      setMailError("Nombre de caractéres insuffisant")
    } else {
      setMailError("")
    }
    
    
    
}, [email, password])


    console.log('email:', email, 'password:', password)
  
   
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
        errorMessage={""}
        
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




      

   
    

