// Variables en javascript //

let miVariable;  //la variable se ha declarado, pero aún no tiene valor//

let miNumero = 10;
let miTexto = "Hola, Mundo!";
const miConstante = "No cambia";

//tipos de datos: string, number, boolean//
//string: Secuencia de caracteristicas. Se define utilizando comillas simples o dobles//
let nombre1 = "Juan";

let nombre = "Juan";
let saludo = "Hola, " + nombre + "!";
console.log(saludo);

//Number: Número, ya sean enteros o decimales//
let edad1 = 25;
let precio = 19.990;

let numero1 = 10;
let numero2 = 5;
let suma = numero1 + numero2;
console.log("La suma es: " + suma);

//boolean; Representa un valor de verdad ('true' o 'false')//
let esMayorDeEdad1 = true;

let edad = 17;
let esMayorDeEdad = edad >= 18;
console.log("¿Es mayor de edad? " + esMayorDeEdad);


//consol.log//
console.log("¡Hola, mundo!");

let tuNombre = "Juan";
let tuEdad = 25;

console.log("Nombre:", nombre);
console.log("Edad:", edad);


//alert//
alert("¡Hola, mundo!");

let mensaje = "¡Hola, usuario!";
alert(mensaje);



//Concatenación de String con el operador +//
let nombre2 = "Juan";
let saludo1 = "Hola, " + nombre2 + "!";
console.log(saludo1);

let nombre3 = "Juan";
let edad2 = 25;
let presentacion = "Me llamo " + nombre3 + " y tengo " + edad2 + " años.";
console.log(presentacion);

//plantillas de cadenas//
let nombre4 = "Juan";
let edad3 = 25;
let presentacion1 = `Me llamo ${nombre4} y tengo ${edad3} años.`;
console.log(presentacion1); // 'join() métodos de array //

// Definición de una función
function saludar() {
    console.log("¡Hola, mundo!");
}

// Llamada a la función
saludar();

// Función personalizada para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Llamada a la función personalizada
let resultado = sumar(3, 5);
console.log("La suma es: " + resultado);

//sintaxis//
//declaracion de variable//
let miEdad = 25;
const PI = 3.14;

// punto y coma ;//
let x = 5;
let y = 10;

//Bloques de código// 
if (condicion) {
    // Código dentro del bloque if
} else {
    // Código dentro del bloque else
}

//comentarios//
// Esto es un comentario de una línea

/*
Esto es un comentario
de varias líneas
*/

//operadores//
let miResultado = 5 + 3;
if (edad === 18) {
    // Código si la edad es igual a 18
}

//funciones//
function sumar(a, b) {
    return a + b;
}

//cadenas de texto//
let nombreA = 'Juan';
let saludoA = `Hola, ${nombreA}!`;

//operaciones matematicas//
//suma + //
let resultadoSuma = 5 + 3; // resultadoSuma será 8

//resta - //
let resultadoResta = 7 - 2; // resultadoResta será 5

//multiplicación * //
let resultadoMultiplicacion = 4 * 6; // resultadoMultiplicacion será 24

//division / //
let resultadoDivision = 9 / 3; // resultadoDivision será 3

//moódulo % //
let resultadoModulo = 10 % 3; // resultadoModulo será 1

// incremento ++ //
let contador = 5;
contador++; // contador ahora es 6

//decremento -- //
let contador1 = 8;
contador--; // contador ahora es 7

//ejemplo//
let resultadoComplejo = (3 + 5) * (2 - 1) / 2; // resultadoComplejo será 8

// prompt //
// Solicitar al usuario que ingrese su nombre
let nombreUsuario = prompt("Por favor, ingresa tu nombre:");

// Mostrar un mensaje utilizando el nombre ingresado
alert("Hola, " + nombreUsuario + "! Bienvenido.");

// tipo de datos //
let edadTexto = prompt("Ingresa tu edad:");
let edadNumerica = parseInt(edadTexto);

//cancelación de prompt //
let respuesta = prompt("¿Te gusta programar?");

if (respuesta === null) {
    alert("Has cancelado el prompt.");
} else {
    alert("Tu respuesta fue: " + respuesta);
}

//validación de entrada //
let edadIngresada;

do {
    edadIngresada = prompt("Ingresa tu edad:");
} while (!edadIngresada || isNaN(edadIngresada));

alert("Tu edad es: " + edadIngresada);

//Concatenación de variables y strings //
let nombree = "Juan";
let edadd = 25;

// Concatenación utilizando el operador +
let mensajee = "Hola, mi nombre es " + nombree + " y tengo " + edadd + " años.";

// Concatenación con Template Literals
let mensajeeTemplate = `Hola, mi nombre es ${nombree} y tengo ${edadd} años.`;

// Mostrar el resultado
console.log(mensaje);
console.log(mensajeeTemplate);
 
//usando el operador//
let mensajes = "Hola, mi nombre es " + nombre + " y tengo " + edad + " años.";

//usando template literals (cadenas y plantillas)//
let mensajeTemplate = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;

//caracteres de escape //
let mensajeConComillas = "Ella dijo: \"Hola\".";

//mantener el codigo limpio//
let mensajeLargo = "Este es un mensaje largo que requiere concatenación. " +
                   "Puedes dividirlo en varias líneas para mayor claridad.";



//CamelCase //
let nombreUsuarioo = "JohnDoe";
let cantidadTotalProductos = 10;

//significado descriptivo //
// Mal
let xx = 10;

// Bien
let edadUsuario = 25;

//evitar abreviaturas confusas //
  // Mal
let est = "EST";

// Bien
let estado = "EST";


//consistencia//
// Mal - mezcla de CamelCase y guiones bajos
let nombre_usuario = "JohnDoe";
let cantidadTotalProductos1 = 10;

// Bien - consistencia con CamelCase
let nombreUsuario1 = "JohnDoe";
let cantidadTotalProductos2 = 10;

//prefijo para tipos de datos//
let strNombre = "JohnDoe";
let numCantidadTotalProductos = 10;

//evitar nombres genéricos//
// Mal
let dato = 5;

// Bien
let edadUsuario1 = 5;
