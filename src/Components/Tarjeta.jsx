import "../Styles/Tarjeta.css";

function Tarjeta(props) {
  return (
    <>
      <div className="container">
        <div className="invitation-container"></div>
        <div className="date-container">
          <div className="text-cont">
            <h2>{props.Name} estas invitad@!</h2>
            <h2>Sábado</h2>
            <p>16 DE NOVIEMBRE</p>
            <h2>Hora</h2>
            <p>A LAS 4:00 PM</p>
            <h2>Lugar</h2>
            <p>Nero de la 375</p>
            <p>
              <span>{props.Frase}</span>
            </p>
            <h2>Te Esperamos!!!</h2>
          </div>
          <img className="imagencita" src="./roshi.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Tarjeta;
