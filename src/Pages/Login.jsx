import { useState } from "react";

import "../Styles/Login.css";
import Tarjeta from "../Components/Tarjeta";

const Invitados = [
    {
        usuario: "Alisson",
        contra: "AS000",
        nombre: "Hijita bella",
        frase: "Mi hijita hermoza, como no vas a estar invitada si tu tienes que estar a mi lado ese dia"
    },
    {
        usuario: "Max",
        contra: "MX001",
        nombre: "Dayanita",
        frase: "Ese dia no te picaras como mujer no? Si va la profita le dices pa desestresarte :v"
    },
    {
        usuario: "Rony",
        contra: "RY002",
        nombre: "Lucerito",
        frase: "Ya pero eres o no eres? asi firmes, si eres cabro no hay problema, igual eres pata"
    },
    {
        usuario: "Sandro",
        contra: "SD003",
        nombre: "Chandrito",
        frase: "Sera secar por la casaca ploma XD"
    },
    {
        usuario: "Carlos",
        contra: "CL004",
        nombre: "Charlie",
        frase: "Car-li-tos Car-li-tos, esta motivacion debe bastar para que vengas XD"
    },
    {
        usuario: "Jacobo",
        contra: "JB005",
        nombre: "Jaycob",
        frase: "Todo sea por las menoreeeees!!!! XD"
    },
    {
        usuario: "Luis",
        contra: "LS006",
        nombre: "Luchito",
        frase: "Osea por que Aracely no vendra tu tampoco vendras?XD"
    },
    {
        usuario: "Gonzalo",
        contra: "GZ007",
        nombre: "Presi",
        frase: "Tomaremos como en aquellos años de antaño"
    },
    {
        usuario: "Aracely",
        contra: "AY008",
        nombre: "Lalito",
        frase: "No vas a venir por que no hay cachimbos no?:("
    },
    {
        usuario: "Ingrid",
        contra: "IG009",
        nombre: "Madrina Ingrid",
        frase: "Todo sea por los causas que te dicen: 'Por ahí no causa'"
    },
    {
        usuario: "Rodrigo",
        contra: "RG010",
        nombre: "Imbecil",
        frase: "Aprovecharemos que esta en Mexico ;)"
    },
    {
        usuario: "Angel",
        contra: "AL011",
        nombre: "Angelito",
        frase: "Minimo me traeras a Marcus, asi si XD"
    },
    {
        usuario: "Camila Alexandra",
        contra: "CA012",
        nombre: "Camii",
        frase: "Vienes o te votas como el atorrante de tu hermano?"
    },
    {
        usuario: "Camila Ruth",
        contra: "CR013",
        nombre: "Formadora de hermanos",
        frase: "Ya pero sin tu flaco al que le gusto XD"
    },
    {
        usuario: "Sofia",
        contra: "SF014",
        nombre: "Sofia",
        frase: "Sera ir por unas jarras como en los viejos tiempos"
    },
    {
        usuario: "Alex",
        contra: "AE015",
        nombre: "ATORANTE",
        frase: "Pobre de ti que no vengas hdp, me aparesco con un buffer en tu casa"
    },
    {
        usuario: "Anghelo",
        contra: "AG016",
        nombre: "El pose de pavo",
        frase: "Sin resentimientos?. PSDTA: Ty Rony XD"
    },
    {
        usuario: "Milton",
        contra: "ML017",
        nombre: "Sr. Pikachu",
        frase: "No vendras por la humillada en el Sparking?XD"
    },
    {
        usuario: "Yared",
        contra: "PO018",
        nombre: "Poo",
        frase: "Unas jarritas? o tambien son pal pueblo?XD"
    },
    {
        usuario: "Yerson",
        contra: "YS019",
        nombre: "Chiricito",
        frase: "Esta pagina fue hecha gracias a tus enseñansas, no juzgues XD"
    },
    {
        usuario: "Gustavo",
        contra: "GV020",
        nombre: "Gus",
        frase: "Con o sin correa eres bien recibido. Pide permiso pa tomar, yo ya pedi XD"
    },
    {
        usuario: "Yeferson",
        contra: "YF021",
        nombre: "Totto",
        frase: "Esta vez date cuenta que le gustas a tu amiga ps XD"
    },
    {
        usuario: "Axel",
        contra: "AX022",
        nombre: "Bebita",
        frase: "Esa preciosa debe venir si o si *mua"
    },
    {
        usuario: "Jhosep",
        contra: "JH023",
        nombre: "Causita",
        frase: "Tambien te iras diciendo que hay clases? o nos mandaras por una SPRITE?XD"
    },
    {
        usuario: "Anabel",
        contra: "AB024",
        nombre: "Ana",
        frase: "No pegues a nadie si estas borracha po favo"
    },
    {
        usuario: "Sarai",
        contra: "SR025",
        nombre: "Sari",
        frase: "Sera que me puedes traer cuycito *guiño?"
    },
    {
        usuario: "Teresa",
        contra: "TR026",
        nombre: "Techi",
        frase: "No hay problema si no hay nadie de civil no?"
    },
    {
        usuario: "Nayeli",
        contra: "NY027",
        nombre: "Nayee",
        frase: "Ahora nos cuentas que hiciste en los cuartos de los de argentina"
    },
    {
        usuario: "Brayan",
        contra: "BY028",
        nombre: "Brayan",
        frase: "Iremos por unas jarritas ps"
    },
    {
        usuario: "Mia",
        contra: "MI029",
        nombre: "Blanca Nieves",
        frase: "Esta vez solo puedes traer a un enano XD"
    },
    {
        usuario: "Edu",
        contra: "EU030",
        nombre: "Boliviano",
        frase: "Escapate del trabajo ps, imagina que soy Adriana XD"
    },
    {
        usuario: "Gerardo",
        contra: "GR031",
        nombre: "Ñangon",
        frase: "Brindaremos ps"
    },
    {
        usuario: "Jharet",
        contra: "JT032",
        nombre: "White",
        frase: "Si jalas por jarras? o prefieres tu 3x?"
    },
    {
        usuario: "Felipe",
        contra: "FP033",
        nombre: "Chipi",
        frase: "Pides permiso pa unas jarras ps, o arrugas?"
    },
    {
        usuario: "Indira",
        contra: "ID034",
        nombre: "Profe Indira",
        frase: "Ahora si nos acepta unas jarritas profe?"
    }
];

function Login() {
    const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [invitado, setInvitado] = useState(null);
  const [showTarjeta, setShowTarjeta] = useState(false); // Estado para mostrar la tarjeta

  const handleSubmit = (event) => {
    event.preventDefault();

    const invitadoEncontrado = Invitados.find(
      (invitado) => invitado.usuario === username && invitado.contra === code
    );

    if (invitadoEncontrado) {
      setInvitado(invitadoEncontrado);
      setShowTarjeta(true); // Mostrar tarjeta cuando el invitado es encontrado
      setMensaje("");
    } else {
      setMensaje("No se encontró usuario o contraseña incorrecta.");
    }
  };

  if (showTarjeta && invitado) {
    return (
      <>
        <Tarjeta Name={invitado.nombre} Frase={invitado.frase} />
      </>
    );
  }

  return (
    <>
      <div className="form-container">
        <div className="login-container">
          <h2>Checa si estas invitado, SAYAYIN CTMR!!</h2>
          <form action="" onSubmit={handleSubmit}>
            <p>
              <label htmlFor="username">Username</label>
              <input
                className="input"
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </p>

            <p>
              <label htmlFor="code">Code verification</label>
              <input
                className="input"
                type="text"
                name="pas"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </p>

            <p>
              <input type="submit" className="btn btn-login" value="Log in" />
            </p>
          </form>
          <p>{mensaje}</p>
        </div>

        <div className="welcome-screen-container">
          <img src="./kamehouse.jpeg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Login;
