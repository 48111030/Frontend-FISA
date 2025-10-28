// src/Resultado.jsx
import React, { useEffect } from "react";
import "./Resultado.css";
import { useLocation, useNavigate } from "react-router-dom";

function Resultado() {
  const navigate = useNavigate();
  const location = useLocation();

  // 📦 Recibe los datos del resultado enviados desde FormDatos
  const { factor, detalle, sugerencia, valor, umbral } = location.state || {};

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <div className="resultado-container">
      <header className="resultado-header">
        <div className="header-left">
          <img src="/logo.png" alt="Logo FISA" className="resultado-logo" />
          <h1>FISA</h1>
        </div>

        <div className="header-right">
          <span
            className="material-icons"
            onClick={() => navigate("/")}
            aria-label="Inicio"
          >
            home
          </span>
          <span className="material-icons" aria-label="Perfil">
            person
          </span>
        </div>
      </header>

      <main className="resultado-main">
      <div className="sombra-card">
        <div className="resultado-card">
          <p className="resultado-factor">
            Factor: {factor || "historial crediticio"}
          </p>

          <div className="resultado-bueno">
            <p>Valor Bueno</p>
            <div className="barras buenas">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="resultado-malo">
            <p>Umbral malo</p>
            <div className="barras malas">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        </div>
        <div className="resultado-info">
          <div className="detalle">
            <p>
              <strong>Detalle:</strong> {detalle || 'Tu perfil no es "bueno" según reglas actuales.'}
            </p>
          </div>

          <div className="sugerencia">
            <p>
              <strong>Sugerencia:</strong>{" "}
              {sugerencia ||
                "Mejorá ratios de deuda/mora y evitá atrasos para subir de categoría."}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Resultado;
