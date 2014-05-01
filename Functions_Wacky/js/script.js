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

//I am using an anonymous function to set my parameters for the program and also 
//to do my calculations for the program.
var calctimesBarkedAtCat = function(tO, bPH){
	var timesBarkedAtCat = tO * bPH;
	//Here I am returning my value to where I called the function. 
	return timesBarkedAtCat;
}

//I am creating a variable so that I can store my information and also alert the user of their information.
var total = calctimesBarkedAtCat(timeOutside, barksPerHour);
alert("Your dog barks " + total + " times an hour!");
//I am printing my total to the console to make sure it is working correctly. 
console.log(total);