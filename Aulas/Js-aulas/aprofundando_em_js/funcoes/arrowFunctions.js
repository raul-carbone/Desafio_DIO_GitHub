//Arrow Function
//Abaixo os 3 blocos de codigos fazem a mesma coisa, aqui podemos ver como fica mais limpo o codigo com uma arrow function.


// const helloWorld = function(){
//     return "Hello World!";
// }

// const helloWorld = () => {
//     return "Hello World!";
// }


const helloWorld = () => "Hello World!";

const soma = (a, b) => a + b;
const sub = a => a;

soma(1,2)
//3
sub(5)
//5

//*Arrow Function nao faz HOISTING.