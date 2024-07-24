// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import TextForm from './TextForm';
import About from './components/About';
import Navbar from './components/Navbar';
// import React, { useState } from 'react';


function App() {
  const [theme,set_theme] = useState('btn btn-danger');

  const [mode,setMode] = useState("light");
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      set_theme('btn btn-dark')
      // https://cdn.pixabay.com/photo/2020/06/13/17/51/milky-way-5295160_1280.jpg
      document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/11/29/03/59/dark-1867202_1280.jpg')";
      document.body.style.backgroundSize = "cover"; // to make sure the image covers the whole background
      document.body.style.backgroundRepeat = "no-repeat";
      document.title = 'Cutie Cat - Dark Theme'
      console.log(mode)
    }
    else{
      setMode('light')
      set_theme('btn btn-secondary')
      document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2023/05/31/14/20/mountains-8031511_1280.jpg')";
      // document.body.style.backgroundColor = "lightblue"; // Fallback background color
      console.log(mode)
      document.title = 'Cutie Cat - Light Theme'
    }
    
  }

  const red_theme = ()=>{
    set_theme('btn btn-danger')
      // https://cdn.pixabay.com/photo/2020/06/13/17/51/milky-way-5295160_1280.jpg
      document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2011/12/15/09/50/lagoon-nebula-11143_1280.jpg')";
      document.body.style.backgroundSize = "cover"; // to make sure the image covers the whole background
      document.body.style.backgroundRepeat = "no-repeat";
      document.title = 'Cutie Cat - Red Theme'
      // console.log(mode)
  
  }

  console.log(mode)

  return (
    <>
      
      <Navbar  title = "Cutie CAT App" about = "Cuteness" mode = {mode} toggleMode={toggleMode} red_theme= {red_theme}/> 
      {/* <Navbar  title = "Cutie CAT App" about = "Cuteness" mode = {"light"}/> */}
      <TextForm placeHold= "enter something here..." theme_color={theme}/>
      <About/>
    </>
    
  );
}

export default App; 