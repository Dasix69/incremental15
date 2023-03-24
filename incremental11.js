let nombre = prompt("Ingresa tu nombre:");

if(nombre == "David"){
    let apellido = prompt("Ingresa tu apellido:");
    if(apellido == "Montero"){
        let fechaNacimientoString = prompt("Ingresa tu fecha de nacimiento (formato: dd/mm/aaaa):");
        let fechaNacimiento = new Date(); // se define la variable con valor predeterminado
        
        if(fechaNacimientoString == "05/10/1992"){
            var cursosProgramacion = prompt("Ingresa la cantidad de cursos de programación que has realizado:");
            alert("Bienvenido!");
        } else if (fechaNacimientoString == "" || fechaNacimientoString == null) {
            alert("Cancelado.");
        } else {
            alert("No te conozco");
        }
        
        // se actualiza el valor de fechaNacimiento solo si se proporciona una entrada válida
        if (fechaNacimientoString) {
            fechaNacimiento = new Date(fechaNacimientoString);
        }
        
        // Verificar si la fecha de nacimiento es anterior a 2000
        if (fechaNacimiento.getFullYear() < 2000) {
            alert("¿Estás seguro que eres un programador Junior?");
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
console.log("Cursos de programación realizados:", cursosProgramacionActualizados);
