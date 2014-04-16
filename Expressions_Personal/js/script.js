//Kenneth Simpson April 9, 2014  Assignment: Expressions (personal)

/*This code is going to be used to calculate the cost of your water bill on a
monthly basis.*/

/*Here I want to make the user welcome and politely ask them their name*/
var name = prompt("Hello, What is your name?")

/*I want to make sure that my very first prompt is working well within my web page.*/
console.log(name);

/*I want to also show the user that I have remembered their name and made this website
more personal while also asking them a question, so I used the alert function to alert them of 
the question that I am asking them.*/
alert("Hello! " + name + " Would you like to know what you water bill will cost you this month?")

/*Here I am using another alert so that I can give the user some insight of how much water cost of average
in the USA so that they can have a scale to measure their overall cost of their water bill.*/
alert("The average price of water in America is $1.50 per 1000 Gallons");

/*I am declaring the price of water and setting its value to 1.5 since that is the 
average cost of water per gallon in the USA.*/
var priceOfWater = 1.5;

/*On this line I am prompting the user to answer the question; How many gallons of water 
do you use on a daily basis by declaring the variable waterUsed.*/
var waterUsed = prompt("How many gallons of water do you use on a daily basis?");

/*I want to keep this website interactive with facts so that the user can learn
while they are also calculating their water bill.*/
alert("The average person uses upwards of 123 gallons of water daily!");

/*At this point I want to make sure that my prompt is working well within
the web page..*/
console.log(waterUsed);

/*I am now going to ask the user how many days have they used their water in this 
current month.*/
var daysUsed = prompt("How many days this month have you used your water?");

/*Here I want to add some humor for the user while they are calculating*/
alert("If you said you used water on more than 32 days or less than 27 you might want to rethink you answer!");

/*Now, I want to check my prompt and make sure that it is in working order and is giving
me the correct input that the user entered.*/
console.log(daysUsed);

/*For the variable I chose totalCost and set it = to my expression, which was the priceOfWater
+waterUsed and then  divided by the daysUsed.*/
var totalCost = priceOfWater * waterUsed / daysUsed;

/*I wanted to make sure that my totalCost variable was do the arithmetic operations
completely throughout the program.*/
console.log(totalCost);

/*I wanted to give the user a final total and alert box showing them exactly how much
their water bill was going to cost them over the month.*/
alert("Your water bill will cost you $" + totalCost +" dollars this month!"); 


/*I wanted to thank the user for using our web service!*/
alert("We appreceiate you using our web browser to calculate you water bill!");






