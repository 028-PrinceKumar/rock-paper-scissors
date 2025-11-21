let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice")
const msg= document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score")
const compScorepara=document.querySelector("#comp-score")
const genCompChoice=()=>{
    const options=["rock", "paper", "scissors"];
   const randIdx= Math.floor(Math.random()*3); 
   return options[randIdx];
};

const drawGame=()=>{
    console.log("Game was draw.");
    msg.innerText="Game Draw, Play again.";
    msg.style.backgroundColor="yellow";
};

const showWinner=(userWin, user_choice, compChoice)=>{
    if(userWin){
        console.log("You win!");
        msg.innerText=`You win! Your ${user_choice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScorepara.innerText=userScore;
        
    }
    else{
        console.log("You lose.")
        msg.innerText=`Computer win.${compChoice} beats your ${user_choice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compScorepara.innerText=compScore;

    }
}


const playGame=(user_choice)=>{
    console.log("User choice= ",user_choice);
    //Generate computer choice. 
    const compChoice=genCompChoice();
    console.log("Comp choice= ",compChoice); 
    if(user_choice===compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin=true;
        if(user_choice==="rock"){
            //scissors, paper will be computer choice.
            userwin=compChoice==="paper"?false:true;
        }
        else if(user_choice==="paper"){
            //scissors,rock will be computer choice.
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            //rock,paper
            userwin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,user_choice,compChoice);
    }

};
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const user_choice= choice.getAttribute("id")
        console.log("Choice was clicked ",user_choice)
        playGame(user_choice)

    })
})

