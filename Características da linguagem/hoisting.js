/* hoisting sempre declara as variáveis, ele as empurra para cima
mas elas são definidas como undefined.*/


// hoisting de variável
function fn(){
    // retorna undefined
    console.log(text);
    var text = "Exemplo";
    console.log(text);
}

fn();

// Hoisting de função
executeiaqui();

function executeiaqui(){
    console.log("\nHoisting de função!")
}

/* Lembre-se que é uma boa prática declarar todas as variáveis 
e informações antes de usá-las.*/

// mais informações: https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting