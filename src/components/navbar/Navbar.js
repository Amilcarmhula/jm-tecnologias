import './navbarStyles.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [active, setactive] = useState(false)

    const changeHover = (id) => {
        const links = [ 'home','about', 'service', 'team', 'contact']
        var x = document.getElementById(id)
        links.forEach(element => {
            if(element !== id){
                document.getElementById(element).classList = 'link'
            }
        });
        x.classList += ' active'
        setactive(false);
    }
    return (
        <nav>
            <div className="logo"> <Link to="/" onClick={() => changeHover('home')}>JM-Tecnologias</Link></div>
            <ul className={active?'active':''}>
                <li><Link to="/" id='home' className='link' onClick={() => changeHover('home')}>Inicio</Link></li>
                <li><Link to="/service" id='service' className='link' onClick={() => changeHover('service')}>Serviços</Link></li>
                <li><Link to="#" id='about' className='link' onClick={() => changeHover('about')}>Sobre Nós</Link></li>
                <li><Link to="#" id='team' className='link' onClick={() => changeHover('team')}>Nossa Equipe</Link></li>
                <li><Link to="contact" id='contact' className='link' onClick={() => changeHover('contact')}>Contacte-nos</Link></li>
            </ul>
            <div className="menu-icon">
            <i onClick={()=>setactive(!active)} className="fa-solid fa-bars"></i>
            </div>
        </nav>
    )
}

export default Navbar
