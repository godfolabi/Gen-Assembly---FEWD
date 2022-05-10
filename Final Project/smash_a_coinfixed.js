const squares = document.querySelectorAll(".square");
const gameClock = document.querySelector(".score");
const coins = document.querySelectorAll(".coin");

let lastSquare;
let timeOver = false;
let score = 0;

function randomTime(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomSquare(squares) {
    const idx = Math.floor(Math.random() * squares.length);
    const square = squares[idx];
    if (square === lastSquare){
        return randomSquare(squares);
    }
}

function coinPeep (){
    const time = randomTime(200, 1000);
    const square = randomSquare(squares);
    square.classList.add("up");
    setTimeout(() => {
        square.classList.remove("up");
        if (!timeOver){
            coinPeep();
        }
    }, time);
}

function startGame() {
    gameClock.textContent = 0;
    timeOver = false;
    score = 0;
    coinPeep();setTimeout(() => timeUp = true, 10000);
    setInterval(coinPeep, 1500);
}

function hit(e){
    if(!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove("up");
    gameClock.textContent = score;
}

coins.forEach(coin => coin.addEventListener(click, hit));