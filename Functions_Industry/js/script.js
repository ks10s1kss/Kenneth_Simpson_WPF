//Kenneth Simpson Functions_Industry 5/1/2014


/*I have switched jobs and I am now a small arms specialists for the navy. My job is all about results 
and how many items you can have stripped and repaired on a daily basis.*/

//I am declaring the bolts variable to prompt the user for some information regarding
//their work progress. 
var bolts = parseInt(prompt("How many bolt carriers can you detail strip in an hour?"));

console.log(bolts);


(bolts < 10) ? alert("You seriously need to pick it up!") : alert("You are working at a good pace!");



var trigAssemblies = parseInt(prompt("How many trigger assemblies can you detail strip in an hour?"));

console.log(trigAssemblies);



if (trigAssemblies == " ") {
	var trigAssemblies = prompt("You forgot to input a value!");
}


var barrels = parseInt(prompt("How many barrels can you detail strip in an hour?"));

console.log(barrels);

var total = calcNumberOfParts(bolts, trigAssemblies, barrels);
alert(total);

function calcNumberOfParts (b, t, b){
	var numberOfParts = b + t + b;
	return numberOfParts;
}

console.log(total);
