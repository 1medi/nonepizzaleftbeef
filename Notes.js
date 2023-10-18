//Comparison operators

/**Equal to: ==                        Greater Than: >
Strictly equal to: ===              Greater than or equal to: >=
Strictly not equal to !==           Less than: <
Not Equal to !=                     Less than or equal to: <=

Logical Operators           
And: &&                     
OR: ||                  
NOT: !

If/Else
*/

var guess = 5;
if(guess==4){
  console.log ("You guessed "+ guess + " and you are right");
}else{
  console.log("You are wrong")
}

var guess = 6;
var message = "";
if (guess ==5){
  message = 'You guessed:' + guess + " you are correc.";
}else if (guess==6 || guess == 4){
  message = "You were close. You guessed the number: " + guess + ".";
}else{
  message = "You guessed wrong";
}
console.log(message);

