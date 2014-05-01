//Kenneth Simpson Functions_Industry 5/1/2014


/*I have switched jobs and I am now a small arms specialists for the navy. My job is all about results 
and how many items you can have stripped and repaired on a daily basis.*/

//I am declaring the bolts variable to prompt the user for some information regarding
//their work progress. 
var bolts = parseInt(prompt("How many bolt carriers can you detail strip in an hour?"));
//I am printing to the console to make sure the information entered is correct.
console.log(bolts);

//I am using a ternary to tell the program what to do if the user enters specific numbers
//that reflect their working day.
(bolts < 10) ? alert("You seriously need to pick it up!") : alert("You are working at a good pace!");


//I am defining the variable to prompt the user for information about their work day. 
var trigAssemblies = parseInt(prompt("How many trigger assemblies can you detail strip in an hour?"));
//I am priniting to the console to make sure th information entered is correct.
console.log(trigAssemblies);


// I am using an if statement to tell the program that if the user does not enter a value
//for the trigAssemblies prompt box to create another prompt box prompting them to enter a value. 
if (trigAssemblies == " ") {
	var trigAssemblies = prompt("You forgot to input a value!");
}

//I am declaring my final variable to promp the user for information about the variable.
var barrels = parseInt(prompt("How many barrels can you detail strip in an hour?"));
//I am printing to the console to make sure the information entered is correct.
console.log(barrels);

var total = calcNumberOfParts(bolts, trigAssemblies, barrels);
alert(total);

function calcNumberOfParts (b, t, b){
	var numberOfParts = b + t + b;
	return numberOfParts;
}

console.log(total);
