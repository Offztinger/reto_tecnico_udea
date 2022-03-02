import React from "react";
import "./Tarea.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

export default function Tarea() {
  return (
    <div className="newTareaContainer">
      <div className="navbar">
        <FontAwesomeIcon icon={faBackward} />
      </div>
    </div>
  );
}
