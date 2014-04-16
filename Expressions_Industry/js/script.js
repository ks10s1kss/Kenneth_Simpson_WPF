//Kenneth Simpson April 10, 2014 Expressions_Industry

/*I am a welder currently so in this program I will have ane employer 
determine how many fittings can be welded in a hour onto a larg tank from 
the beginning of the process until the end result which is a welded fitting.*/


/*I am going to open with a question to the employer because I believe it makes them more interested
in what they are about ready to complete.*/
alert("Hello! lets find out just how productive your employees are!");


/*Here is where I am going to define the layout portion of welding fittings to the user*/
var layout = prompt("How many minutes does it take your employees to process each of the fittings?");

/*I am checking to make sure the data entered into the prompt is correct when submitted.*/
console.log(layout);

/*Here I made a downTime variable asking the employer how much downtime there was for his
employees*/
var downTime = prompt("how many minutes do the employees have for down time?");

/*For this console.log I am checking to see if my prompt for the downTime variable is being correctly read*/
console.log(downTime);

/*I wanted to alert the user and let them know that the employees lunch time does not count for down time.*/
alert("Lunch time does not count as downtime!");

/*I then checked the prompt to make sure that the data entered was correct when submitted.*/
console.log(downTime);

/*This alert is to inform the user that they need to base their questions on a type of welding called 
Mig welding instead of an entirely different type of welding called Tig welding*/
alert("Base your answer to the following question on Mig Welding not Tig Welding");

/* Here is my last given and ask the user about welding the fittings on tight*/
var weld = prompt("How many minutes does it take for your employees to weld the fitting on tight?");

/*I am checking once again to make sure that my prompt was correctly reading the input data from the user.*/
console.log(weld);

/*Here I wanted to alert to the user to the standar ASME code for time it takes to weld a fitting*/
alert("According to ASME code this should take no more than 2 minutes to weld a fitting!");

/*Here i set the variable totalTime equal to the sum of all my previous variables, and used the function parseInt
to make sure that all my variables are set to integers instead of words if they were entered..*/
var totalTime = parseInt(layout) + parseInt(downTime) + parseInt(weld);

/*I wanted to alert the user with the information that they have submited so they can have interaction
within the web page.*/
totalTime = alert("The total time for your employees from start to finish is " + totalTime + "minutes");

/*I am checking to make sure that my totalTime expression is correct for the user.*/
console.log(totalTime);



