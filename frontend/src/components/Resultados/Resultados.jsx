import React from 'react';
import "./Resultados.css";
import trashCan from "./images/delete.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function Resultados({
  checked,
  updateChecked,
  tareasCheck,
  updateTareasCheck,
  date1,
  date2,
}) {
  const actualizarEstado = (element) => {
    const nuevaTarea = tareasCheck.map((elemento) => {
      if (element.id === elemento.id) {
        return {
          id: elemento.id,
          titulo: elemento.titulo,
          fechaCreacion: elemento.fechaCreacion,
          categorias: elemento.categorias,
          check: !elemento.check,
        };
      }
      return elemento;
    });
    updateTareasCheck(nuevaTarea);
  };
  const crearLista = () => {
    /*Condicional para el estado de la tarea*/
    let nuevaLista = tareasCheck;
    if (checked !== "todos") {
      if (checked === "complete") {
        nuevaLista = nuevaLista.filter((tarea) => tarea.check === true);
      } else {
        nuevaLista = nuevaLista.filter((tarea) => tarea.check === false);
      }
    }
    /*Condicional para las fechas*/
    if (date1 !== "" && date2 !== "") {
      let date1UNIX = new Date(date1).getTime() + 21600000;
      let date2UNIX = new Date(date2).getTime() + 21600000;
      date1UNIX = new Date(date1UNIX).setHours(0, 0, 0, 0);
      date2UNIX = new Date(date2UNIX).setHours(0, 0, 0, 0);
      nuevaLista = nuevaLista.filter(
        (tarea) =>
          date1UNIX <= (new Date(tarea.fechaCreacion).getTime()) && date2UNIX >= (new Date(tarea.fechaCreacion).getTime())
      );
    }
    return nuevaLista;
  };
  let tareasFiltradas = crearLista();
  return (
    <div className="contenedorResultados">
      <div className="titleResultados">
        <p>Pendiente por hacer: </p>
      </div>
      {tareasFiltradas.map(function (element, index) {
        return (
          <div key={index}>
            <Tareas
              titulo={element.titulo}
              fecha={element.fechaCreacion}
              categoria={element.categorias}
              check={element.check}
              click={() => actualizarEstado(element)}
            />
          </div>
        );
      })}
      {calcularFecha()}
    </div>
  );
}

function Tareas({ titulo, fecha, categoria, check, click }) {
  let alertClick = () => {
    let datos = titulo + " - " + fecha;
    alert("¿Deseas borrar " + datos + "?");
  };
  let classN = "";
  check ? (classN = <FontAwesomeIcon icon={faCheckCircle} />) : (classN = "");
  return (
    <div className="tarea-container">
      <div className="tarea-contenido">
        <div className="detalles-tarea">
          <p className="tarea-titulo">{titulo}</p>
          <p className="tarea-fecha">
            {`${fecha} - Hace ${calcularFecha(fecha)} dias`}
          </p>
        </div>
        <div className="categoria-tarea">
          <p className="tarea-titulo-categoria">Categoria:</p>
          <p className="tarea-categoria">{categoria}</p>
        </div>
      </div>
      <div className="tarea-interaccion">
        <div onClick={click} className="checkbox" href="">
          {classN}
        </div>
        <button className="trash-button">
          <img
            onClick={alertClick}
            className="trash-can"
            src={trashCan}
            alt="trash-can"
          />
        </button>
      </div>
    </div>
  );
}

function calcularFecha(fechaCreacion) {
  if (fechaCreacion !== undefined) {
    let fechaUnix = new Date(fechaCreacion).getTime();
    let fechaActual = new Date().getTime();
    let fechaDiferencia = fechaActual - fechaUnix;
    let diasDiferencia = fechaDiferencia / 1000 / 60 / 60 / 24;
    diasDiferencia = Math.round(diasDiferencia);
    return diasDiferencia;
  }
}
