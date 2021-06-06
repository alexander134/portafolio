import React from 'react'
import Logo from './imagenes/logoAlexandertitulo.png'
import "./componentesCss.css"
function Header() {
    return (
        <div className="header">
            <div className="headerMenu">
                <a href="" className="headerMenuLogo"><img src={Logo} alt="Logo" /></a>
                <div className="headerNav">
                    <nav>
                        <a href="/">Contacto</a>
                        <a href="/">Portafolio</a>
                        <a href="/">GitHub</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header
