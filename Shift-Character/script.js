function shiftCharacters() {

    let text =
        document.getElementById("textInput")
        .value
        .toLowerCase();

    let shifted = "";

    for(let i = 0; i < text.length; i++) {

        let char = text[i];

        if(char === "z") {
            shifted += "a";
        }
        else if(char >= "a" && char <= "y") {

            shifted += String.fromCharCode(
                char.charCodeAt(0) + 1
            );
        }
        else {
            shifted += char;
        }
    }
document.getElementById("result").innerHTML =
    `Shifted Result:<br><strong>${shifted}</strong>`;
}

function clearResult() {

    document.getElementById("textInput").value = "";
    document.getElementById("result").innerHTML = "";
}

document.getElementById("textInput")
.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        shiftCharacters();
    }
});