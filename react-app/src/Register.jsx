import React from "react";
import "./Register.css";
import { useNavigate, Link } from "react-router-dom"; // 👈 Agregamos Link

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="cuerpo">
      <div className="container">
        <div className="form-section">
          <div className="form-box">
            <div className="logo">FISA</div>
            <input className="Input" type="text" placeholder="Nombre y apellido" />
            <input className="Input" type="text" placeholder="Nombre usuario" />
            <input className="Input" type="password" placeholder="Contraseña" />
            <input className="Input" type="email" placeholder="Mail" />
            
            <button onClick={() => navigate("/formdatos")}>Enviar</button>

            {/* 👇 Aquí va el Link */}
            <Link to="/login">Iniciar sesión</Link>
          </div>
        </div>
        <div className="side-text">Crea tu cuenta en segundos.</div>
      </div>
    </div>
  );
};

export default Register;
