//Kenneth Simpson 5.1.2014 Functions_Personal


// How many shoes are in your closet?




//I am declaring a variable so that I can prompt the user for information and then use the variable
//later for my calculations. 
var pairOfShoes = parseInt(prompt("How many pair of shoes do you think you have in your closet?"));
//I am printing to the console to make sure the information entered is correct.
console.log(pairOfShoes);

//I am usig an if, else if, and if statement so that I can have various inputs with the user 
//depending on the values that they enter.
if (pairOfShoes == 30){
	alert("You have a shoe addiction!");
} else if (pairOfShoes > 50){
	alert("You may need to see a professional about your shoe addiction!");
} else {
	alert("You have a healthy shoe habit!");
}

//I am declaring a variable so that I can prompt the user for information and then use the variable later
//for my calculations.
var shelves = parseInt(prompt("How many shelves of shoes do you have?"));
//I am printing to the console to make sure the information is being entered correctly.
console.log(shelves);

//I am declaring a variable so that I can prompt the user for information and then use the variable later
//for my calculations.
var rows = parseInt(prompt("How many rows are on those shelves?"));
//I am printing to the console to make sure the information is being entered correctly.
console.log(rows);

//I am declaring a variable so that I can prompt the user for information and then use the variable later
//for my calculations.
var pairs = parseInt(prompt("How many pairs of shoes are on each row?"));
//I am printing to the console to make sure the information is being entered correctly.
console.log(pairs);

//I am calling my function to run and also alerting the user of the information they are 
//looking for.
var total = calPairsOfShoes(shelves, rows, pairs);
alert("You have " + total + " pairs of shoes!");

//I created a function to hold my parameters and also to do my calculations.
function calPairsOfShoes(s, r, p){
	var numberOfShoes = s * r * p;
	return numberOfShoes;
}

//I am printing to the console to make sure the information is being entered correctly.
console.log(total);


