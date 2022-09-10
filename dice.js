// Generating random number from 1 to 6
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

document.querySelector(".dice .img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

// Generating random number from 1 to 6
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

document.querySelector(".dice .img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";

}
else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";

}

else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";

}