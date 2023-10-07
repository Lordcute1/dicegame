var randomNUmber1 = 1 + Math.floor(Math.random() * 6);
    if (randomNUmber1 === 1) {
        document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
    } else if (randomNUmber1 === 2) {
         document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
    } else if (randomNUmber1 === 3) {
        document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
    } else if (randomNUmber1 === 4) {
        document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
    } else if (randomNUmber1 === 5) {
     document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
    } else {
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
    }

var randomNUmber2 = 1 + Math.floor(Math.random() * 6);
    if (randomNUmber2 === 1) {
        document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
    } else if (randomNUmber2 === 2) {
         document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
    } else if (randomNUmber2 === 3) {
        document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
    } else if (randomNUmber2 === 4) {
        document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
    } else if (randomNUmber2 === 5) {
     document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
    } else {
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
    }

if (randomNUmber1 > randomNUmber2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
} else if (randomNUmber1 < randomNUmber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
} else {
    document.querySelector("h1").textContent = "Draw!";
}