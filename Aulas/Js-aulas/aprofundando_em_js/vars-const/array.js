let array = [];

array.push(8);//adicionando um elemento no final do array.
array.push(3);
array.push(10);
array.push('Raise');
array.pop();//exclui o ultimo elemento do array. [a string 'Raise']
array.push('Raise');
array.shift();//exclui o primeiro elemento do array. [o 8 no caso]
array.unshift(7); //adiciona um elemento no comeco do array.


// console.log(array); //retorna o array todo.
// console.log(array.length); //retorna o tamanho do array.
// console.log(array[1]); //retorna o valor do array no indice indicado.

//iteratividade: 
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
//foi um console.log para cada elemento do meu array.

if (array.includes(3)){
    array.push(3);
    console.log(array);
}else{
    array.push(6);
    console.log(array);
}

array.reverse();
console.log(array);

