// Kenneth Simpson April 17, 2014 
//Conditionals_Personal 

/*In this code I am going to calculate the actual amount of sleep a person gets as
opposed to how much their body needs to get.*/

/*Here I am prompting the user askting them how many hours of sleep
do they get a night?*/
var sleepTimeNightly = prompt("How many hours a night to you sleep?");

//Here I am making sure that my promp box is working correctly within my program!
console.log(sleepTimeNightly);

/*Now I am going to set my if statement so that I can tell my user whether they
are getting enough nightly sleep or not.Then I am going to set an else statement
to let them know they are doing a fine job at getting enough sleep if they are above
8 hours a night.*/
if (sleepTimeNightly < 8){
	alert("You Need to get more sleep!")
}else{
	alert("You are getting your much needed hours of sleep!")
};

/*for this variable I am going to prompt the user and see how many hours of sleep
they get weekly*/
var sleepTimeWeekly = prompt("How many hours of sleep do you get weekly?");

//I am checking to mkae sure my prompt is retaining data correctly
console.log(sleepTimeWeekly);

/*I am going to setup an if and else statement to let the user know how they 
are doing on their weekly amount of hours of sleep they are getting.*/
if (sleepTimeWeekly < 56){
	alert("You are not sleeping enough each week!")
}else{
	alert("You have great sleeping habits!")
};