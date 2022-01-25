// Business Logic

function add(number1, number2) {
	return number1 + number2;
}

function multiply(number3, number4) {
	return number3 * number4;
}

function subtract(number5, number6) {
	return number5 - number6;
}

function divide(number7, number8) {
	return number7 / number8;
}

// User Interface Logic
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output1").text(result);
	});
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    const number3 = parseInt($("#multiply1").val());
    const number4 = parseInt($("#multiply2").val());
    const result = multiply(number3, number4);
    $("#output2").text(result);
  });
	$("form#subtract").submit(function(event) {
    event.preventDefault();
    const number5 = parseInt($("#subtract1").val());
    const number6 = parseInt($("#subtract2").val());
    const result = subtract(number5, number6);
    $("#output3").text(result);
  });
	$("form#divide").submit(function(event) {
    event.preventDefault();
    const number7 = parseInt($("#divide1").val());
    const number8 = parseInt($("#divide2").val());
    const result = divide(number7, number8);
    $("#output4").text(result);
  });
});