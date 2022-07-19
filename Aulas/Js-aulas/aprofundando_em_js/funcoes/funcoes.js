//Funcoes
//Estrutura:

// function nome(parametros){
//     instrucoes
//     return; //valor do retorno, invocamos o return para parar de executar aquela funcao.
// } 

//- obs.: se uma variavel e criada dentro de uma funcao, ela nao pode ser alcancada fora desse Escopo de Bloco pois ela foi criada dentro da funcao.

//Funcao anonima:
//uma variavel pode amazenar uma funcao, a funcao em si nao possui nome.

// const SOMA = function (a, b){
//     return a + b;
// }
// console.log(SOMA(1, 2)); // retorna 3
// console.log(SOMA(5, 4)); // retorna 9


//Funcao autoinvocavel:
//estrutura:
// (
//     function(){
//         let name = 'Digital Innovation One'
//         return name;
//     }
// )(1, 2); //podem receber parametros.
//pode ser armazenada em uma variavel.

//Callbacks
//uma funcao passada como argumento para a outra.
//com o callback voce tem maior controle das ordens de chamada.

// const calc = function(operacao, num1, num2){
//    return operacao(num1, num2)
//}

//Exemplo de Callback:
// const soma = function(num1, num2) {
//     return num1 + num2;
// }

// const sub = function(num1, num2) {
//     return num1 - num2;
// }

// const resultadoSoma = calc(soma, 1, 2);
// const resultadoSub = calc(sub, 1, 2);

// console.log(resultadoSoma); //1
// console.log(resultadoSub); //-1