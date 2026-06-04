function sumDigits() {

    let number = Number(
        document.getElementById("numberInput").value
    );

    let originalNumber = number;
    let sum = 0;

    while(number > 0){

        sum += number % 10;

        number = Math.floor(number / 10);
    }

    document.getElementById("result").innerHTML =
        `Sum of digits of ${originalNumber} = ${sum}`;
}

function clearResult(){

    document.getElementById("numberInput").value = "";
    document.getElementById("result").innerHTML = "";
}