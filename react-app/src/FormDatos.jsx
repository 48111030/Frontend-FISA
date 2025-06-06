import { useState } from 'react';
import './FormDatos.css';

function FormDatos() {
    return (
        <div className="FormularioPage">
          <div className="header">
            <div className="leftIcons">

            </div>
          <div className="rightIcons">

            </div>
          </div>



          <div className="main">
          <div className="leftM">
                <div className="rectanguloP">
                    <div className="rectangulo"></div>
                </div>
          </div>
          <div className="rightM">
          <div className="inputs">
        <input type="text" className="primeros4" />
        <input type="text" className="primeros4" />
        <input type="text" className="primeros4" />
        <input type="text" className="primeros4" />

<div className="3chicos">
        <input type="text" className="chico" />
        <input type="text" className="chico" />
        <input type="text" className="chico" />
</div>
        <input type="text" className="primeros4" />
            </div>
          </div>
            




      <button className="Send">Evaluar</button>
          </div>
          
            </div>

    )}

export default FormDatos;