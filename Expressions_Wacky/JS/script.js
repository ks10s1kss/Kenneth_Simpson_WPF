//Kenneth Simpson April 10,2014 Expressions_Wacky

/*In this program I am going to calculate the amount of money spent by the user in a given month at their
local gas station.*/


/*Here I am declaring the variable gasPurchasd and then prompting the user to enter the amount of gallons of gas 
that they purchased at their gas station. I am also using a the parseInt function to parse the string an integer
for easier calculations.*/
var gasPurchased = parseInt(prompt("How many gallons of gas do you purchase a month at your local gas station?"));

//With this console.log I am checking the prompt that I gave the users for the variable gasPurchased.
console.log(gasPurchased);

/*Here I am declaring the variable candyPurchased so that I can prompt the user and ask them how much money they spend
on candy in a given month at a local gas station. I am also using the parseInt function to parse the string an integer a
for easier calculations.*/
var candyPurchased = parseInt(prompt("How much money do you spend on candy a month at your local gas station?"));

//This concole.log is to check the prompt for the variable candyPurchased to check and make sure that the prompt is working correctly.
console.log(candyPurchased);

/*This variable is defining the drinks that the user purchases during a given month at their local gas stations.
I also use the praseInt function to parse the string an integer for easier calcualtion.*/
var drinksPurchased = parseInt(prompt("How much money do you spend on drinks a month at your local gas station?"));

/*For this console.log I am checking to make sure the data entered for the variable drinksPurchased is correct 
after the user enters the information.*/
console.log(drinksPurchased);

/*On this line I am declaring the variable typeOfGas and then prompting the user to tell me which type of gas
they buy; premium, or regular.*/
var typeOfGas = (prompt("Do you purchase premium or regular gasoline at your local gas station?"));

/*For this console.log I am checking to make sure that the prompt for typeOfGas is receiving the information
that the user entered into the box.*/
console.log(typeOfGas);

/*For this arrary I am referring back to the variable typeOfGas and defining how much premium gas cost and also
how much regular gas cost so that when the user enters either premium or regular into the prompt box, the program
will know how much each type of gas cost per gallon.*/ 
var typeOfGasArray = [3.99, 3.79];

/*I selected the variable chosenGasPrice to be used to refer to the prompt box where the user enters which
type of gas they use and then I set the variable to an if and else if statement.*/
var chosenGasPrice;

/*I wanted to see how I could make the program more bullet proof in a sense because if the user entered anyting 
other than the words "premium" or "regular" into the prompt box the caclulations would be thrown off because
I have not defined any other words expect for premium and regular to be set to a numerical value. This if statement
is setting the word "premium" when typed into the prompt box equal to the set price that was defined in the array
in the above lines of code. I also had to figure out how to get the prompt box to stop discriminating against whether
or not the user used a variation of all capital letters or all lower case letters or a word that starts with a capital
letter and then followed by lower case letter, so I used .tolowercCase() so that the program would not get messed
up with various typed of capitalization.*/ 
if (typeOfGas.toLowerCase() == 'premium') { 
	chosenGasPrice = typeOfGasArray[0];
	
}
/*For this line I used the else if function so that if the user did not enter the word premium and they entered
the word regular then the program would recongnize the word and know what to do with it. I then set the word regular
to its price that I declared in the above array typeOfGasArray. I also used the .tolowerCase() function here
so that the type of capitalization or lack their of would be irrelevant and would not screw up my program.*/
else if(typeOfGas.toLowerCase() == 'regular'){
	chosenGasPrice = typeOfGasArray[1];
	
}
/*I used the else function so that if the user would enter anything other than the words "premium" or "regular" 
they would be alerted that they must enter either either "premium" or "regular" into the prompt boxes, and then
used the typeOfGas variable to be prompted once again until the user entered the correct type of gos.*/
else{
	alert('You must enter Premium or Regular!');
	typeOfGas = prompt("Do you purchase premium or regular gasoline at your local gas station?")
}


/*This is my calculations for the program. I multiplied gasPurchased by chosenGasPrice and then added that answer
to both candyPurchased and drinksPurcahsed variables to give the user the answer of how much they spend at their
local gas station each month.*/
var totalSpent = (gasPurchased * chosenGasPrice) + candyPurchased + drinksPurchased;

/*I also wanted to alert my user of the outcome of their input variable to give them interaction and also the
answer they were seeking while using the program.*/
alert("You have spent $" + totalSpent + " this month at your local gas station!");























