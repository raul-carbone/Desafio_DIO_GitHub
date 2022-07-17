//MINHA VERSAO - ERRADA
    let n1 = Number(prompt('Insira o primeiro valor: '))
    let n2 = Number(prompt('Insira o segundo valor: '))
    let testandoNum;
    let soma = n1 + n2;
    let somaM10;
    let somaM20;


    if (n1 == n2){
        testandoNum = (`Os números ${n1} e ${n2} são iguais.`)
    } else{
        testandoNum = (`Os números ${n1} e ${n2} não são iguais.`)
    }


    if (soma >= 10){
        somaM10 = (`O resultado da sua sua soma é ${soma}, e maior que 10`)
    } else{
        somaM10 = (`O resultado da sua sua soma é ${soma}, e menor que 10`)
    }


    if (soma <= 20){
        somaM20 = (`O resultado da sua soma é ${soma}, e menor que 20`)
    } else {
        somaM20 = (`O resultado da sua soma é ${soma}, e maior que 20`)
    }

console.log(testandoNum)
console.log(somaM10)
console.log(somaM20)