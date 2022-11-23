var gameArea = document.querySelector(".game");
var button = document.querySelector("button");
const message = document.querySelector(".message");

let gamePlay = false;
let score = 0;
button.addEventListener("click", function () {
  if (!gamePlay) {
    gamePlay = true;
    score = 0;
    maker();
    button.innerHTML = "check combo";
  } else {
    const numbers = document.querySelectorAll(".numb");
    score++;
    message.innerHTML = "Guesses " + score;
    let winCondition = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].value == numbers[i].correct) {
        numbers[i].style.backgroundColor = "green";
        numbers[i].style.color = "white";
        winCondition++;
      } else {
        let color = numbers[i].value < numbers[i].correct ? "blue" : "red";
        numbers[i].style.backgroundColor = color;
        numbers[i].style.color = "black";
      }
      if (winCondition == numbers.length) {
        document.getElementById("demo").innerHTML="<h1>Congratulations <br/> You Win </h1>";
      }
    }
  }
});

function maker() {
  for (var x = 0; x < 3; x++) {
    let el = document.createElement("input");
    el.setAttribute("type", "number");
    el.max = 9;
    el.min = 0;
    el.style.width = "50px";
    gameArea.appendChild(el);
    el.correct = Math.floor(Math.random() * 10);
    console.log(el.correct);
    el.value = 0;
    el.size = 1;
    el.classList.add("numb");
    el.order = x;
  }
}
