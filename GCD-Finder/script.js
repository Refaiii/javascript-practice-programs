function findGCD() {

    let a = Number(
        document.getElementById("num1").value
    );

    let b = Number(
        document.getElementById("num2").value
    );

    while(b !== 0){

        let temp = b;

        b = a % b;

        a = temp;
    }

    document.getElementById("result").innerHTML =
        `GCD = ${a}`;
}

function clearResult(){

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerHTML = "";
}