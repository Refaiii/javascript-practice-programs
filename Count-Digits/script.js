function countDigits() {

    let number = Number(
        document.getElementById("numberInput").value
    );

    let originalNumber = number;
    let count = 0;

    if(number === 0){
        count = 1;
    }
    else{

        while(number > 0){

            count++;

            number = Math.floor(number / 10);
        }
    }

    document.getElementById("result").innerHTML =
        `${originalNumber} has ${count} digit(s)`;
}

function clearResult(){

    document.getElementById("numberInput").value = "";
    document.getElementById("result").innerHTML = "";
}