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
//Here I am checking to make sure that my ouptut is correct.
console.log("The circumference of the circle is " + total);

//Bee Sting Equation

//Here I am declaring the victims weight. 
var vicWeight = 165;

//I am passing arguments to the parameters and also declaring the variable total
//so that I can have somewhere to print out my results. 
var total = calcNumberOfStings(165, 8.666666667);

function calcNumberOfStings(vicWeight, stings){
	var numberOfStings = vicWeight * stings;
	return numberOfStings;

}

console.log("It takes " + total + " bee stings to kill this animal!");







