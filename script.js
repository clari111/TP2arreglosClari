
/*ejercicio 1*/

let frutas = ["frutilla", "banana", "mandarina"]

console.log (frutas)


frutas.push ("manzana");
console.log (frutas[frutas.length-1]);

frutas.unshift ("pera");
console.log (frutas[0]);

frutas.pop("manzana")
console.log (frutas)

/*ejercicio 2*/
let nombres = ["Clara", "Victoria", "Mia"]
console.log (nombres.length);

nombres.push ("Bauti");
console.log (nombres)
console.log(nombres.length);

/*ejercicio 3*/

let numeros = ["1", "2","3", "4"]

for (let numeros = 0; numeros < numeros.length; numeros++) {
   console.log = array[numeros];
    
}

/*4*/

let arregloNumeros = ['1', '2', '3', '4','5']
let suma = 0

for (let i = 0; i < arregloNumeros.length; i++) {
   suma += arregloNumeros[i];
   
}
console.log ('La suma es'+ suma)

/*5*/

let palabras = [];

let palabraUsuario = prompt ('Escribi 5 palabras')
palabras.push (palabraUsuario)

console.log (palabras)






