function simularUsuario(id) {
    switch (id) {
        case 1:
        return "Job Daniel, fecha alta: 2021-09-16";
        case 5:
        return "Juan, fecha alta: 2021-05-01";
        case 6:
        return "Jose, fecha alta: 2021-01-01";
        case 14:
        return "Citlalli, fecha alta: 2021-03-15";
        case 600:
        return "Maria, fecha alta: 2021-03-11";
        default:
        return "Usuario no encontrado";
    }
}
  let salir = false; // variable para controlar si se desea salir del programa
    do {
    const idUsuario = prompt("Por favor, ingrese el ID del usuario:");
    if (idUsuario === null) {
        alert("Gracias por utilizar nuestra app");
      salir = true; // si se presiona cancelar, se sale del programa
    } else if (isNaN(idUsuario)) {
        alert("Error: el ID de usuario debe ser un número válido");
    } else {
        const informacionUsuario = simularUsuario(parseInt(idUsuario));
        if (informacionUsuario === "Usuario no encontrado") {
        alert("Usuario no registrado");
        } else {
        console.log(informacionUsuario);
        const deseaBuscarOtroUsuario = confirm("¿Desea buscar otro usuario?");
        if (!deseaBuscarOtroUsuario) {
          salir = true; // si no se desea buscar otro usuario, se sale del programa
        }
        }
    }
    } while (!salir);