
import './App.css';
import Nav from './component/Nav';
import Form from './component/Form';
import About from './component/About';
import { useState } from "react";


function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = " gray";
    }
    else{
      setMode("light");
      
      document.body.style.backgroundColor = " cyan";
      
    }
  };

  
  return (
    <>
     <Nav title="Text Editor" mode={mode} toggleMode={toggleMode}/>

      <div className="container">
       <Form textarea="7" mode={mode}/>  
       <About mode={mode}/>     
      </div>
    </>
  );
}

export default App;
