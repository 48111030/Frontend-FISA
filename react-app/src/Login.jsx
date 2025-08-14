import React from "react";
import "./Register.css"; // reutilizamos el mismo diseño
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="cuerpo">
      <div className="container">
        <div className="form-section">
          <div className="form-box">
            <div className="logo">FISA</div>
            <input className="Input" type="email" placeholder="Mail" />
            <input className="Input" type="password" placeholder="Contraseña" />
            <button onClick={() => navigate("/formdatos")}>
              Iniciar sesión
            </button>
            <a href="/">Crear cuenta</a>
          </div>
        </div>
        <div className="side-text">Inicia sesión para seguir tus finanzas</div>
      </div>
    </div>
  );
};

export default Login;
