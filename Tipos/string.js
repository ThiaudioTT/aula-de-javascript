// Retorna o tamanho de uma string
const textSize = "Texto".length;
console.log(`Quantidade de letras: ${textSize}`);
// Quantidade de letras: 5



// Retorna um [array] quebrando a string por um delimitador
const splittedText = "Texto".split("x");
console.log("\nArray com as posiçòes separadas pelo delimitador: ", splittedText);
// Array com as posiçòes separadas pelo delimitador:  [ 'Te', 'to' ]



// Busca por um valor e substitui por outro
const replacedText = "Texto".replace("Texto", "Whatsapp");
console.log("\nSubstituição de valor:", replacedText);
// Substituição de valor: Whatsapp



// .slice -> exclui indices da string
//.slice(inicio, fim)      indice negativo significa começar da esquerda, como no plano cartesiano.
const lastChars = "Texto".slice(-2);
console.log("\nÚltima letra de uma string:", lastChars);
// Última letra de uma string: to


const corte = "Texto".slice(2, -2);
console.log("\nString cortada:", corte);
// String cortada: x

const secondToEnd = "Texto".slice(1);
console.log("\nValor: ", secondToEnd);
// Valor: exto


// mais sobre slice: 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice



// Retorna N caracteres a partir de uma posição
//.substr(inicio, comprimento)
const twoCharsBeforeFirstPos = "Texto".substr(0, 2);
console.log("\nAs duas primeiras letras são:", twoCharsBeforeFirstPos);
//As duas primeiras letras são: Te


// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr
