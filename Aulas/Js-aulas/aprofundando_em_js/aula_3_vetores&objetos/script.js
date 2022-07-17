//Vetores ou ARRAYS - tipo de lista aonde cada variavel possui um indice, e os valores declarados na array devem vir em colchetes [].

// let array = ['string', 1, false];
// console.log(array);

let array = ['strings', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
// console.log(array[3]);

//forEach - repeticao para cada indice dentro de um array.
//array.forEach(function(item, index){console.log(item, index)});

//push - adiciona um item no final do array.
// array.push('novo item no final');
// console.log(array);

//pop - remover um item no final do array.
// array.pop();
// console.log(array);
//apagou o ultimo item do array.

//shift - remover um item no inicio do array.
// array.shift();
// console.log(array);
//apagou o primeiro item do array.

//unshift - adiciona um item no inicio do array.
// array.unshift(32);
// console.log(array);
//adicionou o valor no comeco do array.

//indexOf -  retorna o indice de um item dentro de um array.
//console.log(array.indexOf(true));

//splice - remove ou substitui um item pelo indice.
// array.splice(0, 3);
// console.log(array);
//pegou do indice 0 ao 3 e apagou.

//slice - retorna uma parte de um array existente.
// var novoArray = array.slice(0, 3);
// console.log(novoArray);


//OBJETOS
let object = {string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno: 'objeto interno'}}
// console.log(object.objectInterno);

//DESTRUTURACAO DO OBJETO.
// var string = object.string;
// console.log(string);

// var arrayInterno = object.array;
// console.log(arrayInterno);

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);

