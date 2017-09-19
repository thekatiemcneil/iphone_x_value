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

function isInt(value) {
  return !isNaN(value) &&
         parseInt(Number(value)) == value &&
         !isNaN(parseInt(value, 10));
}

function hours(wage){
  const wageInt = parseInt(wage);
  return (999 / wageInt);
}

function returnAnswer(userInput){
  if (isInt(userInput)) {
    return "the iPhone X is worth " + Math.floor(hours(userInput)) + " hours of your life."
  }
  else {
    return "thats not a number"
  }
}

