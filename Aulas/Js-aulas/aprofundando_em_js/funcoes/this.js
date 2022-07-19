const pessoa = {
    firstName: 'John',
    lastName: 'Doe',
    id: 21,
    fullName: function(){
        return this.firstName + ' ' + this.lastName;//o this funciona como o pessoa que e um objeto.
    },
    getId: function() {
        return this.id;//declarado dentro de um metodo do objeto ele se refere ao objeto.
    }  
};

pessoa.fullName();
//Vai imprimir no console: "John Doe".
pessoa.getId();
//Vai imprimir no console: 21

//CALL
const person = {
    nome: 'Raul'
};

const animal = {
    nome: 'Zeus',
};

function getSomething(){
    console.log(this.nome);
}

getSomething.call(animal);
//Zeus

//APPLY
const person2 = {
    nome: 'Raul'
};

const animal2 = {
    nome: 'Thor',
};

getSomething.apply(animal2);
//Thor

const myObj = {
    num1: 1,
    num2: 2,
};

function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj,[2,5]);//argumentos dentro de um array.
//10

//BIND
//clona a estrutura da funcao onde e chamada e aplica o valor do objeto passado como parametro.

const retornaNomes = function(){
    return this.nome;
};

let bruno = retornaNomes.bind({nome: 'Bruno'});

bruno();
//Bruno.
