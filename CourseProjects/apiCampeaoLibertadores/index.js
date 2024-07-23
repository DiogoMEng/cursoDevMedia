const alunos = [
    { matricula: "001", nome: "Layla Ellison" },
    { matricula: "002", nome: "Devinder Crousley" },
    { matricula: "003", nome: "Remi De La Rosa" },
    { matricula: "004", nome: "Jacob Boyer" },
];

let nomes = [];

alunos.forEach(aluno => {
    nomes.push(aluno.nome);
})

console.log(nomes);