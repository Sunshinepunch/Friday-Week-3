//Business Logic

function roboRog (nombre) {
  let string = nombre.replace(/\D/gi,"NaN. Try again.")
  if (string.includes("NaN")) {
    return (nombre + " is not a number. Try again friend.")
    } else {
    return nombre;
  }
}






//ui logic
$(document).ready(function () {
  $("form#num-form").submit(function (event) {
    event.preventDefault();
    const input = $("#num-input").val();
    const stringRog = roboRog(input);
    $("#display").html(stringRog);
  });
});
