//Kenneth Simpson 5.1.2014 Functions_Wacky

//I am declaring my given using a variable and prompting the user for information.
var timeOutside = parseInt(prompt("How many hours is your dog outside during the day?"));
//I am printing my timeOutside variable to the console to make sure it is correct.
console.log(timeOutside);

//I am declaring my given using a variable and prompting the user for information.
var barksPerHour = parseInt(prompt("How many times an hour does you dog bark while outside?"));
//I am printing my barksPerHour variable to the console to make sure it is working correctly. 
console.log(barksPerHour);

//I am using an if statement to let the user know if they need to get a bark collar
//for their dog or not. 
if (barksPerHour > 15){
	alert("You really should get a bark collar for you dog!");
}


var calctimesBarkedAtCat = function(tO, bPH){
	var timesBarkedAtCat = tO * bPH;
	return timesBarkedAtCat;
}

var total = calctimesBarkedAtCat(timeOutside, barksPerHour);
alert(total);

console.log(total);