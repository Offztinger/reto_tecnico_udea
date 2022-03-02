import React, { useState } from "react";
import "./Tarea.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Tarea() {
  const [form, setForm] = useState({
    titulo: "",
    fechaCreacion: "",
    categorias: "",
    check: false,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    fetch("http://localhost:3005/tarea/", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="newTareaContainer">
      <div className="navbar">
        <div className="contenedorBack">
          <p className="subtitleBack">Volver atras...</p>
          <Link to="/">
            <FontAwesomeIcon className="fontAwesome" icon={faBackward} />
          </Link>
        </div>
      </div>
      <div className="createContainer">
        <div className="tarea-container">
          <div className="tarea-contenido">
            <div className="detalles-tarea">
              <p className="tarea-titulo">
                <input
                  type="text"
                  name="titulo"
                  id="titulo"
                  onChange={handleChange}
                  value={form.titulo}
                  placeholder="Digite el titulo de la tarea"
                />
              </p>
              <p className="tarea-fecha">
                <input
                  type="date"
                  onChange={handleChange}
                  name="fechaCreacion"
                  value={form.date}
                  id="fecha"
                />
              </p>
            </div>
            <div className="categoria-tarea">
              <p className="tarea-titulo-categoria">Categoria:</p>
              <p className="tarea-categoria">
                <input
                  type="text"
                  name="categorias"
                  onChange={handleChange}
                  value={form.categorias}
                  id="categoria"
                />
              </p>
            </div>

          </div>
          <div className="contenedorBoton">
              <button className="buttonTarea" onClick={handleClick}>
                Crear tarea
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}
