import './css/index.css';
import { createContext, useState } from 'react';
import NavBar from './components/NavBar.jsx';
import About from './pages/about.jsx';
import Footer from './components/Footer.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/Blog.jsx';

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'));
  }

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <main className={`main-container-${theme}`}>
          <NavBar/>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Footer/>
        </main>
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}

export default App
