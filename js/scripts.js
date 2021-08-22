//Business Logic

function roboRog (nombre) {
  let string = nombre.replace(/\D/gi,"NaN.")
  let arrayNum = [];
  if (string.includes("NaN")) {
    return (nombre + " is not a number. Try again friend.")
    }
  for (i = 0; i <= nombre; i++) {
    if (i.toString().includes(3)) {
      arrayNum.push("Wont you be my neighbor?");
    } else if (i.toString().includes(2)) {
      arrayNum.push("Boop!")
    } else if (i.toString().includes(1)) {
      arrayNum.push("Beep!")
    } else {
      arrayNum.push(i);
    }
  }
  return arrayNum;
};






//ui logic
$(document).ready(function () {
  $("form#num-form").submit(function (event) {
    event.preventDefault();
    const input = $("#num-input").val();
    const stringRog = roboRog(input);
    $("#display").html(stringRog);
  });
});
