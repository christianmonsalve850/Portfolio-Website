import '../css/Footer.css';
import { ThemeContext } from '../App';
import { useContext } from 'react';

function Footer() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <footer className="footer-container">
            <p className='developed'>Developed by Christian Monsalve</p>
            <p className='copyright'>Copyright © CM 2025</p>
            <div className={`info-buttons-${theme}`}>
                <a href="http://github.com/christianmonsalve850" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github fa-lg contact-btn"></i></a>
                <a href="http://linkedin.com/in/christian-monsalve-95803b168" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in fa-lg contact-btn"></i></a>
            </div>
        </footer>
    )
}

export default Footer;