// let user =document.getElementById('user');
// let userscore = 0;
// let compscore = 0;
// const choices = document.querySelectorAll('.choice');

// choices.forEach((choice) =>{
//     choice.addEventListener('click', () =>{
// const userChoice= choice.getAttribute('id');
// console.log('your choose', userChoice);  


// })
// })



// -----------first time -----------------
// let userScore=0;
// let compScore=0;

// const choices = document.querySelectorAll('.choice');

// choices.forEach((choice) =>{
// choice.addEventListener("click", ()=>{
//     const userChoice = choice.getAttribute('id');
//     console.log('your choose', userChoice);
    
// })

// })



let userScore=0;
let computerScore=0;


const userScorePara=document.querySelector('#user-score');
const computerScorePara=document.querySelector('#comp-score');

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice=()=>{
const options = ["rock","paper","scissors"];
const randomNum = Math.floor(Math.random()*3);
return options[randomNum];
}

const Draw=()=>{
    msg.innerText = "Draw";
    msg.style.backgroundColor = "grey";

    console.log('draw');
};

const showWinner=(userWinner,userChoice,compChoice)=>{
   if(userWinner){
    userScore++
    userScorePara.innerText = userScore;
    msg.innerText = `You win your ${userChoice} beats ${compChoice} !`;
    msg.style.backgroundColor = "green";
    console.log('user wins');

   }
   else{
     computerScore++;
     computerScorePara.innerText = computerScore;
     msg.innerText = `You Loose ${compChoice} beats ${userChoice} `;
     msg.style.backgroundColor = "Red";
     console.log('user loose');
   }
}
const playGame=(userChoice)=>{
    console.log('you choose =', userChoice);
    const compChoice= genCompChoice();
    console.log('comp choose =', compChoice);


    if (userChoice === compChoice){
     Draw();
    }
    else{
     let userWinner =true;
        if (userChoice === "rock")  {
        userWinner = compChoice === "paper" ? false : true;
    }
        else if (userChoice === "paper") {
            userWinner = compChoice === "scissors" ? false : true;

        }
        else{
           userWinner= compChoice === "rock" ? false : true;

        }
        showWinner(userWinner ,userChoice , compChoice);
      
    }

}


choices.forEach((choice) =>{

choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);

})

})




//-----------------final code ----------------