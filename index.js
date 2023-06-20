let numA = document.getElementById("numero-a");
let numB = document.getElementById("numero-b");
let form = document.getElementById("form-numeros"); // Adicionar o escutador no formulário todo, e não só no botão de submit
let errorMessage = document.getElementById("error-message");
let successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let formEValido = numB.value >= numA.value; // Adicionar a condição no escopo do event listener, ou escrevê-la como uma função fora do escopo do event listener

  if (formEValido) {
    numA.value = "";
    numB.value = "";
    successMessage.style.display = "block";
    errorMessage.style.display = "none";
  } else {
    errorMessage.style.display = "block";
    successMessage.style.display = "none";
  }
});
