var jogador1 = 0;
var jogador2 = 1;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores sao validos') : console.log('Jogadores invalidos');
//IF TERNARIO de uma linha so. ( ? , :)
    
//IF
if(jogador1 > 0 && jogador2 == 0){
console.log("jogador1 marcou ponto");
placar = jogador1 > jogador2;
//vai mostrar na tela pois a condicao e verdadeira.
}else if(jogador2 > 0 && jogador1 == 0){
console.log("jogador2 marcou ponto");
placar = jogador2 > jogador1;
//testando mais de uma condicao com o else if.
    } else{
    console.log("ninguem marcou ponto");
    }

//se a condicao anterior nao for verdadeira o else vai ser executado.

//switch/case
switch(placar){
    case placar = jogador1 > jogador2:
        console.log("jogador1 ganhou");
        break;
        case placar = jogador2 > jogador1:
            console.log("jogador2 ganhou");
            break;
            default:
                console.log("ninguem ganhou");
}

//lacos de repeticao

//FOR - funciona como uma repeticao de instrucao ate que a condicao seja falsa.
/* SINTAXE
for([expressaoInicial]; [condicao]; [incremento]){
declaracao};
*/
let array = ['valor1', 'valor2', 'valor3','valor4','valor5'];
let object = {propriedade1: 'valor1', propriedade2:'valor2', propriedade3:'valor3',};

for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}

//FOR/IN - funciona como uma repeticao a partir de uma propriedade.
/* SINTAXE
for([indice] in [objeto ou array]){declaracao}
*/
//array
for(let i in array){//imprime a quantidade de items no array mostrando que e uma string.
    console.log(i);
}

//object
for(i in object){//imprime as propriedades de um objeto.
    console.log(i);
}

//FOR/OF - funciona como uma repeticao a partir de um valor.
/*
for([indice] of [array]){
    declaracao}
}
*/

//array
for(i of array){//imprime o valor de cada indice
    console.log(i);
}

//object
for(i of object.propriedade1){
    console.log(i);
}

//WHILE - executa uma instrucao enquanto determinada condicao for verdadeira, a verificacao e feita antes da execucao.

var a = 0;

while(a < 10){//ira fazer essa acao ate a condicao for verdadeira.
    a++;
    console.log(a);
}

//DO/WHILE - executa uma instrucao ate que determinada condicao seja falsa, a verificacao e feita depois da execucao.

do {
    a++;
    console.log(a);
} while(a < 10)
