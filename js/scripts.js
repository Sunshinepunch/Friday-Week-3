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

// works but doesnt use the regex I want
// let arrayNum = [];
// for (i = 0; i <= number; i++) {
//   if (i.toString().includes(3)) {
//     arrayNum.push("Wont you be my neighbor?");
//   } else if (i.toString().includes(2)) {
//     arrayNum.push("boop!")
//   } else if (i.toString().includes(1)) {
//     arrayNum.push("Beep!")
//   } else {
//     arrayNum.push(i);
//   }

// }
// return output;
// };






//ui logic
$(document).ready(function () {
  $("form#num-form").submit(function (event) {
    event.preventDefault();
    const input = $("#num-input").val();
    const stringRog = roboRog(input);
    $("#display").html(stringRog);
  });
});
