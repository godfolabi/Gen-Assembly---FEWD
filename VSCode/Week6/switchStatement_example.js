let transportOption = 'metro';
// console log data based on condition
switch (transportOption) {
  case 'car': 
    console.log("lets go for a drive!");
  case 'bus':
    console.log("the wheels on the bus go round and round");
  case 'metro':
    console.log("Take the A train");
}

if (transportOption == 'car') {
  console.log("lets go for a drive!");
}

if (transportOption == 'bus') {
    console.log("the wheels on the bus go round and round");
}

if (transportOption == 'metro') {
    console.log("Take the A train");
}

// Multi-Case Switch

let seasonCheck ="fall"

switch(seasonCheck) {
    case 'autumn':
    case 'fall':
      console.log("It's fall now!");
      break;
  
    case 'spring':
    case 'summer':      
      console.log("Spring time is near");
      break;
  }

  if (seasonCheck ==='autumn' || seasonCheck === "fall") {
    console.log("It's fall now!");
  }

  if (seasonCheck ==='spring' || seasonCheck === "summer") {
    console.log("Spring time is near!");
  }
  