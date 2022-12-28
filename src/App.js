import Card from "./components/Card";
import React, { Component }  from 'react';

import Navbar from "./components/Navbar";
import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/Form';
import Carddetail from "./components/Carddetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
    <Navbar/>
    <Routes>
    <Route path="/carddetail" element={<Carddetail/>}/>
    <Route path="/form" element={<Form/>} />
    <Route path="/" element={<Card/>} />
    </Routes>
    
    </BrowserRouter>

    </div>
  );
}

export default App;
