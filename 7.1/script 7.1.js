let budget = 150;
let product = 120;

if (product < budget){
    document.getElementById("tekst").style.color = "green";
    document.getElementById("tekst").textContent = "U heeft genoeg geld!";
    alert("U heeft genoeg geld!");
}
else{
    document.getElementById("tekst").style.color = "red";
    document.getElementById("tekst").textContent = "U heeft niet genoeg geld!";
    alert("U heeft niet genoeg geld!");
}