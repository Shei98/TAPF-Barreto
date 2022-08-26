const campeones = [
  {
    nombre: "Locos por el fútbol",
    torneo: "sabado",
  },
  {
    nombre: "Club Temperley",
    torneo: "domingo",
  },
  {
    nombre: "Club Libertad",
    torneo: "sabado",
  },
  {
    nombre: "Club 9 de Julio",
    torneo: "domingo",
  },
  {
    nombre: "Regatas",
    torneo: "sabado",
  },
  {
    nombre: "Salto Grande",
    torneo: "domingo",
  },
  {
    nombre: "Salud Pública",
    torneo: "sabado",
  },
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

// edadPermitida >= 18 ? alert("Podes ingresar") : alert("No podes ingresar");

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
console.log(jugador3 || "El jugador no existe");

const resultado = campeones.filter((el) => el.torneo.includes("sabado"));
const resultado2 = campeones.filter((el) => el.torneo.includes("domingo"));

console.log(resultado);

let nodo = document.head;
console.log(nodo.nodeType);

let primerNodo = document.documentElement.firstChild;

primerNodo.length === 8 && console.log("El primer nodo es un comentario");

let elementosTag = document.getElementsByTagName("p");
console.log(elementosTag);
let contenedor = document.querySelector("#containerPrincipal");

let lista = document.querySelector("#listaEquipos");
let equipos = [
  "Locos por el fútbol",
  "Libertad FC",
  "Salto Grande",
  "9 de Julio",
  "Velez Sarsfield",
];

const saludarGenerico = () => {
  alert("Bienvenido al torneo");
};

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

window.onload = () => {
  const btnSwal = document.getElementById("botonSwal");
  btnSwal.onclick = () => {
    Swal.fire({
      title: "Hola!",
      text: "Te damos la bienvenida al Torneo a Puro Fútbol",
      icon: "info",
      iconColor: "white",
    });
  };
};
const eventoFuturo = (res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      res ? resolve("Promesa resuelta") : reject("Promesa rechazada");
    }, 2000);
  });
};
console.log(eventoFuturo(true));
console.log(eventoFuturo(false));

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

  .then((json) => console.log(json));

let URL = "https://api-football-standings.azharimm.site/leagues/arg.1";

fetch(URL)
  .then((response) => response.json())
  .then((data) => console.log("GET REQUEST", data));

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
