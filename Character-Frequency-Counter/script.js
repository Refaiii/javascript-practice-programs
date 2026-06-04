function countFrequency() {

    let text =
        document.getElementById("textInput")
        .value
        .toLowerCase();

    let frequency = {};

    for(let i = 0; i < text.length; i++) {

        let char = text[i];

        if(char !== " ") {

            if(frequency[char]) {
                frequency[char]++;
            }
            else {
                frequency[char] = 1;
            }
        }
    }

  let output = "";

for (let char in frequency) {
    output += `
        <div class="character-row">
            <span class="character">${char}</span>
            <span class="count">${frequency[char]}</span>
        </div>
    `;
}

document.getElementById("result").innerHTML = output;
}

function clearResult() {

    document.getElementById("textInput").value = "";
    document.getElementById("result").textContent = "";
}

document.getElementById("textInput")
.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        countFrequency();
    }
});