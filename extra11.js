let usuario = prompt("¿Quién está ahí?", "");

if (usuario == "David") {

    let contraseña = prompt("Contraseña?", "");

        if (contraseña == "dasix") {
            alert("Bienvenido!");
        } else if (contraseña == "" || contraseña == null) {
            alert("Cancelado.");
        } else {
        alert("Contraseña incorrecta");
        }

} else if (usuario == "" || usuario == null) {
    alert("Cancelado.");
} else {
    alert("No te conozco");
}