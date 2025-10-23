// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import FormDatos from "./FormDatos";

function App() {
  return (
    <Router>
      <Routes>
        {/* 👇 Pantalla principal al abrir el sitio */}
        <Route path="/" element={<Home />} />

        {/* 👇 Otras rutas */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/formdatos" element={<FormDatos />} />
      </Routes>
    </Router>
  );
}

export default App;
