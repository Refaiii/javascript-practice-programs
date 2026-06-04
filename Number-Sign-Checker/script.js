function checkNumber() {
    let number = Number(document.getElementById("numberInput").value);
    let result = document.getElementById("result");

    if (number > 0) {
        result.innerHTML = "The number is positive.";
        result.className = "positive";
    }
    else if (number < 0) {
        result.innerHTML = "The number is negative.";
        result.className = "negative";
    }
    else if (number === 0) {
        result.innerHTML = "The number is zero.";
        result.className = "zero";
    }
    else {
        result.innerHTML = "Please enter a valid number.";
        result.className = "";
    }
}

function clearResult() {
    document.getElementById("numberInput").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").className = "";
}

document.getElementById("numberInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkNumber();
    }
});