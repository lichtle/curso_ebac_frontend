document.querySelector(".submit-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const message = document.querySelector(".message");
  const errMessage = document.querySelector(".err-message");
  const mail = document.getElementById("mail");
  const password = document.getElementById("pw");

  function refreshPage() {
    setTimeout(function () {
      location.reload();
    }, 4000);
  }

  if (mail.value !== "" && password.value !== "") {
    errMessage.classList.remove("visible");
    message.classList.add("visible");
    refreshPage();
  } else {
    message.classList.remove("visible");
    errMessage.classList.add("visible");
  }
});
