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

const playGame=(userChoice)=>{
    console.log('you choose =', userChoice);
const compChoice= genCompChoice();
console.log('comp choose =', compChoice);
}

choices.forEach((choice) =>{

choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
})

});
