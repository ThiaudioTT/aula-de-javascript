
//Básico:
function botao_alert(){
    return alert("Obrigado por clicar! ");
};


// Retornando elementos html
function botao_element(){
    document.getElementById("surpresa").innerHTML = "<b>Obrigado por clicar! Clique no texto para ir ao meu github.</b>";


    //Elemento que traz:
    console.log("Elemento retornado: ");
    console.log(document.getElementById("surpresa"));
};

//Abrindo uma nova aba
function redirecionar(){
    //window.open("https://github.com/ThiaudioTT");
    // Abre na mesma guia: window.location.href = "https://github.com/ThiaudioTT"
};

//functions para o mouseover e mouse out

function mousedentro(argumento){
    argumento.innerHTML = "Obrigado por passsar o mouse!";
    // Pelo id: document.getElementById("mouse").innerHTML = "Obrigado por passar o mouse!";
};

function mousefora(argumento){
    argumento.innerHTML = "Passe o mouse aqui!";
    // Pelo id: document.getElementById("mouse").innerHTML = "Passa o mouse aqui pls.";
};


//Tela de carregamento:

function carregando(){
    alert("Página carregada");
};

// Função onchange
function trocar_select(elemento){
    //console.log("Valor do select: ");
    console.log(elemento.value);
};

/* Obs: Lembre-se que esses argumentos.valor precisam estar na tag do html! No caso, a do <select>
lá no html. */