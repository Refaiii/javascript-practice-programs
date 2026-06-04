function checkPalindrome() {

    let word = document
        .getElementById("wordInput")
        .value
        .toLowerCase();

    let reversed = "";

    for(let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }

    let result = document.getElementById("result");

    if(word === reversed) {
        result.innerHTML = "Palindrome ✅";
        result.className = "success";
    }
    else {
        result.innerHTML = "Not a Palindrome ❌";
        result.className = "error";
    }
}

function clearResult() {
    document.getElementById("wordInput").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").className = "";
}

document.getElementById("wordInput")
.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        checkPalindrome();
    }
});