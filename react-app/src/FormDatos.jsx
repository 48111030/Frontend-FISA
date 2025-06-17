import { useEffect, useState } from 'react';
import './FormDatos.css';

const BASE_URL = 'https://fisa-backend.vercel.app'; // corregí la base, no poner /solicitudes aquí porque lo agregas luego

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

  const [formData, setFormData] = useState({
    historialcrediticio: '',
    ingresos: '',
    deudasmensuales: '',
    monto: '',
    plazomeses: '',
    edad: '',
    añosexp: '',
    tipodeingresos: '',
    usuariosid: 1,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    const nameMap = {
      historial: 'historialcrediticio',
      ingresos: 'ingresos',
      deudas: 'deudasmensuales',
      monto: 'monto',
      plazo: 'plazomeses',
      edad: 'edad',
      anios: 'añosexp',
      tipoIngreso: 'tipodeingresos',
    };

    const key = nameMap[name] || name;

    setFormData(prev => ({
      ...prev,
      [key]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch(`${BASE_URL}/solicitudes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const text = await res.text();

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        // La respuesta no es JSON, puede ser HTML u otro texto
        throw new Error(`Respuesta inesperada del servidor: ${text}`);
      }

      if (!res.ok) {
        throw new Error(data.error || 'Error enviando datos');
      }

      setSuccess(true);
      setFormData({
        historialcrediticio: '',
        ingresos: '',
        deudasmensuales: '',
        monto: '',
        plazomeses: '',
        edad: '',
        añosexp: '',
        tipodeingresos: '',
        usuariosid: 1,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <header>
        <div className="header-left">
          <button aria-label="Volver" className="back-button">
            <span className="material-icons" aria-hidden="true">
              arrow_back_ios_new
            </span>
          </button>
          <div className="circle-icon" aria-label="Icono decorativo circular morado"></div>
        </div>
        <div className="header-right" role="navigation" aria-label="Navegación principal">
          <span className="material-icons" tabIndex="0" role="link" aria-label="Inicio">
            home
          </span>
          <span className="material-icons" tabIndex="0" role="link" aria-label="Perfil">
            person
          </span>
        </div>
      </header>

      <main>
       
          
<div className="e-card playing">
  <div className="image"></div>
  
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
  

      <div className="infotop">

<div className="Logo">
  
</div>
<div className="name">Ayúdanos a mejorar tu futuro</div>
</div>
</div>
         

        <section className="form-container" aria-label="Formulario para rellenar solicitud">
          <h2>Rellena tus datos de la solicitud</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="historial">Historial crediticio</label>
              <input
                id="historial"
                name="historial"
                type="text"
                autoComplete="off"
                value={formData.historialcrediticio}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="ingresos">Ingresos mensuales</label>
              <input
                id="ingresos"
                name="ingresos"
                type="text"
                autoComplete="off"
                value={formData.ingresos}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="deudas">Deudas mensuales</label>
              <input
                id="deudas"
                name="deudas"
                type="text"
                autoComplete="off"
                value={formData.deudasmensuales}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="monto">Monto préstamo</label>
              <input
                id="monto"
                name="monto"
                type="text"
                autoComplete="off"
                value={formData.monto}
                onChange={handleChange}
                required
              />
            </div>

            <div className="inline-row" aria-label="Datos adicionales en fila">
              <div>
                <label htmlFor="plazo">Plazo meses</label>
                <input
                  id="plazo"
                  name="plazo"
                  type="text"
                  autoComplete="off"
                  value={formData.plazomeses}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="edad">Edad</label>
                <input
                  id="edad"
                  name="edad"
                  type="text"
                  autoComplete="off"
                  value={formData.edad}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="anios">Años trabajando</label>
                <input
                  id="anios"
                  name="anios"
                  type="text"
                  autoComplete="off"
                  value={formData.añosexp}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="tipoIngreso">Tipo ingreso</label>
              <input
                id="tipoIngreso"
                name="tipoIngreso"
                type="text"
                autoComplete="off"
                value={formData.tipodeingresos}
                onChange={handleChange}
                required
              />
            </div>

            <button className="submit-btn" type="submit" aria-label="Enviar formulario" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar'}
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Solicitud enviada con éxito!</p>}
          </form>
        </section>
      </main>
    </div>
  );
}

export default FormDatos;
