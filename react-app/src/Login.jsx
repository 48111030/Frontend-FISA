import React, { useState } from "react";
import "./Register.css"; // reutilizamos el mismo diseño
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { email, password } = formData;

    // Validación básica antes de enviar
    if (!email || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      const response = await fetch("https://fisa-backend.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || "Error al iniciar sesión");
        return;
      }

      // Inicio de sesión exitoso
      console.log("Usuario autenticado:", result);
      // Aquí puedes guardar el token en el almacenamiento local o en el contexto
      localStorage.setItem("token", result.token);
      navigate("/formdatos");
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema con el inicio de sesión");
    }
  };

  return (
    <div className="cuerpo">
      <div className="container">
        <div className="form-section">
          <div className="form-box">
            <div className="logo">FISA</div>
            <input
              className="Input"
              type="email"
              name="email"
              placeholder="Mail"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="Input"
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>
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
