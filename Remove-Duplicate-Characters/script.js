function removeDuplicates() {

    let text =
        document.getElementById("textInput")
        .value
        .toLowerCase();

    let result = "";

    for(let i = 0; i < text.length; i++) {

        if(!result.includes(text[i])) {
            result += text[i];
        }
    }

    document.getElementById("result").innerHTML =
        `Result: ${result}`;
}

function clearResult() {

    document.getElementById("textInput").value = "";
    document.getElementById("result").innerHTML = "";
}

document.getElementById("textInput")
.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        removeDuplicates();
    }
});