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

// const green = Symbol("verde")
// const yellow = Symbol("amarillo")
// const red = Symbol("rojo")
// const apple = Symbol("rojo")

// // console.log(red === apple)

// function semasforo(color) {
//     switch (color) {
//         case red:
//             return "Frenaaaaaaa!!"
//             break;
//         case yellow:
//             return "cuidado"
//             break;
//         case green:
//             return "avanza"
//             break;
//         default:
//             return "Eso no es un color"
//             break;
//     }
// }

// console.log(semasforo(red))
// console.log(semasforo(yellow))
// console.log(semasforo(green))
// console.log(semasforo(apple))


// Ejercicio 1: Propiedades privadas con Symbol
// Consigna:

// Crea un objeto auto que tenga las propiedades marca, modelo y una propiedad privada llamada númeroDeSerie usando un Symbol. Luego, escribe un código que imprima solo la marca y el modelo del auto, sin revelar el número de serie. Finalmente, muestra cómo acceder al número de serie utilizando el Symbol.

// const numeroDeSerie = Symbol('númeroDeSerie');

// const auto = {
//     marca: "Renault",
//     modelo: "Clio",
//     [numeroDeSerie]: "A125B14"
// }

// // for (const key in auto) {
// //     console.log(key)
// // }

// // console.log(`La Marca es ${auto.marca} y el modelo es: ${auto.modelo}`)
// console.log(`Número de serie es: ${auto[numeroDeSerie]}`)



// Ejercicio 2: Evitar colisiones de nombres de propiedades con Symbol
// Consigna:

// Imagina que tienes dos desarrolladores trabajando en un proyecto, y ambos deben agregar propiedades al mismo objeto usuario. Cada desarrollador crea un módulo que añade una propiedad a este objeto. Ambos desarrolladores deciden usar el mismo nombre de propiedad en sus módulos, pero para evitar colisiones (conflictos de nombres) entre las propiedades, usan Symbol para hacer que sus propiedades sean únicas, incluso si tienen el mismo nombre.

// Tu tarea es:

// Crear dos Symbol, uno para cada módulo.
// Crear un objeto usuario que contenga una propiedad para cada Symbol.
// Mostrar cómo acceder a las propiedades agregadas por cada módulo.
// Verificar que las propiedades son únicas y no colisionan.

// un programador mod 1 -->
// const simboloModuloUno = Symbol('propiedadModuloUno');

// const usuario = {
//     nombre: "Ghiselle",
//     [simboloModuloUno]: "valor de Módulo 1"
// }

// // un programador mod 2 -->
// const simboloModuloDos = Symbol('propiedadModuloDos');
// usuario[simboloModuloDos] = "valor de Módulo 1"

// for (const key in usuario) {
//     console.log(key)
// }

// console.log(Object.getOwnPropertySymbols(usuario)); 


