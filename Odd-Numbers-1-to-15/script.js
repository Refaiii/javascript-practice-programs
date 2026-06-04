function printOddNumbers() {

    let i = 1;
    let output = "";

    while(i <= 15){

        output += `
            <div class="number-box">
                ${i}
            </div>
        `;

        i += 2;
    }

    document.getElementById("result").innerHTML = output;
}

function clearResult() {

    document.getElementById("result").innerHTML = "";
}