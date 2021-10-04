//https://developer.mozilla.org/pt-BR/docs/Glossary/First-class_Function

// Leia o artigo acima.

function isBigEnough(value) {
    return value >= 10;
  }

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough); //passei uma função para o filter, caso verdadeira, filtra os números.

console.log(filtered);
// filtered is [12, 130, 44]
 