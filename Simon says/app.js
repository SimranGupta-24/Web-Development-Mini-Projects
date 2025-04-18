let gameSeq = [];
let userSeq = [];
let highScore=0;
let btns=["red","yellow","green","purple"];
let h3=document.querySelector("h3");

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

//game start
//should press on doc  only not console
document.addEventListener("keypress", function() { 
    if(started == false){
        console.log("Game started");
        started = true;
        h3.innerText=`Highest Score: ${highScore}`
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;



    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];

    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);  
}

function checkAns(idx) {  //gameseq size == level
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `game over! Your Score is <b>${level}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"; 
        },150);
        if(level>highScore){
            highScore=level;
        }
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor); 
    //.log(userSeq);
    checkAns(userSeq.length-1);
}
let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    level=0;
    userSeq=[];
    gameSeq=[];
    h3.innerText=`Highest Score is ${highScore}`;
}

