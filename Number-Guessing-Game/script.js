let secretNumber =
    Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess(){

    let guess = Number(
        document.getElementById("guessInput").value
    );

    let result =
        document.getElementById("result");

    attempts++;

    document.getElementById("attempts")
        .innerHTML = `Attempts: ${attempts}`;

    if(guess < secretNumber){

        result.innerHTML = "📉 Too Low!";
    }
    else if(guess > secretNumber){

        result.innerHTML = "📈 Too High!";
    }
    else{

        result.innerHTML =
            `🎉 Correct! The number was ${secretNumber}`;
    }
}

function newGame(){

    secretNumber =
        Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    document.getElementById("guessInput").value = "";

    document.getElementById("result").innerHTML =
        "";

    document.getElementById("attempts").innerHTML =
        "Attempts: 0";
}