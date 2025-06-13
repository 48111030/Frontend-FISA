import { useState } from 'react';
import './FormDatos.css';

function FormDatos() {
    return (
       <div>
          <header>
    <div className="header-left">
      <button aria-label="Volver" className="back-button">
        <span className="material-icons" aria-hidden="true">arrow_back_ios_new</span>
      </button>
      <div className="circle-icon" aria-label="Icono decorativo circular morado"></div>
    </div>
    <div class="header-right" role="navigation" aria-label="Navegación principal">
      <span className="material-icons" tabindex="0" role="link" aria-label="Inicio">home</span>
      <span className="material-icons" tabindex="0" role="link" aria-label="Perfil">person</span>
    </div>
  </header>

  <main>
    <div className="purple-block" aria-label="Bloque decorativo morado cuadrado con bordes redondeados">
      <div className=" bloquito" aria-label="Bloque decorativo morado cuadrado con bordes redondeados"></div>
    </div>

    <section className="form-container" aria-label="Formulario para rellenar solicitud">
      <h2>Rellena tus datos de la solicitud</h2>
      <form action="#" method="POST" novalidate>
        <div>
          <label for="historial">Historial crediticio</label>
          <input id="historial" name="historial" type="text" autocomplete="off" />
        </div>
        <div>
          <label for="ingresos">Ingresos mensuales</label>
          <input id="ingresos" name="ingresos" type="text" autocomplete="off" />
        </div>
        <div>
          <label for="deudas">Deudas mensuales</label>
          <input id="deudas" name="deudas" type="text" autocomplete="off" />
        </div>
        <div>
          <label for="monto">Monto préstamo</label>
          <input id="monto" name="monto" type="text" autocomplete="off" />
        </div>

        <div className="inline-row" aria-label="Datos adicionales en fila">
          <div>
            <label for="plazo">Plazo meses</label>
            <input id="plazo" name="plazo" type="text" autocomplete="off" />
          </div>
          <div>
            <label for="edad">Edad</label>
            <input id="edad" name="edad" type="text" autocomplete="off" />
          </div>
          <div>
            <label for="anios">Años trabajando</label>
            <input id="anios" name="anios" type="text" autocomplete="off" />
          </div>
        </div>

        <div>
          <label for="tipoIngreso">Tipo ingreso</label>
          <input id="tipoIngreso" name="tipoIngreso" type="text" autocomplete="off" />
        </div>

        <button className="submit-btn" type="submit" aria-label="Enviar formulario">Enviar</button>
      </form>
    </section>
  </main>
       </div>

    )}

export default FormDatos;