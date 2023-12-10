let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const computerscore = document.querySelector("#comp-score")
const userScorepera = document.querySelector("#user-score")


const genCompChoice = function(compChoice){
//    rock paper scissior

const options = ["rock", "paper", "scissor"];
const randId = Math.floor(Math.random()*3);
return options[randId];
};

const drawGame = function(){
    console.log("game draw");
    msg.innerText = "Game was draw play again"
    msg.style.backgroundColor = "#081b31"
};

const showWinner = function(userWin, userChoice, compChoice){
    if(userWin){
        userScore ++ ;
        userScorepera.innerHTML = userScore;
        
        console.log(`you win `);
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }else{

        compScore ++ ;
        computerscore.innerHTML = compScore;

        console.log("you lose");
        msg.innerText = `you lost! computer's ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    };
};

const playGame = function(userChoice){
console.log("userchoise", userChoice);

const compChoice = genCompChoice();

console.log("compchoise", compChoice);

if(userChoice === compChoice){
drawGame()
}else{
    let userwin = true;

    if(userChoice === "rock"){
        //scissor, paper
        if(compChoice === paper){
            userwin = false
        }else{
            userwin = true;
        }

    //    userwin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
        // rock, sissor

       userWin = compChoice === "scissor" ? false : true;
    }else{
        //rock, paper

      userWin =  compChoice === "rock" ? false : true;
    };
    
    showWinner(userWin, userChoice, compChoice);
};
};

choices.forEach(function(choice){
    choice.addEventListener("click", function(){
        const userChoice = choice.getAttribute("id")
        // console.log("userChoice", userChoice);
        playGame(userChoice)
    });
});