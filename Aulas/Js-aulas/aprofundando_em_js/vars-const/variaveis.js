// diferenca de var e let.
// let numberOne;//precisa declarar antes o 'let'

// numberOne = 1;

// console.log(numberOne + 2);

var firstName = 'Joao';
let lastName = 'Souza';//escopo global.

if(firstName === 'Joao')    {
    var firstName = 'Pedro';
    let lastName = 'Silva';//escopo de bloco
    console.log(firstName, lastName);
}

console.log(firstName, lastName);

//a mais usada seria a LET.
