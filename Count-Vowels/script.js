function countVowels() {

    let text = document.getElementById("textInput").value.toLowerCase();

    let count = 0;

    for(let i = 0; i < text.length; i++) {

        if(
            text[i] === "a" ||
            text[i] === "e" ||
            text[i] === "i" ||
            text[i] === "o" ||
            text[i] === "u"
        ){
            count++;
        }
    }

    document.getElementById("result").innerHTML =
        `Vowels: ${count}`;
}

function clearResult() {
    document.getElementById("textInput").value = "";
    document.getElementById("result").innerHTML = "";
}

document.getElementById("textInput").addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        countVowels();
    }
});