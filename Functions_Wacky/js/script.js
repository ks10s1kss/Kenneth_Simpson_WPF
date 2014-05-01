//Kenneth Simpson 5.1.2014 Functions_Wacky


var timeOutside = parseInt(prompt("How many hours is your dog outside during the day?"));
console.log(timeOutside);


var barksPerHour = parseInt(prompt("How many times an hour does you dog bark while outside?"));
console.log(barksPerHour);

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