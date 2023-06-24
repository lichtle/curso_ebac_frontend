$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();

    const task = $("#task").val(); // Captura o valor inserido no input
    const novoItem = $(`<li>${task}</li>`);

    novoItem.appendTo("ul"); // Colocando a nova linha criada acima (contendo o valor inserido no input) dentro da lista ul

    $("#task").val("");
  });

  $("ul li").click(function () {
    $("ul li").toggleClass("task-completed");
  });
});
