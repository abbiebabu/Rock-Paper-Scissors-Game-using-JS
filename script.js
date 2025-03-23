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
choices.forEach((choice) =>{

choice.addEventListener("click",()=>{
    const usrChoice = choice.getAttribute("id");
    console.log('you choose', usrChoice);
    
})

});

// sas