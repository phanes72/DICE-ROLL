var randomNumber1 = Math.floor(Math.random() * 6) + 1;
dice1 = "/images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", dice1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
dice2 = "/images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", dice2);


var heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2){
    heading.textContent = "🏆 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2){
    heading.textContent = "Player 2 Wins! 🏆";
} else {
    heading.textContent = "Draw!";
}
