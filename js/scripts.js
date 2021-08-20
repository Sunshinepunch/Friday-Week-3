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
  }
} console.log(arrayNum)
  for(index=0; index <= numeral; index++) {
    if (index.toString().includes(3)){
      arrayNum.toString().replace(/[3]/gi,'"Won\'t you be my neighbor?"')
      console.log(arrayNum);
    } else if(index.toString().includes(2)) {
      arrayNum.toString().replace(/[2]/gi,'Boop!')
    } else if(index.toString().includes(1)) {
      arrayNum.toString().replace(/[1]/gi,'Beep!')
    } else {
      arrayNum.push(index)
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
