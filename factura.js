
const TASA_IVA = 0.15;

// Variable que acumula el subtotal
let subtotalGeneral = 0;

// Capturar el evento del botón
document.getElementById("btnagregar")
    .addEventListener("click", agregarFila);

function agregarFila() {

    // Obtener datos de los inputs
    const producto = document.getElementById("producto").value.trim();
    const cantidad = Number(document.getElementById("cantidad").value);
    const precio = Number(document.getElementById("precio").value);

    // Validar datos
    if (
        producto === "" ||
        !Number.isInteger(cantidad) ||
        cantidad <= 0 ||
        !Number.isFinite(precio) ||
        precio <= 0
    ) {
        alert("Ingrese correctamente los datos del producto");
        return;
    }

    // Calcular subtotal del producto
    const subtotalProducto = cantidad * precio;

    // Crear nueva fila
    const filanueva = document.createElement("tr");

    // Crear las celdas de forma segura
    const datos = [
        producto,
        cantidad,
        precio.toFixed(2),
        subtotalProducto.toFixed(2)
    ];

    datos.forEach(dato => {
        const celda = document.createElement("td");
        celda.textContent = dato;
        filanueva.appendChild(celda);
    });

    // Colocar la fila en la tabla
    document.getElementById("detalleFac")
        .appendChild(filanueva);

    // Acumular subtotal
    subtotalGeneral += subtotalProducto;

    // Actualizar totales
    calcularTotal();

    // Limpiar los inputs
    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
}

function calcularTotal() {

    // Calcular IVA
    const iva = subtotalGeneral * TASA_IVA;

    // Calcular total
    const total = subtotalGeneral + iva;

    // Mostrar los resultados
    document.getElementById("subtotal").textContent =
        "$" + subtotalGeneral.toFixed(2);

    document.getElementById("iva").textContent =
        "$" + iva.toFixed(2);

    document.getElementById("total").textContent =
        "$" + total.toFixed(2);
}
