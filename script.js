let score = 0;


function flipCoin(choice) {

    let number = Math.floor(Math.random() * 2);

    let result;

    if (number == 0) {

        result = "Heads";

    } else {

        result = "Tails";

    }


    if (choice == result) {

        score = score + 1;

        document.getElementById("result").innerText =
            "🎉 You got it right!";

    } else {

        document.getElementById("result").innerText =
            "😅 Not this time! It was " + result;

    }


    document.getElementById("coin").innerText = "🪙";

    document.getElementById("score").innerText =
        "⭐ Score: " + score;
}


function restart() {

    score = 0;

    document.getElementById("coin").innerText = "🪙";

    document.getElementById("result").innerText =
        "Make your choice!";

    document.getElementById("score").innerText =
        "⭐ Score: 0";
}