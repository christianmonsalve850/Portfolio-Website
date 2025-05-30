import { useContext } from 'react';
import { ThemeContext } from '../App';
import '../css/NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="container">
            <div className={`navbar-${theme}`}>
                <button className='logo'>CM</button>

                <ul className='navbar-ul'>
                    <li className='navbar-item'><Link className='navbar-link' to="/">About</Link></li>
                    <li className='navbar-item'><Link className='navbar-link' to="/projects">Projects</Link></li>
                    <li className='navbar-item'><Link className='navbar-link' to="/blog">Blog</Link></li>
                    <li className='navbar-item'><Link className='navbar-link' to="/contact">Contact</Link></li>
                </ul>

                <button className="toggle" onClick={toggleTheme}>
                    {   theme === 'dark' ? 
                        <i class="fa-solid fa-moon moon fa-lg fa-toggle" style={{color: "#1ED760"}}></i> : 
                        <i class="fa-solid fa-sun fa-lg fa-toggle" style={{color: "#1ED760"}}></i> }
                </button>
            </div>
        </div>
    )
}

export default NavBar