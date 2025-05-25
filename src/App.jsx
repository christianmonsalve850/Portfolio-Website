import './css/index.css'
import { useState } from 'react';
import NavBar from './components/NavBar.jsx'
import About from './pages/About.jsx';
import Footer from './components/Footer.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <main className='main-container'>
        <NavBar/>
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
        <Footer/>
      </main>
      
    
    </BrowserRouter>
  )
}

export default App
