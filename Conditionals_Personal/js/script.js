// Kenneth Simpson April 17, 2014 
//Conditionals_Personal 

/*In this code I am going to calculate the actual amount of sleep a person gets as
opposed to how much their body needs to get.*/

/*Here I am prompting the user askting them how many hours of sleep
do they get a night?*/
var sleepTimeNightly = parseInt(prompt("How many hours a night to you sleep?"));

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
var sleepTimeWeekly = parseInt(prompt("How many hours of sleep do you get weekly?"));

//I am checking to mkae sure my prompt is retaining data correctly
console.log(sleepTimeWeekly);

/*I am going to setup an if and else statement to let the user know how they 
are doing on their weekly amount of hours of sleep they are getting.*/
if (sleepTimeWeekly < 56){
	alert("You are not sleeping enough each week!")
}else{
	alert("You have great sleeping habits!")
};

/*Even though this is an almost obvious question I want to ask my user if they are getting 
sleep every night of the week or not!*/
var daysSlept = parseInt(prompt("How many days a week to you actually get to sleep?"))

/*Here I want to add an if and else statement along with an else if statement to show the user 
how they are doing with their nights slept.*/
if (daysSlept >= 7){
	alert("That is GREAT news!")
}else if (daysSlept > 6){
	alert("You may need to see a physician about a sleeping disorder!")
}else{
	alert("You need to reavaluate your sleeping schedule!")
}

//Here I am going to add up the total amount of sleep the user has got over the course of the week.
var totalSleep = (daysSlept * sleepTimeNightly);

//I am entering the calculation into the console.log
console.log("You are getting a total of " + totalSleep + " hours of sleep a week!");





