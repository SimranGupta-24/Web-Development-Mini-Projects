const range=prompt("Enter the range in which you want to generate the numbers");
let num= Math.floor(Math.random() * range) +1;
let guess=prompt("Enter your guess");
while(guess!=num && guess!="quit"){
    console.log("Wrong guess. Try again!!");
    if(guess > num){
        console.log("The entered number is large give a smaller number");
    }else{
        console.log("The entered number is small give a larger number");
    }
    guess=prompt("Enter your guess");
}
if(guess == num){
    console.log("Congrats!! You Win");
}else{
    console.log("Game Over.Thanks for trying <3");
}