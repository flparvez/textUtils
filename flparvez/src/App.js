import './App.css';
import About from './components/About';
import React, { useState } from 'react';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';


function App() {


    const toggleMode =() =>{
        if (mode ==='white'){
            setMode("black")
            document.body.style.backgroundColor='black';
        }else{
            setMode("white")
            document.body.style.backgroundColor='white';
        }
    }

      const [mode, setMode] = useState('white');
    return (
        <div className="App" >

            <Navbar title="TextUtilis" mode={mode} toggleMode={toggleMode} />

                 <About />
            <TextForm heading="Enter Your Text Analyze Below" />
        </div>

    );
}





export default App;