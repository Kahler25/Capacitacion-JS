// 1. Declará una variable llamada "miNombre" y asignale el nombre que quieras
// --- Pista: Usá "let".

// 2. Completá las siguientes funciones
function esPikachu(pokemon) {
    // Crea una función que reciba por parámetro un string llamado pokemon.
    // Si pokemon es igual a "Pikachu" (recordá respetar mayúsculas y minúsculas), la función debe retornar TRUE
    // Si no, que la función retorne FALSE.

}

function contieneCero(numeros){
    // Crea una función que reciba por parámetro un array de números enteros
    // Si la lista de números tiene al menos un cero, que la función retorne TRUE
    // Si no encontró ninguno, que la función retorne FALSE
}

function esMayorDeEdad(edad) {
    // Crea una función que reciba por parámetro un número entero llamado edad
    // Si la edad que recibe es mayor o igual de 18, que la función retorne la edad.
    // Si no, que la función retorne FALSE
}

function nombreFrase(nombre) {
    // Crea una función que reciba por parámetro un string llamado nombre
    // Debe retornar un string nuevo con el formato "¡Hola (nombre)! Bienvenido."

}

function numerosIguales(numero1, numero2)
{
    // Crea una función que reciba por parámetro dos números: numero1 y numero2
    // Debe retornar TRUE en caso de que sean iguales, de lo contrario, debe retornar FALSE.
}

function perimetroHexagonoRegular(lado) {
    // Crea una función que reciba por parámetro un número con la medida de uno de los lados de un hexágono.
    // La función debe retornar el perímetro del hexágono regular usando el lado.

}

function esPositivo(numero) {
    // Crea una función que reciba por parámetro un número.
    // La función debe retornar TRUE en caso de que el número sea positivo
    // En caso de que sea negativo, que retorne FALSE
    // Si el número es 0, que retorne el valor de número

}

function calificación(numero){
    // Crea una función donde reciba por parámetro un número entero.
    // La función debe verificar la calificación del alumno según el valor del número:
    // 0-2: "Muy insuficiente"
    // 3-5: "Insuficiente"
    // 6-7: "Suficiente"
    // 8-9: "Bien"
    // 10: "Sobresaliente"
    // Retornar el string correspondiente según la calificación
    // PISTA: Son varios condicionales.
}

function unCaracter(str){
    // Crear una función que reciba por parámetro un string llamado str
    // La función debe verificar que la longitud del texto sea de un solo caracter.
    // Si es de un solo caracter, retornará TRUE
    // Caso contrario, debe retornar un string nuevo diciendo "ERROR"

}



module.exports = {
    esPikachu,
    contieneCero,
    esMayorDeEdad,
    nombreFrase,
    numerosIguales,
    perimetroHexagonoRegular,
    esPositivo,
    calificación,
    unCaracter
}