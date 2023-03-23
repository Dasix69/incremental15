// Pedir datos por prompt
let nombre = prompt("Ingresa tu nombre:");

if(nombre == "David"){
    let apellido = prompt("Ingresa tu apellido:");
    if(apellido == "Montero"){
        let fechaNacimiento = prompt("Ingresa tu fecha de nacimiento (formato: dd/mm/aaaa):");
        
            if(fechaNacimiento == "05/10/1992" ||fechaNacimiento == "05/10/2005"){
                var cursosProgramacion = prompt("Ingresa la cantidad de cursos de programación que has realizado:");
                alert("Bienvenido!");
            } else if (fechaNacimiento == "" || fechaNacimiento == null) {
                alert("Cancelado.");
            } else {
                alert("No te conozco");
            }
    }else if (apellido == "" || apellido == null) {
        alert("Cancelado.");
    } else {
        alert("No te conozco");
    }
} else if (nombre == "" || nombre == null) {
    alert("Cancelado.");
} else {
    alert("No te conozco");
}
// Incrementar en 1 los cursos de programación realizados
let cursosProgramacionActualizados = parseInt(cursosProgramacion) + 1;

// Mostrar los cursos de programación actualizados por consola
console.log("Cursos de programación realizados:", cursosProgramacionActualizados)

// Convertir la fecha de nacimiento a objeto Date
    fechaNacimiento = new Date(fechaNacimiento);

// Verificar si la fecha de nacimiento es anterior a 2000
if (fechaNacimiento.getFullYear() < 2000) {
    alert("¿Estas seguro que eres un programador Junior?");
}
// Fecha del dia
alert (new Date())



