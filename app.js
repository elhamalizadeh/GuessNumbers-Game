var gameArea = document.querySelector(".game");
var button = document.querySelector("button");

let gamePlay = false;
button.addEventListener("click",function(){
    if (!gamePlay){
        gamePlay = true;
        //maker();
        alert("hello");
        button.innerHTML="check combo";
    }
    else{
        console.log("Checker");
    }
});

function maker(){
    let el = document.createElement("input");
    el.setAttribute("type","number");
    

}