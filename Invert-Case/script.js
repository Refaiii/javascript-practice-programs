function invertCase() {

    let text =
        document.getElementById("textInput").value;

    let result = "";

    for(let i = 0; i < text.length; i++) {

        let char = text[i];

        if(char === char.toUpperCase() &&
           char !== char.toLowerCase()) {

            result += char.toLowerCase();
        }
        else if(char === char.toLowerCase() &&
                char !== char.toUpperCase()) {

            result += char.toUpperCase();
        }
        else {
            result += char;
        }
    }

    document.getElementById("result").innerHTML =
        `🔄 ${result}`;
}

function clearResult() {

    document.getElementById("textInput").value = "";
    document.getElementById("result").innerHTML = "";
}

document.getElementById("textInput")
.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        invertCase();
    }
});