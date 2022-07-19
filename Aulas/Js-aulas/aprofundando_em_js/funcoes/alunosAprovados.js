const ALUNOS = [{
    nome: 'Raul',
    nota: 7,
    turma: '2A',
},
{
    nome: 'Julia',
    nota: 4,
    turma: '2A',
},
{
    nome: 'Arthur',
    nota: 6,
    turma: '2A',
},
{
    nome: 'Renan',
    nota: 10,
    turma: '2A',
},
{
    nome: 'Jonas',
    nota: 2,
    turma: '2A',
},
{
    nome: 'Huryel',
    nota: 3,
    turma: '2A',
}]

function aprovados(ALUNOS, media){
    let aprovados = [];

    for (let i = 0; i < ALUNOS.length; i++) {
        let {nota, nome} = ALUNOS[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(aprovados(ALUNOS, 6));