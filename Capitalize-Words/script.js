function capitalizeWords() {

    let sentence =
        document.getElementById("textInput").value;

    let words = sentence.split(" ");

    let result = "";

    for(let i = 0; i < words.length; i++) {

        if(words[i] !== "") {

            result +=
                words[i].charAt(0).toUpperCase() +
                words[i].slice(1).toLowerCase() +
                " ";
        }
    }

    document.getElementById("result").innerHTML =
        result.trim();
}

function clearResult() {

    document.getElementById("textInput").value = "";
    document.getElementById("result").innerHTML = "";
}

document.getElementById("textInput")
.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        capitalizeWords();
    }
});