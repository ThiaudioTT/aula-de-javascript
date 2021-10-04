// Comentário
/*Grande comentário */

/* Dica: Você pode usar o F12 (Go to definition) para um melhor entendimento
da função no VScode */



var nome = "Thiago";
var idade = 17;
alert("Bem vindo " + nome + "\nVocê tem " + idade + " anos!");


var frase = "Japão é o melhor time do mundo!"

// Log no console, veja o console! Ele é muito importante. Como: Source, log e outros.
console.log(5+5);
console.log(nome + idade);

//----- Editando Textos

//usando o replace
console.log(frase.replace("Japão", "Brasil"));

alert(frase.replace("Japão", "Brasil"));

//Usando o uppercase/lowercase
var frase2 = "Whatsapp é muito legal";
console.log(frase2.toUpperCase());
console.log(frase2.toLowerCase());

//----Comandos de álgebra
// A álgebra do Javascript é igual a todas as outras linguagens

//----- Listas/Arrays/Matrizes

var lista = ["maçã", "pêra", "whatsapp"];

//consulta
console.log(lista);

console.log(lista[0]);
//adicionando
lista.push("Whatsapp Simulator");
console.log(lista);

// Tamanho
console.log("Tamanho da lista: " + lista.length);

// para string, a lista vira uma string com vírgula.
console.log("Lista para string: " + lista.toString());

// Transformando em String apenas um elemento (character):
console.log("Apenas um elemento: " + lista.toString()[4]);

//Função Join: Adds all the elements of an array into a string, separated by the specified separator string.
console.log(lista.join(" - "));

//---- Dicionários

var fruta = {nome:"maçã", cor:"vermelha"};
console.log("Dicionários: ");
console.log(fruta);

//consultando um elemento:
console.log(fruta.cor)


//---- Arrays e dicionários:

var frutas_lista = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxo"}];
console.log("Lista de dicionários: ");
console.log(frutas_lista);
//consulta
console.log(frutas_lista[1].cor);


//---- Condicionais
var idade = prompt("Digite sua idade novamente pra mim ver um negócio: ");

if(idade >= 18){
    alert("Você é maior de idade!");
}else{
    alert("Você é menor de idade!");
};


// Laço de repetição


// while
var count = 0;

console.log(count);
while(count < 10){
    count++;

    console.log(count);
};

//for - pesquise na net a diferença entre os dois.

//var tabuada = prompt("Insira o número que você queira a tabuada ");
console.log("Usando o for: ");


for(let numero = 20; numero > 5; numero--){console.log(numero);};


// Date

var d = new Date();

alert(d);
console.log("Hoje é " + d.getDate() + "/" + (d.getMonth()+1));