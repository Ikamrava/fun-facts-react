import './App.css';
import HeaderFirst from './componnents/Header';
import Main from './componnents/Main';
import { useState } from 'react';

function App() {
  const [dark,setDark] = useState(false)

function toggleDarkMode(){
  setDark(prev=>!prev)
}

  return (
    <div>
    <HeaderFirst darkMode = {dark} toggleDarkMode = {toggleDarkMode}/>
    <Main darkMode = {dark}></Main>
  </div>
  );
}

export default App;
