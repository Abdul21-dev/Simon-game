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
    //  function userFlash(btn){
    //     btn.classList.add("userFlash");
    //     setTimeout(function(){
    //      btn.classList.remove("userFlash");
    //     }, 250);
    //  }

    function levelUp(){
        userSeq = [];
        level++;
        h2.innerText = `level ${level}`;

        let randIndx = Math.floor(Math.random()*4);
        let randColor = btns[randIndx];
        let randBtn = document.querySelector(`.${randColor}`);
        gameSeq.push(randColor);
        gameFlash(randBtn);
    }

    function checkAns(idx){
        if(userSeq[idx] === gameSeq[idx]){
            if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1200);
            }
        }else{
            h2.innerHTML = `Game Over your score is <b>${level}<b> <br> <b>Press any key to start again<b>`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor = "white"}
                , 200);
            reset();
        }
    };
    function btnPress(){
        console.log(this);
        let btn = this;
        gameFlash(btn);

        userColor = btn.getAttribute("id");
        userSeq.push(userColor);
        checkAns(userSeq.length-1);
    }

    let allBtns = document.querySelectorAll(".box");
    for(btn of allBtns){
        btn.addEventListener("click", btnPress)
    }

   function reset(){
        gameSeq = [];
        userSeq = [];
        level = 0;
        started = false;
    }
});