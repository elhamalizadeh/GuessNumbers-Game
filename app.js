var gameArea = document.querySelector(".game");
var button = document.querySelector("button");
//var correctnum = document.getElementById("correctnum");

let gamePlay = false;
button.addEventListener("click", function () {
  if (!gamePlay) {
    gamePlay = true;
    maker();
    button.innerHTML = "check combo";
  } else {
    const numbers = document.querySelectorAll(".numb");
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].value == numbers[i].correct) {
        console.log("correct");
      } else {
        console.log("Wrong");
      }
    }

   /* for (let y = 0; y < numbers.length; y++) {
      correctnum.innerHTML = numbers[y].correct + "/";
    }*/
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
