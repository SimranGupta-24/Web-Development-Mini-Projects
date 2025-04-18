let h4 = document.querySelector("h4");

window.addEventListener("load",()=>{
    const range=prompt("Enter the range in which you want to generate the numbers");
let num= Math.floor(Math.random() * range) +1;
let guess=prompt("Enter your guess. Press quit to exit");
while(guess!=num && guess!="quit"){
    //console.log("Wrong guess. Try again!!");
    if(guess > num){
        //console.log("The entered number is large give a smaller number");
        guess=prompt("The entered number is very large give a smaller number. Press quit to exit");
    }else{
        guess=prompt("The entered number is small give a larger number. Press quit to exit");
    }
    //guess=prompt("Enter your guess");
}
if(guess == num){
    h4.innerText = "Congrats You Win!!! &hearts;"
}else{
    h4.innerHTML = "Game Over!! Thanks for Playing &hearts;"
}
})