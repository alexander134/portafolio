import React from 'react'
import "./componentesCss.css"

function Home() {
    return (
        <div className="home">
            <div className="homeBanner">
            <h1>Alexander <strong>Diaz</strong></h1>
            </div>
            <div className="homeSubBanner">
                <p>Programador | Analista | TeamLeader</p>
            </div>
            <div className="homeContent">
                <div className="homeContentTitle">
                    <h2>Proyecto Creados</h2>
                </div>
                <div className="homeContentData">
                    <Proyecto numeroProyecto={1}/>
                    <Proyecto numeroProyecto={2}/>
                    <Proyecto numeroProyecto={3}/>
                    <Proyecto numeroProyecto={4}/>
                    <Proyecto numeroProyecto={5}/>
                    <Proyecto numeroProyecto={6}/>
                </div>
            </div>
        </div>
    )
}

function Proyecto(props){
    const {numeroProyecto}=props
    return(
        <div>
            <a href="">
                <h3>Proyecto {numeroProyecto}</h3>
            </a>
        </div>
    )
}

export default Home
