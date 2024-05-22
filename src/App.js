// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import TextForm from './TextForm';
import About from './components/About';
import Navbar from './components/Navbar';
// import React, { useState } from 'react';


function App() {
  const [mode,setMode] = useState("dark");
  return (
    <>
      <Navbar  title = "Cutie CAT App" about = "Cuteness" mode = {mode}/> 
      <TextForm placeHold= "enter something here..."/>
      <About/>
    </>
    
  );
}

export default App;