import { useEffect, useState } from 'react';
import './FormDatos.css';

const BASE_URL = 'https://fisa-backend.vercel.app';

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
    mora_total: '',
    deuda_total: '',
    tuvo_atrasos: false,
    usuariosid: 1,
    emailUsuario: 'usuario@ejemplo.com', // temporal (simula email del usuario)
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [mensajeIA, setMensajeIA] = useState('');
  const [aptoIA, setAptoIA] = useState(null);

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
      mora_total: 'mora_total',
      deuda_total: 'deuda_total',
      atrasos: 'tuvo_atrasos',
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
    setMensajeIA('');
    setAptoIA(null);

    try {
      const res = await fetch(`${BASE_URL}/solicitudes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          edad: Number(formData.edad),
          ingresos: Number(formData.ingresos),
          deudasmensuales: Number(formData.deudasmensuales),
          monto: Number(formData.monto),
          plazomeses: Number(formData.plazomeses),
          añosexp: Number(formData.añosexp),
          mora_total: Number(formData.mora_total),
          deuda_total: Number(formData.deuda_total),
          tuvo_atrasos: formData.tuvo_atrasos === true || formData.tuvo_atrasos === 'si',
        }),
      });

      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error(`Respuesta inesperada del servidor: ${text}`);
      }

      if (!res.ok) {
        throw new Error(data.error || 'Error enviando datos');
      }

      setSuccess(true);
      setMensajeIA(data.resultadoIA?.mensaje || '');
      setAptoIA(data.resultadoIA?.resultado ?? null);

      setFormData({
        historialcrediticio: '',
        ingresos: '',
        deudasmensuales: '',
        monto: '',
        plazomeses: '',
        edad: '',
        añosexp: '',
        tipodeingresos: '',
        mora_total: '',
        deuda_total: '',
        tuvo_atrasos: false,
        usuariosid: 1,
        emailUsuario: 'usuario@ejemplo.com',
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
          <svg className="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1"/>
          </svg>

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
            <div className="Logo"></div>
            <div className="name">Ayúdanos a potenciar tu futuro</div>
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
                value={formData.monto}
                onChange={handleChange}
                required
              />
            </div>

            <div className="inline-row">
              <div>
                <label htmlFor="plazo">Plazo meses</label>
                <input
                  id="plazo"
                  name="plazo"
                  type="text"
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
                  value={formData.edad}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="anios">Años trabajando</label>
              <input
                id="anios"
                name="anios"
                type="text"
                value={formData.añosexp}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="tipoIngreso">Tipo ingreso</label>
              <input
                id="tipoIngreso"
                name="tipoIngreso"
                type="text"
                value={formData.tipodeingresos}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="mora_total">Mora total ($)</label>
              <input
                id="mora_total"
                name="mora_total"
                type="text"
                value={formData.mora_total}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="deuda_total">Deuda total ($)</label>
              <input
                id="deuda_total"
                name="deuda_total"
                type="text"
                value={formData.deuda_total}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="atrasos">¿Tuviste atrasos de pago?</label>
              <select
                id="atrasos"
                name="atrasos"
                value={formData.tuvo_atrasos ? 'si' : 'no'}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    tuvo_atrasos: e.target.value === 'si',
                  }))
                }
                required
              >
                <option value="no">No</option>
                <option value="si">Sí</option>
              </select>
            </div>

            <button className="submit-btn" type="submit" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar'}
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Solicitud enviada con éxito!</p>}

            {mensajeIA && (
              <div style={{ marginTop: '1rem', padding: '1rem', background: '#f3f3f3', borderRadius: '5px' }}>
                <h3>Resultado del análisis:</h3>
                <p><strong>Mensaje:</strong> {mensajeIA}</p>
                <p><strong>Apto:</strong> {aptoIA ? 'Sí' : 'No'}</p>
              </div>
            )}
          </form>
        </section>
      </main>
    </div>
  );
}

export default FormDatos;
