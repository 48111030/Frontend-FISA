import './Formulario.css';

function Formulario() {


  return (
    <div className="form-container">
      <div className="form-box">
        <button  className="back-button">
          <img src="Flecha.png" alt="Back" className="Flecha" />
        </button>

        <div className="logo">
          <img className="LogoN" src="LogoN.png" alt="Logo" />
        </div>

        <div className="inputs">
          <input type="text" placeholder="Historial crediticio" required />
          <input type="number" placeholder="Ingresos mensuales" required />
          <input type="number" placeholder="Deudas mensuales" required />
          <input type="number" placeholder="Monto del préstamo" required />
          <input type="number" placeholder="Plazo meses" required />
          <input type="number" placeholder="Edad" required />
          <input type="text" placeholder="Tipo de ingreso" required />
          <input type="number" placeholder="Años trabajando" required />
        </div>

        <div className="form-bottom">
          <button  id="LogInBtn">Continuar</button>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
