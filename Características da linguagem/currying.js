// currying serve para evitar isso:
/*
function soma(a, b) {
    return a+b;
}

soma(2, 2)
soma(2, 6)
soma(2, 5)
soma(2, 3)

Perceba que soma recebe como parametro o 2 repetidamente.
*/

// aplicando currying

function soma(a) {
    return function(b){
        return a + b;
    }
}

const somacom2 = soma(2);

console.log( somacom2(4) );
console.log( somacom2(6) );
console.log( somacom2(5) );


// mais em: https://rodrigorgs.github.io/aulas/mata56/aula14-currying