import React from 'react'
import "./componentesCss.css"

function Contacto() {
    return (
        <div className="contacto">
            <div className="contactTitle">
                <h1>Contacto</h1>
            </div>
            <div className="contactContens">
                <form>
                    <input/>
                    <textarea placeholder="Escribe aqui tu mensaje"></textarea>
                    <button placeholder="Nombre">Enviar Mensaje</button>
                </form>
            </div>
        </div>
    )
}

export default Contacto
