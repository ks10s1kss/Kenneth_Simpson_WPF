// How many shoes are in your closet?
var pairOfShoes = parseInt(prompt("How many pair of shoes do you think you have in your closet?"));
console.log(pairOfShoes);


if (pairOfShoes == 30){
	alert("You have a shoe addiction!");
} else if (pairOfShoes > 50){
	alert("You may need to see a professional about your shoe addiction!");
} else {
	alert("You have a healthy shoe habit!");
}


var shelves = parseInt(prompt("How many shelves of shoes do you have?"));
console.log(shelves);

var rows = parseInt(prompt("How many rows are on those shelves?"));
console.log(rows);

var pairs = parseInt(prompt("How many pairs of shoes are on each row?"));
console.log(pairs);


var total = calPairsOfShoes(shelves, rows, pairs);
alert("You have " + total + " pairs of shoes!");

function calPairsOfShoes(s, r, p){
	var numberOfShoes = s * r * p;
	return numberOfShoes;
}

console.log(total);


