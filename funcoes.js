
//Sintaxe:

function soma(n1, n2) {
    return n1 + n2
};

console.log(soma(5, 2));

//Exemplo:
function SetReplace(frase, name, new_name) {
    return frase.replace(name, new_name);
};

console.log(SetReplace("Telegram é muito legal!", "Telegram", "Whatsapp"));


/*Escopo

mais em: https://medium.com/weyes/entendendo-o-uso-de-escopo-no-javascript-3669172ca5ba

"Ao declaramos uma variável sem o uso da palavra reservada var estaremos criamos uma variável global 
implicitamente, e automaticamente ela se torna global independente de onde ela for definida, assim 
também se tornando uma propriedade do objeto window do navegador ou do objeto global se estivemos 
utilizando o nodejs"

*/

function whatsapp(){
    zap = "whatsapp";
    var telegram = "Telegram";
    return console.log("Lá vai");
};

//IMPORTANTE! Se eu não chamar a função whatsapp, a variável, que era para ser global, não é definida.
whatsapp();

console.log(zap);

//Não é variável global:
console.log(telegram);