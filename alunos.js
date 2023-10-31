const alunos = [
  { nome: "Beatriz", nota: 9 },
  { nome: "Lucas", nota: 4 },
  { nome: "Carolina", nota: 2 },
  { nome: "Lara", nota: 8 },
  { nome: "João", nota: 6 },
];

let notaMaiorQueSeis = alunos.filter((aluno) => aluno.nota >= 6);

console.log(notaMaiorQueSeis);
