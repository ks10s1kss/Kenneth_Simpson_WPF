//Kenneth Simpson April 17, 2014 
//Conditionals_Industry

/*In this program I am going to calculate how many hours a week the user studies to get good 
grade to get a good job in the development industry*/

/*Here I am prompting the user to tell me how many hours a night they study*/
var studyHours = parseInt(prompt("How many hours a night do you study?"));

//Here I am checking my prompt to make sure the data entered is received correctly
console.log(studyHours);

/*For this if and else statement I am going to make sure the user either gets rewarded or 
scolded for studying more or less than 25 hours a week.*/
if (studyHours < 25){
	alert("You need to study more!")
}else{
	alert("You are right on track!")
};

//Now I am going to prompt the user to tell me how many days a week that they study.
var studyNights = parseInt(prompt("How many nights a week do you study?"))

//I want to make sure that my promp is collecting data correctly.
console.log(studyNights);

/*I am using an if and else statement to tell the user whether they are spendind enough 
nights studying or not throughout the week.*/
if (studyNights >= 5){
	alert("You study habits are spot on!")
}else{
	alert("You need to dedicate yourself!")
};

//Now I am going to create an equation to calculate the number of hourse studied by the user
var totalHours = studyNights * studyHours;

//Here I want to alert the user to let them know how many hours they studied.
alert("You have spent " + totalHours + " hours studying this week!");





