let objeto = {};

objeto.name = 'Raul';
objeto.age = 21;


//console.log(Object.keys(objeto));

let pessoa = {
    name: 'Raul',
    age: 21,
    adress: 'Rua Italia,',
    num_casa: 3690,
    curso: 'Analise Desenvolvimento de Sistemas',
}
pessoa["numberOfSiblings"] = 4
let mom = "nameOfMom";
pessoa[mom] = "Maria"

console.log(pessoa.name);
console.log(pessoa.age);
console.log(pessoa.adress,pessoa.num_casa);
//console.log();
console.log(pessoa.curso);
console.log(pessoa.numberOfSiblings)
console.log(pessoa.nameOfMom);