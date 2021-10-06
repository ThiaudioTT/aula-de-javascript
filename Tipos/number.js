const myNumber = 12.4032;

// Transformar número para string
const numberAsString = myNumber.toString();
console.log("Tipo do número transformado: " + typeof numberAsString);

// Retorna o número com X casas depois do ponto
const fixedTwoDecimals = myNumber.toFixed(2);
console.log("\nNúmero com duas casas decimais:", fixedTwoDecimals);

// Transforma uma string em float
console.log("\nString parseada para float: ", parseFloat("13.22"));

// Transforma uma string em int
console.log("\nString parseada para int:", parseInt("13.20"));


/* NOTA:

Inteiros e Floats são condirados "numbers". A diferença entre int e float, é que float possui o ponto.
*/

let float = parseFloat(myNumber);
console.log(float, typeof(float));
//Saída: 12.4032 'number'


let inteiro = parseInt(myNumber);
console.log(inteiro, typeof(inteiro));
//Saída: 12 'number'
