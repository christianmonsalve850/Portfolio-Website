import '../css/Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <p className='developed'>Developed by Christian Monsalve</p>
            <p className='copyright'>Copyright © CM 2025</p>
            <div className="info-buttons">
                <a href="http://github.com/christianmonsalve850" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github fa-2x"></i></a>
                <a href="http://linkedin.com/in/christian-monsalve-95803b168" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in fa-2x"></i></a>
            </div>
        </div>
    )
}

export default Footer;