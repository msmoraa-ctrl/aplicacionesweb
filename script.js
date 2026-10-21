
let nombreEstudiante = "Estudiante";
let edad = 21;

console.log("Hola soy: " + nombreEstudiante +
            " mi edad es: " + edad);

// Suma tres numeros
let num1 = Number(prompt("Ingresa número 1"));

let num2 = Number(prompt("Ingresa número 2"));

let num3 = Number(prompt("Ingresa número 3"));

var suma = num1 + num2 + num3;

console.log("La suma es: " + suma);

// Capturando el control h por id
const resul = document.getElementById("resultado");

resul.textContent = "La suma es: " + suma;
