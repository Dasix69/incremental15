// Creamos un array vacío donde se almacenarán los amigos
let amigos = [];

// Definimos una función flecha para agregar amigos al array
const agregarAmigo = () => {
  // Pedimos al usuario que introduzca el nombre de su amigo
  let nombreAmigo = prompt("Introduce el nombre de tu amigo:");

  // Agregamos el nombre del amigo al array
  amigos.push(nombreAmigo);

  // Mostramos en consola el nombre del amigo que acabamos de agregar
  console.log(`Se ha agregado a ${nombreAmigo} a la lista de amigos.`);

  // Mostramos en consola la lista de amigos actualizada
  console.log("Amigos:", amigos);
};

// Definimos una función flecha para ordenar alfabéticamente los amigos
const ordenarAmigos = () => {
  // Ordenamos el array alfabéticamente
  amigos.sort();

  // Mostramos en consola la lista de amigos ordenada alfabéticamente
  console.log("Amigos ordenados alfabéticamente:", amigos);
};

  // Pedimos al usuario que introduzca la cantidad de amigos que desea agregar
  let cantidadAmigos = prompt("¿Cuántos amigos deseas agregar?");

// Agregamos la cantidad de amigos especificada por el usuario
for (let i = 0; i < cantidadAmigos; i++) {
agregarAmigo();
}

// Ordenamos alfabéticamente la lista de amigos
ordenarAmigos();


