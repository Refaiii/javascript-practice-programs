function findMultiple() {

    let number = 51;

    while(true){

        if(number % 7 === 0){

            document.getElementById("result").innerHTML = `
                <div class="number-box">
                    ${number}
                </div>
            `;

            break;
        }

        number++;
    }
}

function clearResult() {

    document.getElementById("result").innerHTML = "";
}