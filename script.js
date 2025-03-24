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



userScore=0;
computerScore=0;

const choices=document.querySelectorAll(".choice");

const genCompChoice=()=>{
const options = ["rock","paper","scissors"];
const randomNum = Math.floor(Math.random()*3);
return options[randomNum];
}

const Draw=()=>{
    console.log('draw');
};

const showWinner=(userWinner)=>{
   if(userWinner){
       console.log('user wins');
   }
   else{
       console.log('computer wins');
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
        showWinner(userWinner)
      
    }

}


choices.forEach((choice) =>{

choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);

})

})
