//Kenneth Simpson April 17, 2014 
//Conditionals_Wacky

/*In this program I am going to calculates the number of leaves that are on a tree.

/*Here I am creating a variable to prompt the user to answer how many limbs
are on the tree they are wondering about.*/
var limbNumber = parseInt(prompt("How many limbs are on your tree?"));


/*I want to make sure that my prompt is collecting the correct data given 
by the user.*/
console.log(limbNumber);

/*I am going to use a ternary to tell the user if the amount of limbs they
entered is even in the realm of possibilites.*/
(limbNumber >=1,000,000,000) ? alert("You have spent too much time counting tree limbs!") : alert("I bet that took concentration!");

/*Now I am going to declare and prompt the user how many leaves are on the 
limbs that they counted*/
var leavesNumber = parseInt(prompt("How many leaves are on each limb?"));

//I am checking my prompt to make sure the data entered in being collected correctly.
console.log(leavesNumber);

/*I am going to use another ternary to tell the user what the program thought
about their input data.*/
(leavesNumber <= 1) ? alert("Your tree is probably dead!") : alert("You must be extremely bored!");

//Now I am going to calculate the data for the user
var totalLeaves = (limbNumber * leavesNumber);

//I am now going to alert the user of how many leaves are on their tree
console.log("Their are " + totalLeaves + " leaves on your tree!");


