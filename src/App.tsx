
import './App.css'
import LoginButton from './components/LoginButton';
import { ConfirmButton } from './components/ConfirmButton';

function App() {
  const handleClick = () => {
   console.log('Cliquer ici') 
  };

  return (
    <div>
      <input onChange={(e) =>  console.log(e.target.value)}/>

<button onClick={handleClick}>Button</button>

      {/* <LoginButton onClick={handleClick}>
     Se Connecter
      </LoginButton>


      <ConfirmButton title="Se Connecter !" onClick={handleClick} /> */}
  

   
    </div>
  );
};

export default App
