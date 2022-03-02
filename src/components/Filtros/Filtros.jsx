import "./Filtros.css";

export default function Filtros({
  checked,
  updateChecked,
  date1,
  setDate1,
  date2,
  setDate2,
}) {
  let onChangeDate1 = (event) => {
    date2 = new Date(date2).getTime();
    date1 = new Date(event.target.value).getTime();
    /*Definiendo metodo para evitar que la fecha de partida sea menor a la de regreso */
    if (date2 < date1) {
      alert("La fecha de partida no puede ser menor a la de regreso");
      date1 = date2 - 43200000;
      const yesterdayDate = new Date(date1);
      const year1 = yesterdayDate.getFullYear();
      let month1 = yesterdayDate.getMonth() + 1;
      let day1 = yesterdayDate.getDate();
      /*Condiconales del metodo zero() extraidos de app.js */
      if (day1 < 10) {
        day1 = "0" + day1;
      }
      if (month1 < 10) {
        month1 = "0" + month1;
      }
      const yesterday = year1 + "-" + month1 + "-" + day1;
      setDate1(yesterday);
    } else {
      setDate1(event.target.value);
    }
  };

  /*HASTA*/
  let onChangeDate2 = (event) => {
    date1 = new Date(date1).getTime();
    date2 = new Date(event.target.value).getTime();
    console.log(new Date(date2));
    /*Definiendo metodo para evitar que la fecha de regreso sea menor a la de partidas */
    if (date1 > date2) {
      alert("La fecha de regreso no puede ser menor a la de partida");
      date2 = date1 + 172800000;
      const tomorrowDate = new Date(date2);

      const year2 = tomorrowDate.getFullYear();
      let month2 = tomorrowDate.getMonth() + 1;
      let day2 = tomorrowDate.getDate();
      /*Condiconales del metodo zero() extraidos de app.js */
      if (day2 < 10) {
        day2 = "0" + day2;
      }
      if (month2 < 10) {
        month2 = "0" + month2;
      }
      const tomorrow = year2 + "-" + month2 + "-" + day2;
      setDate2(tomorrow);
    } else {
      setDate2(event.target.value);
    }
  };

  const onChangeEstado = (evento) => {
    updateChecked(evento.target.value);
  };
  return (
    <div className="contenedorFiltros">
      <div className="contenedorInput">
        <div className="dateInput">
          <div className="dateItem">
            <label htmlFor="date1">Desde:</label>
            <input
              className="date"
              value={date1}
              onChange={onChangeDate1}
              type="date"
              name=""
              id="date1"
            />
          </div>
          <div className="dateItem">
            <label htmlFor="date2">Hasta:</label>
            <input
              className="date"
              value={date2}
              onChange={onChangeDate2}
              type="date"
              name=""
              id="date2"
            />
          </div>
        </div>
        <div className="selectInput">
          <select className="select" value={checked} onChange={onChangeEstado}>
            <option value="todos">Estado</option>
            <option value="complete">Completado</option>
            <option value="nocomplete">No completado</option>
          </select>
        </div>
      </div>
    </div>
  );
}
