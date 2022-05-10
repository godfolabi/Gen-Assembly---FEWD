let car = {
    make: "Toyota",
    model: "Camry",
    numberOfWheels: 4,
    mpg: 27.5,
    canFly: false,
    availableColors: {
        "red": "#F00",
        "green": "#0F0",
        "blue": "#00F",
    },
}

console.log(car.canFly)
console.log(car.mpg)
console.log(car["canFly"])
console.log(car["mpg"])
console.log(car["availableColors"]["red"])
console.log(car["availableColors"]["green"])
console.log(car["availableColors"]["blue"])
console.log(car.availableColors.red)
console.log(car.availableColors.green)
console.log(car.availableColors.blue)