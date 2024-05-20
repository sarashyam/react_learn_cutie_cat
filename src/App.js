// import logo from './logo.svg';
import './App.css';
import TextForm from './TextForm';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar  title = "Cutie CAT App" about = "Cuteness"/> 
      <TextForm placeHold= "enter something here..."/>
      <About/>
    </>
    
  );
}

export default App;