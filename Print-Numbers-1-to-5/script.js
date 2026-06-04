function printNumbers() {

    let i = 1;
    let output = "";

    while(i <= 5){

        output += `
            <div class="number-box">
                ${i}
            </div>
        `;

        i++;
    }

    document.getElementById("result").innerHTML = output;
}

function clearResult(){

    document.getElementById("result").innerHTML = "";
}