import axios from 'axios'
import React ,{useState}from 'react'
import "./componentesCss.css"

function Contacto() {
    const [name, setName] = useState("")
    const [mensaje, setMensage] = useState("")

    const sendMesage= async(e)=>{
        e.preventDefault();
         axios.post("/api/enviarContacto",{
             name:name,
             mensaje:mensaje

         });
         setName("")
         setMensage("")
    }
    return (
        <div className="contacto">
            <div className="contactTitle">
                <h1>Contacto</h1>
            </div>
            <div className="contactContens">
                <form>
                    <input placeholder="Nombre"  value={name} onChange={(e)=>setName(e.target.value)}/>
                    <textarea placeholder="Escribe aqui tu mensaje" value={mensaje}  onChange={(e)=>setMensage(e.target.value)}></textarea>
                    <button onClick={sendMesage}>Enviar Mensaje</button>
                </form>
            </div>
        </div>
    )
}

export default Contacto
