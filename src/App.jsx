import React from "react";
import "./App.css";
import "./styles.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Filtros from "./components/Filtros/Filtros";
import Resultados from "./components/Resultados/Resultados";
import { tareas } from "./components/Resultados/data/data";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tarea from "./components/Tarea/Tarea";

export default function App() {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [checked, updateChecked] = useState("todos");
  const [tareasCheck, updateTareasCheck] = useState(tareas);
  return (
    <Router>
      <div className="contenedorPrincipal">
        <Header />
        <Switch>
          <Route exact path="/">
            <Filtros
              checked={checked}
              updateChecked={updateChecked}
              date1={date1}
              setDate1={setDate1}
              date2={date2}
              setDate2={setDate2}
            />
            <Resultados
              checked={checked}
              updateChecked={updateChecked}
              tareasCheck={tareasCheck}
              updateTareasCheck={updateTareasCheck}
              date1={date1}
              date2={date2}
            />
          </Route>
          <Route exact path="/tarea">
            <Tarea></Tarea>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
