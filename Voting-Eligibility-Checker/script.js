function checkEligibility() {

    let ageInput = document.getElementById("ageInput").value;
    let age = Number(ageInput);
    let result = document.getElementById("result");

    if (ageInput === "" || isNaN(age) || age < 0) {
        result.innerHTML = "Invalid age entered.";
        result.className = "error";
    }
    else if (age >= 18) {
        result.innerHTML = "You are eligible to vote.";
        result.className = "success";
    }
    else {
        result.innerHTML = "You are not eligible to vote yet.";
        result.className = "warning";
    }
}

function clearResult() {
    document.getElementById("ageInput").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").className = "";
}

document.getElementById("ageInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkEligibility();
    }
});