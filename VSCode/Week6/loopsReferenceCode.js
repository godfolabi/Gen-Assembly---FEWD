
/*
 * ################################################
 * Basic for loop
 *
 * Just looping over an array to add each item as an element in the DOM
 *
 */

const bigAnimals = ["elephant", "giraffe", "whale", "grizzly", "rhino", "bison", "panda", "komodo dragon"];

for (let i=0; i <= 10; i++) {
  const animalItem = document.createElement('li')
  animalItem.innerText = bigAnimals[i];
  document.querySelector("#big-animals-list").append(animalItem);
}

// But what if want to limit to the length of the array?
// This will get rid of the undefined values
for (let i=0; i < bigAnimals.length; i++) {
  const animalItem = document.createElement('li')
  animalItem.innerText = bigAnimals[i];
  document.querySelector("#big-animals-list-2").append(animalItem);
}

/*
 * ################################################
 * Basic for loop
 *
 * Combining a basic array, for loop and a conditional statement
 *
 */

for (let i=0; i <= bigAnimals.length; i++) {
  if (bigAnimals[i] === "whale") {
    console.log("We found the biggest animal of them all, the whale at array position " + bigAnimals.indexOf("whale"));
  }
}

/*
 * ################################################
 * While loop use case
 *
 * Basically the only time most developers use while loops is when they don't know how long they want to loop
 * This really only happens when you have randomizing data
 * Here's a crude example of having a deck of cards and finding an ace by randomly selecting an index to draw a random card from the array
 *
 */

// Sets up random variables
const myDeck = ["2", "3", "4", "5", "6", "A", "7", "8", "9", "10", "J", "Q", "K"];
let i = 0;
let myCard;

// Uses while loop to check to make sure the ace hasn't been found
while (myCard !== "A") {
  myCard = myDeck[Math.ceil(Math.random() * myDeck.length)]; // gets random value from array
  i++; // counts how many times it takes
}

// Gives us output after the ace is found
document.querySelector('#while-test-dest').innerText = "It took " + i + " tries to get an Ace"