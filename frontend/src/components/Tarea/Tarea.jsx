import React from "react";
import "./Tarea.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Tarea() {
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
                  placeholder="Digite el titulo de la tarea"
                />
              </p>
              <p className="tarea-fecha">
                <input type="date" name="fecha" id="fecha" />
              </p>
            </div>
            <div className="categoria-tarea">
              <p className="tarea-titulo-categoria">Categoria:</p>
              <p className="tarea-categoria">
                <input type="text" name="text" id="categoria" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
