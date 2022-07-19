//Arrays


//Spread - lidando com os elementos separadamente.
function sum(x, y, z) {
    return x + y + z;
}

const NUMBERS = [1,2,3];

console.log(sum(...NUMBERS)); // x = 1, y = 2, z = 3.


//Rest - combina os argumentos em um array.
function confereTamanho(...args){
    console.log(args.length)
}
//funcao acima me retorna a length de um array.


confereTamanho() // 0
confereTamanho(1, 2) // 2
confereTamanho(3, 4, 5) // 3

//Object Destructuring
const user = {
    id:69,
    nickname: "rkmaster",
    fullName: {
        firstName: "Raul",
        lastName: "Carbone",
    }
};

function userId({id}){ 
    return id;
}

userId(user) 
//69
//usando a funcao e a constante como parametro, a funcao ira buscar a propriedade Id dentro do parametro user, que e um objeto.
