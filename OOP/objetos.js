// definindo objetos:

/* sintaxe:
var nomeDoObjeto = {
  nomeMembro1: valorMembro1,
  nomeMembro2: valorMembro2,
  nomeMembro3: valorMembro3
};

dá para colocar funções, strings e outros dentro de um único objeto. Dá para colocar quase tudo. Até mesmo outros objetos. */


//Objeto vazio:
var pessoa = {};
console.log(pessoa);
// saída: {}



// <----------> Atribuindo valores ao objeto: <---------->
var pessoa = {
    nome: ["Bob", "Smith"],
    idade: 32,
    sexo: "masculino",
    interesses: ["música", "esquiar"],

    //colocando uma função:
    bio: function () {
        alert(this.nome[0] + " " + this.nome[1] + " tem " + this.idade)
    },
    saudacao: function () {
        alert("Oi! Eu sou " + this.nome[0] + ".");
    }
};

/* Nota:
Esse tipo de objeto ^ é chamado de objeto literal.

É muito comum criar um objeto usando um objeto literal quando você deseja transferir uma série de itens de dados relacionados 
estruturados de alguma maneira, por exemplo, enviando uma solicitação para o servidor para ser colocado em um banco de dados. 
Enviar um único objeto é muito mais eficiente do que enviar vários itens individualmente, e é mais fácil trabalhar com um array, 
quando você deseja identificar itens individuais pelo nome.


Importante:
O valor de um membro do objeto pode ser praticamente qualquer coisa. Em nosso objeto pessoa, temos uma string, um número, 
dois arrays e duas functions. Os primeiros quatro são data items (dados) e são referenciados como **propriedades do objeto**. 
Enquanto os dois últimos ítens são funções que permitem que o objeto faça algo com esses dados. São chamados de **métodos** do objeto.

propriedades do objeto -> Dados, data items.
métodos do objeto -> Funções, arrays.
*/


// <----------> Acessando valores: <---------->

/* Esteja ciente de namespace e encapsulamento:

namespace.encapsulamento */

console.log(pessoa.nome[0]); //aparecerá bob


/* <----------> Acessando valores com a notação de colchetes: <---------->

Também há como pegar valores com a notação de colchetes: 
*/
const pessoa2 = {
    nome: {primeiro: "Whatsapp", segundo: "da Silva"},
    idade: 42
};
console.log(

pessoa2["idade"],
pessoa2["nome"]["primeiro"] 
// mesmo que:
//pessoa2.nome.primeiro
);
// Saída: 42 'Whatsapp'


/* *** Não há vantagens em usar essa notação ao invés da outra, mas ela pode ser útil para um input de usuário.

var myDataName = inputvalor1;
var myDataValue = inputvalor2;

pessoa[myDataName] = myDataValue;
*/

//exemplo do comentário acima:

var myDataName = 'altura';
var myDataValue = '1.75m';
pessoa[myDataName] = myDataValue;
// é o mesmo que
//pessoa["altura"] = "1.75"

console.log(pessoa.altura);
// saída: 1.75m


// outro exemplo do colchetes:
function pegarprop(namespace ,prop){
    return namespace[prop]
}

console.log(
    pegarprop(pessoa, "nome")
);
// saída:
// [ 'Bob', 'Smith' ]



/* Veja mais aqui: 
https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Basics#setando_membros_do_objeto
*/


// <-------> alterando valores: <------->

pessoa.nome = {
    primeiro: "Victor",
    ultimo: "Vieira"
};

console.log(pessoa.nome.primeiro);

console.log(pessoa.nome); // {primeiro: "Victor", ultimo: "Vieira"}
// A partir daqui pra baixo, não será mais pessoa.nome[0] e a resposta para isso é autoexplicativa.




/*  <-------> Criando novos valores <------->
namespace.novo = novo valor
*/
pessoa.olhos = "castanho";
pessoa.despedida = function(){alert("Adeus a todos! Meu nome é " + pessoa.nome.primeiro + "!")}; //execute a função no console

console.log(pessoa);


/* Usando o "this"

A palavra-chave this se refere ao objeto atual em que o código está sendo escrito — nesse caso o this se refere a pessoa.
o this é muito útil — sempre lhe assegurará que os valores corretos estão sendo usados quando o contexto de um mebro muda.
Veja mais:
https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Basics#o_que_%C3%A9_o_this


Leia https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Basics#voc%C3%AA_vem_usando_objetos_o_tempo_todo.

*/ 

// <-------> Deletando uma propriedade <------->

delete pessoa.nome;