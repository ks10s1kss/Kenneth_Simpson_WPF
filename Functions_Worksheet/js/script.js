//Kenneth Simpson 4/30/2014 Functions_Worksheet

/*Here I am passing arguments 2, 3.14, 6, to my parameters so that they can be used.
I am also setting up the var total so that I can use console.log to print out the answer.*/
var total = calcCircumference(2, 3.14, 6);

//Here I am creating a function and defining the functions parameters.
function calcCircumference(two, pie, radius){
	//Here I am setting up a variable to calculate the circumference of the circle.
	var circumference = two * pie * radius;
	//I am returnng the circumference to where I called the function.
	return circumference;
}

console.log(total);








