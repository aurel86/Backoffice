
import './App.css'
import LoginButton from './components/LoginButton';
import CustomInput from './components/CustomInput';
import { useState } from 'react';


function App() {
  const [email, setEmail ] = useState('')
  const handleClick = (event) => {
   console.log(event) 
  };
  const onChangeMail= (event) => {
    console.log(event)
    setEmail(event.target.value)
  }
  return (
    <div>

    {email}
    <LoginButton onClick={handleClick}>
      Se Connecter
      </LoginButton>
    <CustomInput 
      type='email'
      label='email'
     onChange={onChangeMail}
    
    />
    </div>
    

     
      
    );

  };
    
      
  export default App




      

   
    

