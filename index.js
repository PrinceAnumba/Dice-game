var random = Math.random() * 6;
var randomNumber = Math.floor(random) + 1;

document.getElementsByTagName("img")[0].setAttribute("src","./images/dice"+randomNumber+".png");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.getElementsByTagName("img")[1].setAttribute("src","./images/dice"+randomNumber2+".png");

function winner() {
    if (randomNumber > randomNumber2) {
        document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins";
    }
    else if (randomNumber < randomNumber2) {
        document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins";
    }
    else {
        document.getElementsByTagName("h1")[0].innerHTML = "It's a draw";
    }

}
winner();