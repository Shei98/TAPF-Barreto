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
if (edadParaCompetir >= edadPermitida) {
  alert("Podes ingresar");
} else {
  alert("No podes ingresar");
}
alert("Fin del proceso");

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

if (primerNodo.nodeType == 8) {
  console.log(
    "El primero nodo es un comentario ysu nodeType es" + primerNodo.nodeType
  );
} else {
  console.log("El primero nodo NO es un comentario");
}
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
for (const equipo of equipos) {
  let li = document.createElement("li");
  li.innerText = equipo;
  lista.appendChild(li);
}
// agregué eventos 
const titulo = document.querySelector(title);

function saludarGenerico() {
  alert("Bienvenido al torneo");
}

const saludarGenerico = () => {
  alert("Bienvenido al torneo");
};

titulo.onclick = saludarGenerico;
