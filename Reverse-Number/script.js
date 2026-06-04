function reverseNumber() {

    let number = Number(
        document.getElementById("numberInput").value
    );

    let originalNumber = number;
    let reversed = 0;

    while(number > 0){

        let digit = number % 10;

        reversed = reversed * 10 + digit;

        number = Math.floor(number / 10);
    }

    document.getElementById("result").innerHTML =
        `${originalNumber} → ${reversed}`;
}

function clearResult(){

    document.getElementById("numberInput").value = "";
    document.getElementById("result").innerHTML = "";
}