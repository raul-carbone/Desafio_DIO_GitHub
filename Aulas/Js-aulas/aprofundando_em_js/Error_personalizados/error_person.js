// //ERROR
// new Error(message, fileName, lineNumber)

// //todos os parametros sao opcionais.
//  const meuErro = new Error('Mensagem invalida')

//  throw meuErro;

// const meuErro = new Error('Mensagem invalida');
// meuErro.name = 'InvalidMessage'; // dando nome para o erro.

// throw meuErro;

//Atividade pratica:
//funcao que recebe um array e um numero.
function validaArray(array,num){
    //Usando o try/catch para verificar e filtrar os erros.
    try{
    //Verificando se os dois parametros(array,num) foram enviados
    //ReferenceError e um tipo de erro ja personalizado.
    if (!array && !num) throw new ReferenceError("Envie os parametros.");
    //Verificando se o tipo do array e Object.
    if(typeof array !== 'object') throw new TypeError("O  array precisa ser do tipo Object.");
    //Verificando se o tipo do num e Number.
    if(typeof num !== 'number') throw new TypeError("O num precisa ser do tipo Number.");
    //Verificando se o tamanho do array e igual ao num.
    if(array.length !== num) throw new RangeError("Tamanho invalido");

    return array;
    }catch(e){
        //bloco para filtrar os tipos de erros.
        if(e instanceof ReferenceError){
            console.log("Este error e um ReferenceError!");
            console.log(e.message);
        } else if(e instanceof RangeError){
            console.log("Este error e um RangeError!");
            console.log(e.message);
        } else if(e instanceof TypeError){
            console.log("Este error e um TypeError!");
            console.log(e.message);
        }else {
            console.log("Ocorreu um tipo de erro esperado:" + e);
        }

    }

}

console.log(validaArray([1,2], 2));
