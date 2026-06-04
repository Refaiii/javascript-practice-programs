function generateFibonacci() {

    let n = Number(
        document.getElementById("termInput").value
    );

    let first = 0;
    let second = 1;

    let count = 0;

    let output = "";

    while(count < n){

        output += `
            <div class="number-box">
                ${first}
            </div>
        `;

        let next = first + second;

        first = second;
        second = next;

        count++;
    }

    document.getElementById("result").innerHTML = output;
}

function clearResult(){

    document.getElementById("termInput").value = "";
    document.getElementById("result").innerHTML = "";
}