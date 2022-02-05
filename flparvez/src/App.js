import './App.css';
import About from './components/About';
import React, { useState } from 'react';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';


function App() {

      const [mode, setmode] = useState('black');
    return (
        <div className="App" >

            <Navbar title="TextUtilis" mode={mode} />

                 <About />
            <TextForm heading="Enter Your Text Analyze Below" />
        </div>

    );
}





export default App;