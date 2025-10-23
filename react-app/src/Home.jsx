// src/Home.jsx
import React, { useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // ✅ Carga dinámica de los íconos de Material Icons
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-left">
          <img src="/logo.png" alt="Logo FISA" className="home-logo" />
          <h1 className="home-title">FISA</h1>
        </div>

        <div className="header-right">
          <span className="material-icons" aria-label="Inicio">
            home
          </span>
          <span
            className="material-icons"
            role="button"
            tabIndex="0"
            aria-label="Perfil"
          >
            person
          </span>
        </div>
      </header>

      <main className="home-main">
        <div className="home-text">
          <h2>
            Comenzá a predecir tus posibilidades desde la comodidad de tu casa
          </h2>
          <p>
            Completá un formulario y{" "}
            <button className="home-btn" onClick={() => navigate("/Register")}>
              Comenzá
            </button>
          </p>
        </div>

        <div className="home-image">
          <img src="/finanzas.png" alt="Ilustración de finanzas" />
        </div>
      </main>
    </div>
  );
}

export default Home;
