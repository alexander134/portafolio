import React from 'react'
import Logo from './imagenes/logoAlexandertitulo.png'
import "./componentesCss.css"
function Header() {
    return (
        <div className="header">
            <div className="headerMenu">
                <a href="/" className="headerMenuLogo"><img src={Logo} alt="Logo" /></a>
                <div className="headerNav">
                    <nav>
                        <a href="/contacto">Contacto</a>
                        <a href="/#proyectos">Portafolio</a>
                        <a href="https://github.com/alexander134">GitHub</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header
