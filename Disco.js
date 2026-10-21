
const formulario = document.getElementById("formulario");
const campoEdad = document.getElementById("edad");
const campoMembresia = document.getElementById("membresia");

// Función para asignar membresía según edad
function obtenerMembresia(edad) {

    if (edad < 18) {
        return "Sin membresía";
    } else if (edad <= 25) {
        return "Estudiante";
    } else if (edad <= 35) {
        return "Oficinista";
    } else if (edad <= 45) {
        return "Adulto";
    } else {
        return "VIP";
    }
}

// Actualizar membresía al ingresar la edad
campoEdad.addEventListener("input", function() {

    let edad = Number(campoEdad.value);

    if (campoEdad.value === "" ||
        !Number.isInteger(edad) ||
        edad < 1 || edad > 120) {

        campoMembresia.value = "";
        return;
    }

    campoMembresia.value = obtenerMembresia(edad);
});

// Validar formulario
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let edad = Number(campoEdad.value);
    let ciudad = document.getElementById("ciudad").value.trim();
    let sexo = document.getElementById("sexo").value;

    let membresia = "";
    let horario = "";
    let mensaje = "";

    // Validar campos
    if (nombre === "" || ciudad === "" || sexo === "" ||
        campoEdad.value === "" ||
        !Number.isInteger(edad) || edad < 1 || edad > 120) {

        alert("Por favor, complete correctamente todos los campos");
        return;
    }

    // Asignación automática de membresía y horario
    membresia = obtenerMembresia(edad);

    if (edad < 18) {

        horario = "Sin acceso";
        mensaje = "Acceso denegado. Regrese a su casa.";

    } else if (edad >= 18 && edad <= 25) {

        horario = "22:00";
        mensaje = "Bienvenido a Infinity Disco";

    } else if (edad >= 26 && edad <= 35) {

        horario = "00:00";
        mensaje = "Bienvenido a Infinity Disco";

    } else if (edad >= 36 && edad <= 45) {

        horario = "02:00";
        mensaje = "Bienvenido a Infinity Disco";

    } else {

        horario = "Horario VIP";
        mensaje = "Bienvenido a Infinity Disco";
    }

    // Mostrar membresía en el formulario
    campoMembresia.value = membresia;

    // Mostrar alert en el navegador
    alert("INFINITY DISCO" +
          "\nNombre: " + nombre +
          "\nEdad: " + edad +
          "\nCiudad: " + ciudad +
          "\nSexo: " + sexo +
          "\nMembresía: " + membresia +
          "\nHorario: " + horario +
          "\n" + mensaje);

    // Mostrar resultado en HTML
    const resul = document.getElementById("resultado");

    if (edad < 18) {

        resul.className = "alert alert-danger mt-3";
        resul.textContent = mensaje;

    } else {

        resul.className = "alert alert-success mt-3";
        resul.textContent = "Bienvenido " + nombre +
                            " | Membresía: " + membresia +
                            " | Horario: " + horario;
    }

});
