// alert("test working !");
// [1,6]
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var imgSet1 = "images/dice" + randomNumber1 + ".png";

// left dice [0] 
// right dice [1]
var leftDice = document.querySelectorAll("img")[0];
leftDice.setAttribute("src", imgSet1);


var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var imgSet2 = "images/dice" + randomNumber2 + ".png";
var rightDice = document.querySelectorAll("img")[1];
rightDice.setAttribute("src", imgSet2);


// refresh me to display the winner 
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🧡 player 1 wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🦄 player2 wins";
} else {
    document.querySelector.innerHTML = "👽 draws";
}
