const fruits = ["banana", "orange", "apple"];
// Let's output some array values
fruits[0]; // will output "banana"
fruits[1]; // will output "orange"
fruits[2]; // will output "apple"
console.log(fruits)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

// You can mix this up asking for the index number of any array item
const fruitsOrangePosition = fruits.indexOf("orange"); // outputs '1'
console.log(fruitsOrangePosition)

// This gives us the length of the array
const fruitsLength = fruits.length; // will output "3"
console.log(fruitsLength)

// .pop() removes the last item
fruits.pop(); // fruits = ["banana", "orange"];
console.log(fruits.pop)
// .shift() removes the first item
fruits.shift(); // fruits = ["orange"];

// .push() adds whatever you into the method parenthesis to the end of the array
fruits.push("kiwi"); // fruits = ["orange", "kiwi"];

// .unshift() adds whatever you into the method parenthesis to the beginning of the array
fruits.unshift("cherry"); // fruits = ["cherry", "orange", "kiwi"];

// splice() adjusts array values (REMOVE)
// 1st number = index value for splice
// 2nd number = number of items to remove
fruits.splice(1,1); // fruits = ["cherry", "kiwi"];

// splice() adjusts array values (ADD)
// 1st number = index value for splice
// 2nd number = number of items to remove
// 3rd value = item to be added to array
fruits.splice(1, 0, "pear"); // fruits = ["cherry", "pear", "kiwi"];

// reverse() switches around the values in the array without modifying them
fruits.reverse(); // fruits = ["kiwi", "pear", "cherry"];

// join() takes your array and combines - or concatenates - it to create a string
// The string is separated by whatever you put into the parentheses of the method
const fruitsList = fruits.join(" and ");
// fruitsList = "kiwi and pear and cherry";

// Multi-dimensional arrays
// Put arrays into arrays
const produce = [["kiwi", "pear", "cherry"], ["broccoli", "celery", "carrots"]];

// Access multidimensional arrays similarly to regular arrays
// First square bracket - array
// Second square bracker - item
produce[1]; // ["broccoli", "celery", "carrots"];
produce[0][2]; // "cherry";

// filter
result = fruits.filter(item => item.length > 3)
result
