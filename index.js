$(document).ready(function () {
  const arrayDeItens = [];

  $("form").submit(function (e) {
    e.preventDefault();

    const task = $("#task").val(); // Captura o valor inserido no input
    const novoItem = $(`<li>${task}</li>`);

    novoItem.appendTo("ul"); // Colocando a nova linha criada acima (contendo o valor inserido no input) dentro da lista ul

    arrayDeItens.push(task);

    console.log(arrayDeItens);

    $("#task").val("");
  });

  $("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
  }); // Adicionando escutador no elemento pai -> evento, elemento filho e ação
});
