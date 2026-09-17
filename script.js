let score = 0;

function flipCoin(guess) {

    let number = Math.floor(Math.random() * 2);

    let result;

    if (number === 0) {
        result = "Heads";
    } else {
        result = "Tails";
    }

    document.getElementById("result").textContent =
        "The coin landed on " + result + "!";

    if (guess === result) {
        score++;
        document.getElementById("result").textContent =
            "Correct! It was " + result + "!";
    } else {
        document.getElementById("result").textContent =
            "Wrong! It was " + result + ".";
    }

    document.getElementById("score").textContent = score;
}

function resetGame() {
    score = 0;

    document.getElementById("score").textContent = score;
    document.getElementById("result").textContent = "Make your guess";
}
