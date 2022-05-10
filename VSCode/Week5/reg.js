let x=5
x

let y=10
y
let z = x + y
z

let greeting = "hello"

let mysteryObject = 1 / 0

let myBool = Boolean({})

let answer = "I don't know"
if (0.00000) {
    answer = "truthy, treated as true!"
}
else {
    answer = "falsy, treated as false"
}

let currentDate = new Date()
let currentYear=currentDate.getFullYear()
let currentMonth=currentDate.getMonth()+1
let currentDay=currentDate.getDay()
currentYear

let zeroPaddedMonth = currentMonth.toString().padStart(2, "0")

let zeroPaddedDay = currentMonth.toString().padStart(2, "0")
zeroPaddedDay
let isoDate = `${currentYear}-${zeroPaddedMonth}-${zeroPaddedDay}`
isoDate