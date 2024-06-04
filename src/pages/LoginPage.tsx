import { useEffect, useState } from 'react';
import LoginButton from '../components/LoginButton/LoginButton';
import CustomInput from '../components/CustomInput/CustomInput';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail ] = useState('')
  const [password, setPassword ] = useState('')
  const [mailError, setMailError] = useState("")
  
  const handleClick = (event) => {
    console.log(email,password)
    
  };
  const onChangeMail= (event) => {
    setEmail(event.target.value)
  };
  const inputPassword = (event) => {
    setPassword(event.target.value)
    
  };


  useEffect(() => {
    if(email.length < 8) {
      setMailError("Le mot de mot passe doit contenir au moins 8 caractères !")
    } else {
      setMailError("")
    }
  }, [])
  

   
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
        errorMessage={"Le password est faux"}
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




      

   
    

