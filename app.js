var gameArea = document.querySelector(".game");
var button = document.querySelector("button");

let gamePlay = false;
button.addEventListener("click",function(){
    if (!gamePlay){
        gamePlay = true;
        maker();
        button.innerHTML="check combo";
    }
    else{
        console.log("Checker");
    }
});

function maker(){
    for (var x = 0; x < 6; x++){
    let el = document.createElement("input");
    el.setAttribute("type","number");
    el.max = 9;
    el.min = 0;
    el.style.width = "50px";
    gameArea.appendChild(el);
    el.value= 0;
    el.size = 1;
    el.classList.add("numb");
    el.order = x;
    }
}

