$(document).ready(function() {
  console.log("ready")
  $("#user-wage-form").hide();
  $("#user-wage").hide();
  $("#final-display").hide();
    $("#user-start-button").on("click", function() {
      $("#user-start-button").toggle();
      $("#user-wage-form").toggle();
    });
  $("#user-wage-form").on("submit", function(e) {
    e.preventDefault();
    var wage = $("#wage-field").val();
    var output = returnAnswer(wage);
    $("#user-wage-form").hide();
    $("#append-final-here").append(output)
    $("#final-display").toggle();
  });
  $("#back-button").on("click", function() {
    $("#user-wage-form")[0].reset();
    $("#user-wage-form").toggle();
    $("#final-display").hide();
    $("#append-final-here").empty();
  })
});

function convertString(input){
  if (input.includes(".")) {
    return parseFloat(input);
  }
  else {
    return parseInt(input);
  }
};

function isFloat(n){
    return n === +n && n !== (n|0);
};

function isInteger(n){
    return n === +n && n === (n|0);
};

function hours(wage){
  return (999 / wage);
};

function roundResult(num){
  var partial = (num - Math.floor(num))*100;
  if (partial >= 50) {
    return Math.ceil(num);
  }
  else {
    return Math.floor(num);
  }
};

function returnAnswer(userInput){
  var convertedInput = convertString(userInput);
  if (isInteger(convertedInput) || isFloat(convertedInput)) {
    return "the iPhone X is worth " + roundResult(hours(convertedInput)) + " hours of your life."
  }
  else {
    return "thats not a number"
  }
};

