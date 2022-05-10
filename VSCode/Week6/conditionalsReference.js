// ######################################################################
// ######################## Comparison Operators ########################
// ######################################################################


/**
 * 1- COMPARING STRINGS
 */

// You can compare strings but it's often pretty useless until you get live data
let color = "red", animal = "turtle";

if (color > animal) {
  // false - nothing will return here
  console.log("Color is greater than animal!")
} else {
  console.log ("Color is not greater than animal - what are you thinking?")
}

// 1b- Note that you don't always need an else statement when writing a conditional statement
if (color === animal) {
  // false - nothing will return here
} else {
  console.log ("Color is not equal to animal. Get over it.");
}



/**
 * 2- COMPARING ACROSS TYPES, NO-GO!
 */

// You can intialize different variable types (string and integer) in one line
let otherColor = "blue", daysInAWeek = "7";

// But what happens when we compare them?
if (otherColor === daysInAWeek) {
  // false - nothing will return here
} else {
  console.log ("Blue and 7 are not equal because they are different variable types.");
}

// 2b - You could use the fact that they aren't the same to compare them
if (otherColor !== daysInAWeek) {
  // true - because they aren't equal
  console.log ("This prints precisely because Blue and 7 are not equal - because we used the inequality operator");
}


/**
 * 3- INTEGER COMPARISON
 */
// A more realistic scenario is comparing integers, no quotes
let blackJack = 21;

if (blackJack >= daysInAWeek) {
  // true - because blackJack is larger than daysInAWeek
  console.log ("Blackjack is a greater number than how many days are in a week");
}

// 3b- Now we will actually do something with a comparison condition
if (daysInAWeek <= blackJack) {
  // true - because blackJack is larger than daysInAWeek
  document.getElementById('orange-text').setAttribute("style", 
    "color: white; background-color: orange; padding: 20px;"
  );
}


/**
 * 4- INTEGER COMPARISON, AGAIN
 */
// Another integer comparison, using else if
blackJack = 21;
daysInAWeek = 19;

if (blackJack <= daysInAWeek) {
  document.getElementById('blackjack-container').innerHTML = 
    "<p>Womp womp no blackjack</p>"
} 
else if (blackJack >= daysInAWeek) {
  document.getElementById('blackjack-container').innerHTML = 
    "<p>A WINNER IS YOU</p>";
}


/**
 * 5- BOOLEANS WITH COMPARISONS
 */
// Note the program flow here, this is getting more advanced
let octopusLegs = 8, maxVolumeLevel = 8;
let checkVal;

if (octopusLegs !== maxVolumeLevel) {
  checkVal = false;
} else if (octopusLegs === maxVolumeLevel) {
  checkVal = true;
}
console.log('First value for checkVal:', checkVal);

// 5b- Setting a Boolean based on variable values
// Reset values for comparison
octopusLegs = 8;
maxVolumeLevel = 45;
checkVal = null;


if (octopusLegs !== maxVolumeLevel) {
  checkVal = true;
} else if (octopusLegs === maxVolumeLevel) {
  checkVal = false;
}
console.log('Second value for checkVal:', checkVal);

/* Switch color in DOM if different */
function calamari () {
  if (checkVal === true) {
    document.querySelector('.box-example-1').setAttribute("style", 
      "color: black; background-color: yellow;"
    );
  }
}
calamari();




/**
 * 6 - Switch statement
 */
