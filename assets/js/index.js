// CLASE PASADA

//Separador numerico: let numero = 100_000_000_000

//Operador de fusion nula: ??

//operadores logicos de asignacion: ||=  //  &&=  // ??= 

//operador de encadenamiento opcional

// let objeto = {
//     saludo: "hola",
//     // saludo2: {
//     //     otroSaludo: "chau"
//     // },
// }


// console.log(objeto.saludo2?.otroSaludo)


//----------------------------------------------------------
// Clase 13 sesion 12
//----------------------------------------------------------

//Symbols Tipo de datos

// let simboloUno = Symbol("sDos")
// let simboloDos = Symbol("sDos")

// console.log(simboloUno)
// console.log(simboloDos)

// console.log(simboloUno === simboloDos) //false..

// let usuario = {
//     id:1234,
//     nombre: "Armando",
//     ciudad: "Santiago",
//     edad: 30
// }

// const apelli = "apellido"
// usuario[apelli] = "Marin"

// const idSimbolo = Symbol("id")
// usuario[idSimbolo] = 987654

// console.log(usuario)
// console.log(Object.getOwnPropertyNames(usuario))
// console.log(Object.getOwnPropertySymbols(usuario))

// const green = "verde"
// const yellow = "amarillo"
// const red = "rojo"
// const apple = "rojo"

const green = Symbol("verde")
const yellow = Symbol("amarillo")
const red = Symbol("rojo")
const apple = Symbol("rojo")

// console.log(red === apple)

function semasforo(color) {
    switch (color) {
        case red:
            return "Frenaaaaaaa!!"
            break;
        case yellow:
            return "cuidado"
            break;
        case green:
            return "avanza"
            break;
        default:
            return "Eso no es un color"
            break;
    }
}

console.log(semasforo(red))
console.log(semasforo(yellow))
console.log(semasforo(green))
console.log(semasforo(apple))