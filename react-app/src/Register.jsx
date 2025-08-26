import React, { useState } from "react";
import "./Register.css";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { nombre, apellido, email, password } = formData;

    // Validación básica antes de enviar
    if (!nombre || !apellido || !email || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      const response = await fetch("https://fisa-backend.vercel.app/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || "Error al registrar");
        return;
      }

      // Registro exitoso
      console.log("Usuario registrado:", result);
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema con el registro");
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
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            <input
              className="Input"
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleChange}
            />
            <input
              className="Input"
              type="email"
              name="email"
              placeholder="Email"
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

            <button onClick={handleSubmit}>Enviar</button>
            <Link to="/login">Iniciar sesión</Link>
          </div>
        </div>
        <div className="side-text">Crea tu cuenta en segundos.</div>
      </div>
    </div>
  );
};

export default Register;
