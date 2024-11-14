function multiply() {
    var getal = document.getElementById("getal").value;
    var getal2 = document.getElementById("getal2").value;
    if (getal > 0  &getal2 > 0) {
        var antwoord = getal * getal2;
        document.getElementById("antwoord").innerHTML = "Het antwoord is: " + antwoord;
    } 
    else {
        document.getElementById("antwoord").innerHTML = "Het getal is te laag";
    }
}
function divide() {
    var getal = document.getElementById("getal").value;
    var getal2 = document.getElementById("getal2").value;
    if (getal > 0  & getal2 > 0) {
        var antwoord = getal / getal2;
        document.getElementById("antwoord").innerHTML = "Het antwoord is: " + antwoord;
    } 
    else {
        document.getElementById("antwoord").innerHTML = "Het getal is te laag";
    }
}

function add() {
    var getal = document.getElementById("getal").value;
    var getal2 = document.getElementById("getal2").value;
    if (getal > 0  & getal2 > 0) {
        var antwoord = +getal + +getal2;
        document.getElementById("antwoord").innerHTML = "Het antwoord is: " + antwoord;
    } 
    else {
        document.getElementById("antwoord").innerHTML = "Het getal is te laag";
    }
}

function minus() {
    var getal = document.getElementById("getal").value;
    var getal2 = document.getElementById("getal2").value;
    if (getal > 0  &getal2 > 0) {
        var antwoord = getal - getal2;
        document.getElementById("antwoord").innerHTML = "Het antwoord is: " + antwoord;
    } 
    else {
        document.getElementById("antwoord").innerHTML = "Het getal is te laag";
    }
}


