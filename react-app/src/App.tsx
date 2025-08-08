// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import FormDatos from "./FormDatos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/formdatos" element={<FormDatos />} />
      </Routes>
    </Router>
  );
}

export default App;
