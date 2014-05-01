//Kenneth Simpson 4/30/2014 Functions_Worksheet

/*Here I am passing arguments 2, 3.14, 6, to my parameters so that they can be used.
I am also setting up the var total so that I can use console.log to print out the answer.*/
var total = calcCircumference(2, 3.14, 6);


function calcCircumference(t, p, r){
	var circumference = t * p * r;
	return circumference;
}

console.log(total);








