import React, { useState } from 'react';
import '../css/nadvariño.css'; 
import Buscar from './Buscar';
function Nadvar() {
    const [nombre, setNombre] = useState("")
    const handleNombre =(e)=> {
        setNombre(e.target.value)

    }
    return (
        <div className="nadvar">
            <nav>
                <ul>
                    <li>
                        <img src="/ruta/al/logo.png" alt="Logo de la página" />
                    </li>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Acerca de</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li>
                        <div className="search-bar">
                            <input type="text" onChange={handleNombre} value={nombre} placeholder="Buscar..."/>
                            <button>Buscar</button>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nadvar;