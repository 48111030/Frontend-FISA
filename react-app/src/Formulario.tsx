import { useState } from 'react';
import './Formulario.css';

function Formulario() {
  const [formData, setFormData] = useState({
    historial_crediticio: '',
    ingresos_mensuales: '',
    deudas_mensuales: '',
    monto_prestamo: '',
    plazo_meses: '',
    edad: '',
    tipo_ingreso: '',
    anos_trabajando: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.placeholder.toLowerCase().replace(/ /g, '_')]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        alert('Datos enviados correctamente');
        console.log(result);
      } else {
        alert('Error al enviar los datos');
        console.error(result);
      }
    } catch (error) {
      console.error('Error en fetch:', error);
    }
  };

  return (
    <div className="form-box">
      <button className="back-button">
        <img src="Flecha.png" alt="Back" className="Flecha" />
      </button>

      <div className="logo">
        <img className="LogoN" src="LogoN.png" alt="Logo" />
      </div>

      <div className="inputs">
        <input type="text" placeholder="Historial crediticio" required onChange={handleChange} />
        <input type="number" placeholder="Ingresos mensuales" required onChange={handleChange} />
        <input type="number" placeholder="Deudas mensuales" required onChange={handleChange} />
        <input type="number" placeholder="Monto del préstamo" required onChange={handleChange} />
        <input type="number" placeholder="Plazo meses" required onChange={handleChange} />
        <input type="number" placeholder="Edad" required onChange={handleChange} />
        <input type="text" placeholder="Tipo de ingreso" required onChange={handleChange} />
        <input type="number" placeholder="Años trabajando" required onChange={handleChange} />
      </div>

      <div className="form-bottom">
        <button id="LogInBtn" onClick={handleSubmit}>Continuar</button>
      </div>
    </div>
  );
}

export default Formulario;
