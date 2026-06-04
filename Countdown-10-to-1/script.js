function countdown() {

    let i = 10;
    let output = "";

    while(i >= 1){

        output += `
            <div class="number-box">
                ${i}
            </div>
        `;

        i--;
    }

    document.getElementById("result").innerHTML = output;
}

function clearResult(){

    document.getElementById("result").innerHTML = "";
}