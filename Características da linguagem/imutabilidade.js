// imutabilidade significa algo não mutável, que permanece constante. Leia os artigos no final.

const user = {
    name: "Thiago",
    lastName: "Araújo"
}


function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}` // --> mesmo que concatenar
    }
}


const userWithFullName = getUserWithFullName(user);

console.log(user, "\nNovo: ", userWithFullName);

// UserWhithFullName aponta para uma nova direção, mas é o mesmo user de antes.



// veja https://pt.wikipedia.org/wiki/Objeto_imut%C3%A1vel

// Melhor artigo sobre:
// http://avancesolucoes.com.br/imutabilidade/