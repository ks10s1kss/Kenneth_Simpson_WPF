// Kenneth Simpson April 17, 2014 
//Conditionals_Personal 

/*In this code I am going to calulate how much time I spend working on homework
in a given week.*/


/*Here I am declaring a variable and using a prompt box to ask the user how
many hourse they spend a week on homework!*/
var hoursSpent = prompt("How many hours a week do you spend on your assignments?")
//I am checking to make sure my prompt box is working correctly.
console.log(hoursSpent);

/* I am creating this variable to prompt the user to ask how many days a week do they
work on their homework.*/
var spentDays = prompt("How many days a week do you work on your assignments?")

//Here I am checking my prompt box for my variable daysSpent
console.log(spentDays);

/* Here I am using an if statement to prompt the user if the hours they spend
on their homework is less than 25 hours.*/
if (hoursSpent < 25){
	alert("You need to spend more time on your homework!");
}

