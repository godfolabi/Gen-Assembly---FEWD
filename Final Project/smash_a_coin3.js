const squares = document.querySelectorAll(".square")
const coin = document.querySelector(".coin")
const time = document.querySelector("#timer")
const score = document.querySelector("#score")

let result = 0;
let hitPosition
let currentTime = 30
let timerID = null;

// Randomly move the coin to a random square
function randomSquare() {
    squares.forEach (square => {
        square.classList.remove("coin")
    })
    let randomPosition = squares[Math.floor(Math.random() * 9)]
    randomPosition.classList.add("coin")

    hitPosition = randomPosition.id
}

// coin Hit Counter
squares.forEach(square => {
    square.addEventListener("click", () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

// Start the game
function moveCoin () {
    timerID = setInterval(randomSquare, 1750)
}

moveCoin()


// Set the timer
let countDownTimerID = setInterval(countDown, 1000)

function countDown () {
    currentTime--
    timer.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerID)
        alert("Game Over! FINAL SCORE:" + result)
    }
}

// Game Restart


