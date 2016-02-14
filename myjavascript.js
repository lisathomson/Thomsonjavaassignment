var four = 4;
var two = 2;

var addition = four + two;
var subtraction = four - two;
var multiplication = four * two;
var division = four / two;

document.getElementById("addition").innerHTML = "When I drink " + four + " cups of coffee plus " + two + " cups of coffee I've had " + addition + " cups of coffee total.";
document.getElementById("subtraction").innerHTML = "When I drink " + four + " cups of coffee " + "and then throw up " + two + " cups of  coffee I have " + subtraction + " cups of coffee in me total.";
document.getElementById("multiplication").innerHTML = "When I drink " + four + " cups of coffee a day " + two + " days in a row I've had " + multiplication + " cups of coffee total.";
document.getElementById("division").innerHTML = "When I drink" + four + "cups of coffee over" + two + "days that is an average of " + division + " cups of coffee each day.";