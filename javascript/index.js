$(document).ready(function () {
  // MASKS
  $("#phone").mask("(00) 00000-0000", {
    placeholder: "(00) 00000-00000",
  });

  $("#id-number").mask("000.000.000-00", {
    placeholder: "000.000.000-00",
  });

  $("#zip-code").mask("00000-000", {
    placeholder: "00000-000",
  });

  // VALIDATIONS
  $("form").validate({
    rules: {
      name: { required: true },
      email: { required: true, email: true },
      phone: { required: true },
      idNumber: { required: true },
      address: { required: true },
      zipCode: { required: true },
    },
    messages: {
      name: "* O campo acima é obrigatório",
      email: "* O campo acima é obrigatório",
      phone: "* O campo acima é obrigatório",
      idNumber: "* O campo acima é obrigatório",
      address: "* O campo acima é obrigatório",
      zipCode: "* O campo acima é obrigatório",
    },
    highlight: function (element) {
      $(element).addClass("error");
    },
    unhighlight: function (element) {
      $(element).removeClass("error");
    },
  });


});
