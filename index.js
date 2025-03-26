function eje1() {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    for (let i = 0; i < meses.length; i++) {
        console.log(meses[i]);
    }
}

function eje2(){
const valores = [true, 5, false, "hola", "adios", 2];

if (valores[4].length > valores[3].length) {
    console.log("La palabra " + valores[4] + " es mayor que " + valores[3]);
    console.log(valores[0])
} else {
    console.log("La palabra " + valores[3] + " es mayor que " + valores[4]); 
    console.log(valores[2])
}
if (valores[1] > valores[5]) {
    console.log("El valor " + valores[1] + " es mayor que " + valores[5]);
    console.log(valores[0])

}else{
    console.log("El valor " + valores[5] + " es mayor que " + valores[1]);
    console.log(valores[2])
}}

function eje3(){
    var numero1 = 5;
    var numero2 = 8;
    if(numero1 > numero2) {
        console.log("numero1 no es mayor que numero2");
        }
    if(numero2 > 0) {
        console.log("numero2 es positivo");
        }
    if(numero1 < 0) {
        console.log("numero1 es negativo o distinto de cero");
        }
    if(numero1 + 1 < numero2) {
        console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
    }
    }

function eje4(){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E', 'T'];
    var dni = parseInt(prompt("Introduce tu número de DNI"));
    var letra = prompt("Introduce la letra de tu DNI").toUpperCase();
    if (dni > 0 && dni < 99999999) {
        if (letra === letras[dni % 23]) {
            console.log("El número y la letra del DNI son correctos");
        } else {
            console.log("La letra no es correcta");
        } 
    } else {
        
        console.log("El número proporcionado no es válido");
    }
    }

function eje5(){
//El factorial de un número entero n es una operación matemática que consiste en multiplicar
//todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a:
//5! = 5 x 4 x 3 x 2 x 1 = 120
//Utilizando bucles, se pide realizar una función que calcule el factorial de un número entero.
//Para comprobarlo, calcular el factorial de 5 o de 15.
var numero = parseInt(prompt("Introduce un número"));
function factorial(numero) {
    var resultado = 1;
    for (var i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(factorial(numero));

}
function eje6(){
    //Escribir el código de una función a la que se pasa como parámetro un número entero y
    //devuelve como resultado una cadena de texto que indica si el número es par o impar.
    //Mostrar por pantalla el resultado devuelto por la función.
    var numero = parseInt(prompt("Introduce un número"));
    function parImpar(numero) {
        if(numero % 2 == 0) {
            return "El número es par";
        } else {
            return "El número es impar";
        }
    }
    console.log(parImpar(numero));
}

function eje7(){
//Definir una función que muestre información sobre una cadena de texto que se le pasa
//como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena
//está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
var cadena = prompt("Introduce una cadena de texto");
function informacion(cadena) {
    if(cadena === cadena.toUpperCase()) {
        return "La cadena está formada sólo por mayúsculas";
    } else if(cadena === cadena.toLowerCase()) {
        return "La cadena está formada sólo por minúsculas";
    } else {
        return "La cadena está formada por mayúsculas y minúsculas";
    }
}
console.log(informacion(cadena));

}

function eje8(){
//Definir una función que determine si la cadena de texto que se le pasa como parámetro es
//un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
//Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".
var cadena = prompt("Introduce una cadena de texto").toLowerCase();
cadena = cadena.replace(/ /g, "");
function palindromo(cadena) {
    var cadenaInvertida = cadena.split("").reverse().join("");
    if(cadena === cadenaInvertida) {
        return "Es un palíndromo";
    } else {
        return "No es un palíndromo";
    }
}
console.log(palindromo(cadena));

}

function eje9(){
//Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:
//Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que
//muestra por pantalla las propiedades de la persona.
//Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el
//método registrar().
//Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el
//método asignar().
//Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento
//de la jerarquía.
function Persona(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
}
Persona.prototype.obtDetalles = function() {
    console.log("Nombre: " + this.nombre + ", Edad: " + this.edad + ", Género: " + this.genero);
}
function Estudiante(nombre, edad, genero, curso, grupo) {
    Persona.call(this, nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
}
Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.registrar = function() {
    console.log("Registrado en el curso " + this.curso + " y en el grupo " + this.grupo);

}
function Profesor(nombre, edad, genero, asignatura, nivel) {
    Persona.call(this, nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
}
Profesor.prototype = Object.create(Persona.prototype);
Profesor.prototype.asignar = function() {
    console.log("Asignatura " + this.asignatura + " y nivel " + this.nivel);
}
var persona = new Persona("Juan", 25, "Masculino");
var estudiante = new Estudiante("Ana", 20, "Femenino", "2º", "A");
var profesor = new Profesor("Luis", 45, "Masculino", "Matemáticas", "Avanzado");
persona.obtDetalles();
estudiante.obtDetalles();
estudiante.registrar();
profesor.obtDetalles();
profesor.asignar();

}


function eje10(){
//Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función
//Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los
//lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el
//número de apariciones de dicha suma, repitiendo 36.000 veces esta operación.
var resultados = [];
for (var i = 0; i < 36000; i++) {
    var dado1 = Math.floor(Math.random() * 6) + 1;
    var dado2 = Math.floor(Math.random() * 6) + 1;
    var suma = dado1 + dado2;
    if(resultados[suma] === undefined) {
        resultados[suma] = 0;
    }
    resultados[suma]++;


}
for (var i = 2; i < resultados.length; i++) {
    console.log("La suma " + i + " ha salido " + resultados[i] + " veces");
}
}
