// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import TextForm from './TextForm';
import About from './components/About';
import Navbar from './components/Navbar';
// import React, { useState } from 'react';


function App() {
  const [mode,setMode] = useState("light");
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      // https://cdn.pixabay.com/photo/2020/06/13/17/51/milky-way-5295160_1280.jpg
      document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2020/06/13/17/51/milky-way-5295160_1280.jpg')";
      document.body.style.backgroundSize = "cover"; // to make sure the image covers the whole background
      document.body.style.backgroundRepeat = "no-repeat";
    }
    else{
      setMode('light')
      document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2023/05/31/14/20/mountains-8031511_1280.jpg')";
      // document.body.style.backgroundColor = "lightblue"; // Fallback background color
    }
      
  }

  return (
    <>
      <Navbar  title = "Cutie CAT App" about = "Cuteness" mode = {mode} toggleMode={toggleMode}/> 
      {/* <Navbar  title = "Cutie CAT App" about = "Cuteness" mode = {"light"}/> */}
      <TextForm placeHold= "enter something here..."/>
      <About/>
    </>
    
  );
}

export default App;