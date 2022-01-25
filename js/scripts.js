// Business Logic

function add(number1, number2) {
	return number1 + number2;
}

function multiply(number3, number4) {
	return number3 * number4;
}

function subtract(number1, number2) {
	return number1 - number2;
}

function divide(number1, number2) {
	return number1 / number2;
}

// User Interface Logic
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
	});
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    const number3 = parseInt($("#multiply1").val());
    const number4 = parseInt($("#multiply2").val());
    const result = multiply(number3, number4);
    $("#output").text(result);
  });
	$("form#multiply").submit(function(event) {
    event.preventDefault();
    const number3 = parseInt($("#multiply1").val());
    const number4 = parseInt($("#multiply2").val());
    const result = multiply(number3, number4);
    $("#output").text(result);
  });

});