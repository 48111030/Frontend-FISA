import { useEffect } from 'react';
import './FormDatos.css';

function FormDatos() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div>
      <header>
        <div className="header-left">
          <button aria-label="Volver" className="back-button">
            <span className="material-icons" aria-hidden="true">arrow_back_ios_new</span>
          </button>
          <div className="circle-icon" aria-label="Icono decorativo circular morado"></div>
        </div>
        <div className="header-right" role="navigation" aria-label="Navegación principal">
          <span className="material-icons" tabIndex="0" role="link" aria-label="Inicio">home</span>
          <span className="material-icons" tabIndex="0" role="link" aria-label="Perfil">person</span>
        </div>
      </header>

      <main>
        <div className="purple-block" aria-label="Bloque decorativo morado cuadrado con bordes redondeados">
          <div className="bloquito" aria-label="Bloque decorativo morado cuadrado con bordes redondeados"></div>
        </div>

        <section className="form-container" aria-label="Formulario para rellenar solicitud">
          <h2>Rellena tus datos de la solicitud</h2>
          <form action="#" method="POST" noValidate>
            <div>
              <label htmlFor="historial">Historial crediticio</label>
              <input id="historial" name="historial" type="text" autoComplete="off" />
            </div>
            <div>
              <label htmlFor="ingresos">Ingresos mensuales</label>
              <input id="ingresos" name="ingresos" type="text" autoComplete="off" />
            </div>
            <div>
              <label htmlFor="deudas">Deudas mensuales</label>
              <input id="deudas" name="deudas" type="text" autoComplete="off" />
            </div>
            <div>
              <label htmlFor="monto">Monto préstamo</label>
              <input id="monto" name="monto" type="text" autoComplete="off" />
            </div>

            <div className="inline-row" aria-label="Datos adicionales en fila">
              <div>
                <label htmlFor="plazo">Plazo meses</label>
                <input id="plazo" name="plazo" type="text" autoComplete="off" />
              </div>
              <div>
                <label htmlFor="edad">Edad</label>
                <input id="edad" name="edad" type="text" autoComplete="off" />
              </div>
              <div>
                <label htmlFor="anios">Años trabajando</label>
                <input id="anios" name="anios" type="text" autoComplete="off" />
              </div>
            </div>

            <div>
              <label htmlFor="tipoIngreso">Tipo ingreso</label>
              <input id="tipoIngreso" name="tipoIngreso" type="text" autoComplete="off" />
            </div>

            <button className="submit-btn" type="submit" aria-label="Enviar formulario">Enviar</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default FormDatos;
