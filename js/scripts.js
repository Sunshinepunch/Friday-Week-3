//Business Logic

function roboRog (nombre) {
  let string = nombre.replace(/\D/gi,"NaN. Try again.")
  if (string.includes("NaN")) {
    return (nombre + " is not a number. Try again friend.")
    }
  let numeral = parseFloat(string) + 1;
  let arrayNum = []
  let counter = 0
  for(i=0; i <= numeral; i++) {
    if(counter < numeral) {
      arrayNum.push(counter);
      counter++;
      console.log(arrayNum);
  }
}
  return arrayNum;
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
