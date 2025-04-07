document.addEventListener("DOMContentLoaded", function(){
let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "purple", "green"];

let Started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(Started == false){
        console.log("Game started");
        started = true ;

        levelUp();
    }
});
     function gameFlash(btn){
        btn.classList.add("flash");
        setTimeout(function(){
            btn.classList.remove("flash");
        }, 250);
     }
     function userFlash(btn){
        btn.classList.add("userFlash");
        setTimeout(function(){
         btn.classList.remove("userFlash");
        }, 250);
     }

    function levelUp(){
        level++;
        h2.innerText = `level ${level}`;

        let randIndx = Math.floor(Math.random()*4);
        let randColor = btns[randIndx];
        let randBtn = document.querySelector(`.${randColor}`);

        gameFlash(randBtn);
    }
    function btnPress(){
        console.log(this);
        let btn = this;
        userFlash(btn);
    }

    let allBtns = document.querySelectorAll(".box");
    for(btn of allBtns){
        btn.addEventListener("click", btnPress)
    }
});