import Home from "./components/Home";
import React  from 'react';

import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/Form';
import Carddetail from "./components/Carddetail";
import Notfound from "./components/Notfound";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
    <Navbar/>
    <Routes>
    <Route path="/detail/:id" element={<Carddetail/>}/>
    <Route path="/form" element={<Form/>} />
    <Route path="/" element={<Home/>} />
    <Route path="*" element={<Notfound/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
