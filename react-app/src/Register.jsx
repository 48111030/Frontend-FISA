// src/components/Register.jsx
import React from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom"; 

const Register = () => {
  const navigate = useNavigate(); 

  return (
    <div className="cuerpo">
      <div className="container">
        <div className="form-section">
          <div className="form-box">
            <div className="logo">FISA</div>
            <input type="text" placeholder="Nombre y apellido" />
            <input type="text" placeholder="Nombre usuario" />
            <input type="password" placeholder="Contraseña" />
            <input type="email" placeholder="Mail" />
            <button onClick={() => navigate("/formdatos")}>Enviar</button>
            <a href="#">Iniciar sesión</a>
          </div>
        </div>
        <div className="side-text">Crea tu cuenta en segundos.</div>
      </div>
    </div>
  );
};

export default Register;
