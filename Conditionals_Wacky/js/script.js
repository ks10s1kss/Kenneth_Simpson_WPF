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
(limbNumber >=1,000,000,000) ? alert("You have spent too much time counting tree limbs!") : alert("I bet that took concentration!")