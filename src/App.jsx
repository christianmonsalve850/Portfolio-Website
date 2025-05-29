import './css/index.css';
import { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import About from './pages/about.jsx';
import Footer from './components/Footer.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';


function App() {

  return (
    <BrowserRouter>
      <main className='main-container'>
        <NavBar/>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </main>
      
    
    </BrowserRouter>
  )
}

export default App
