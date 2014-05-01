//Kenneth Simpson 4/30/2014 Functions_Worksheet

/*Here I am passing arguments 2, 3.14, 6, to my parameters so that they can be used.
I am also setting up the var total so that I can use console.log to print out the answer.*/
var total = calcCircumference(2, 3.14, 6);

//Here I am creating a function and defining the functions parameters.
function calcCircumference(two, pie, radius){
	var circumference = two * pie * radius;
	return circumference;
}

console.log(total);








