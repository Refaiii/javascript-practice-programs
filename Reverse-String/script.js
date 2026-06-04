function reverseString() {

    let text = document.getElementById("textInput").value;

    let reversed = "";

    for(let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }

    document.getElementById("result").innerHTML =
        `Reversed String: ${reversed}`;
}

function clearResult() {
    document.getElementById("textInput").value = "";
    document.getElementById("result").innerHTML = "";
}

document.getElementById("textInput").addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        reverseString();
    }
});