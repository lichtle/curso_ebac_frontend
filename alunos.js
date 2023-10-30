const alunos = [
  { nome: "Beatriz", nota: 9 },
  { nome: "Lucas", nota: 4 },
  { nome: "Carolina", nota: 2 },
  { nome: "Lara", nota: 8 },
  { nome: "João", nota: 6 },
];

alunos.forEach(function (item) {
  if (item.nota >= 6) {
    console.log(item);
  }
});
