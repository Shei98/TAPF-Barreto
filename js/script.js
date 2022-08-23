const campeones = [
  (equipo1 = {
    nombre: "Locos por el fútbol",
    torneo: "sabado",
  }),
  (equipo2 = {
    nombre: "Club Temperley",
    torneo: "domingo",
  }),
  (equipo3 = {
    nombre: "Club Libertad",
    torneo: "sabado",
  }),
  (equipo4 = {
    nombre: "Club 9 de Julio",
    torneo: "domingo",
  }),
  (equipo5 = {
    nombre: "Regatas",
    torneo: "sabado",
  }),
  (equipo6 = {
    nombre: "Salto Grande",
    torneo: "domingo",
  }),
  (equipo7 = {
    nombre: "Salud Pública",
    torneo: "sabado",
  }),
];

campeones.forEach((element) => {
  console.log(element.nombre);
});

let edadPermitida = 18;
let edadParaCompetir = parseInt(prompt("Ingresa tu edad"));

// Operador ternario:
edadPermitida > 17 ? alert("Podes ingresar") : alert("No podes ingresar");

let nombre = "Fulanito";
let edad = 20;
let calle = "Av sarasa 231";
let apellido = "Messi";

const jugador1 = {
  nombre: "Fulanito",
  edad: 20,
  calle: "Av sarasa 231",
};
const jugador2 = {
  nombre: "Menganito",
  edad: 18,
  calle: "Wallabee 42",
};
console.log(jugador1);
alert("El jugador" + jugador1 + "es apto para jugar el torneo");

function Jugador(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}
const jugador3 = new Jugador("Domingo", "Sarmiento", 24);
const jugador4 = new Jugador("Juan", "Riquelme", 22);
const jugador5 = new Jugador("Julian", "Alvarez", 23);
console.log(jugador3);
jugador4.edad = 22;
console.log(jugador4.edad);

// Operador logico OR:

console.log(jugador3 || "El jugador no existe");

let nombreJugador = prompt("Ingresa el nombre de tu jugador");
let apellidoJugador = prompt("Ingresa el apellido de tu jugador");
let edadJugador = prompt("Ingresa la edad de tu jugador");
const jugadorUsuario = new Jugador(nombreJugador, apellidoJugador, edadJugador);
console.log(jugadorUsuario);

const resultado = campeones.filter((el) => el.torneo.includes("sabado"));
const resultado2 = campeones.filter((el) => el.torneo.includes("domingo"));

console.log(resultado);

let nodo = document.head;
console.log(nodo.nodeType);

let primerNodo = document.documentElement.firstChild;

// Operador logico and
primerNodo.length === 8 && console.log("El primer nodo es un comentario");

let elementosTag = document.getElementsByTagName("p");
console.log(elementosTag);
let contenedor = document.querySelector("#containerPrincipal");
contenedor.innerHTML += "<h1> Probando innerHTML </h1>";

let lista = document.querySelector("#listaEquipos");
let equipos = [
  "Locos por el fútbol",
  "Libertad FC",
  "Salto Grande",
  "9 de Julio",
  "Velez Sarsfield",
];

// spread de arrays:
console.log(...equipos);
for (const equipo of equipos) {
  let li = document.createElement("li");
  li.innerText = equipo;
  lista.appendChild(li);
}
// agregué eventos
const titulo = document.querySelector(title);

const saludarGenerico = () => {
  alert("Bienvenido al torneo");
};

titulo.onclick = saludarGenerico;

// Storage y Json
localStorage.setItem("nombreUsuario", "Fulanito Pereira");
let nombreUsuario = document.getElementById("emailAddress");
let btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", () => {
  localStorage.setItem("emailUsuario", nombreUsuario.value);
});
localStorage.setItem("edad", 24);
console.log(localStorage.getItem("edad"));
console.log(localStorage.length);
for (let i = 0; i < localStorage.length; i++) {
  let clave = localStorage.key[i];
  let valor = localStorage.getItem(clave);
  console.log("Clave: " + clave);
  console.log("Valor: " + valor);
}

let shei = {
  user: "Shei",
  pas: 4567,
};
sessionStorage.setItem("usuario", JSON.stringify(shei));
let usuarioRecuperado = JSON.parse(sessionStorage.getItem("usuario"));
console.log(usuarioRecuperado);

// sweet alert
const btnSwal = document.getElementById("botonSwal");
btnSwal.onclick = () => {
  Swal.fire({
    title: "Hola!",
    text: "Te damos la bienvenida al torneo a Puro Fútbol",
    icon: "info",
    iconColor: "#FFFF00",
  });
};
// Resolve & Reject
const eventoFuturo = (res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      res ? resolve("Promesa resuelta") : reject("Promesa rechazada");
    }, 2000);
  });
};
console.log(eventoFuturo(true));
console.log(eventoFuturo(false));

// Then & catch
eventoFuturo(true).then((response) => {
  console.log(response);
});
eventoFuturo(false)
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Fin del proceso");
  })

  // FETCH
  .then((json) => console.log(json));

let URL = "https://api-football-standings.azharimm.site/leagues/arg.1";

fetch(URL, {
  method: "GET",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch(URL);

function filtrarData(array) {
  let data = selectData.value;
  if (!id) {
    return array;
  } else {
    return array.filter((item) => item.data == id);
  }
}

async function bringData() {
  const response = await fetch(URL);
  const data = await response.json();
  createHTML(dataFilter(data));
}
searchBtn.addEventListener("click", () => {
  bringData();
});
