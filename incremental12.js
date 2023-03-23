let totalLikes = 0;
let fotosMenosDe10 = 0;

let cantidadFotos = null;
while (cantidadFotos === null) {
    try {
    cantidadFotos = parseInt(prompt("Ingrese la cantidad de fotos"));
    if (isNaN(cantidadFotos)) {
    throw new Error("Caracteres no válidos");
    }
    } catch (e) {
    console.error(e.message);
    cantidadFotos = null;
    }
}

for (let i = 1; i <= cantidadFotos; i++) {
    let likes = null;
    while (likes === null) {
    try {
        likes = parseInt(prompt("Ingrese la cantidad de likes en la foto " + i));
        if (isNaN(likes)) {
        throw new Error("Caracteres no válidos");
        }
    } catch (e) {
        console.error(e.message);
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