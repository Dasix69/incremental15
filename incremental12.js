let totalLikes = 0;
let fotosMenosDe10 = 0;
let cantidadFotos = null;

while (cantidadFotos === null) {
    cantidadFotos = parseInt(prompt("Ingrese la cantidad de fotos"));
    if (isNaN(cantidadFotos)) {
    console.error("Caracteres no válidos");
    cantidadFotos = null;
    }
}

for (let i = 1; i <= cantidadFotos; i++) {
    let likes = null;
    while (likes === null) {
    likes = parseInt(prompt("Ingrese la cantidad de likes en la foto " + i));
    if (isNaN(likes)) {
        console.error("Caracteres no válidos");
        likes = null;
    }
    }

    totalLikes += likes;
    if (likes < 10) {
    fotosMenosDe10++;
    }
}

console.log("La cantidad total de likes es: " + totalLikes);
console.log("Hay " + fotosMenosDe10 + " fotos con menos de 10 likes");

if (cantidadFotos === null) {
    console.log("Gracias por utilizar nuestra app");
}