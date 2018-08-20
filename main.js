// When clicks on button set a variable userChoice
// create a function that uses Math.floor(Math.random() * 3) computerChoice
// 0..2 would be one of the game things
// for each possiblity compare UserChoice  and ComputerChoice using if statment to see winneer 

var us = document.getElementById('you') 
var cs = document.getElementById('computer')
var te = document.getElementById('tie')
var dd = document.getElementById('other')


var rock = document.getElementById('Rock');
var paper = document.getElementById('Paper')
var scissors = document.getElementById('Scissors')
var userChoice = ''
var computerChoice = Math.floor(Math.random() * 3)
var userScore = 0
var computerScore = 0
var tie = 0


rock.addEventListener('click', function() {
  userChoice = 'rock'
  computerChoice = Math.floor(Math.random() * 3)
  cToS()
  counter(userChoice,computerChoice)
  us.innerHTML = userScore
  cs.innerHTML = computerScore
  te.innerHTML = tie
  dd.innerHTML = computerChoice
  console.log(userChoice)
  console.log(computerChoice)
  console.log(userScore)
  console.log(computerScore)
  console.log(tie)
})

paper.addEventListener('click', function() {
  userChoice = 'paper'
  computerChoice = Math.floor(Math.random() * 3)
  cToS()
  counter(userChoice, computerChoice)
  us.innerHTML = userScore
  cs.innerHTML = computerScore
  te.innerHTML = tie
  dd.innerHTML = computerChoice
  console.log(userChoice)
  console.log(computerChoice)
  console.log(userScore)
  console.log(computerScore)
  console.log(tie)

  })

  scissors.addEventListener('click', function() {
    userChoice = 'scissors'
    computerChoice = Math.floor(Math.random() * 3)
    cToS()
    counter(userChoice, computerChoice)
    us.innerHTML = userScore
    cs.innerHTML = computerScore
    te.innerHTML = tie
    dd.innerHTML = computerChoice
    console.log(userChoice)
    console.log(computerChoice)
    console.log(userScore)
    console.log(computerScore)
    console.log(tie)

    })

//   function rand() {
//   return Math.floor(Math.random() * 6)
//  }
//console.log(computerChoice)
    
function cToS() {
  switch(computerChoice) {
   case 0: 
    return computerChoice = 'rock'
   case 1: 
    return computerChoice = 'paper'
   case 2: 
    return computerChoice = 'scissors'
  } 
}











function counter(userChoice, computerChoice) {
  
  if (userChoice === 'rock' && computerChoice === 'rock') {
   return tie = ++tie
  
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    return userScore = ++userScore
   
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    return computerScore = ++computerScore
  
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    return computerScore = ++computerScore
  
  } else if (userChoice === 'paper' && computerChoice === 'paper') {
    return tie = ++tie
   
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    return userScore = ++userScore
   
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    return userScore = ++userScore
  
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    return computerScore = ++computerScore
  
  } else if (userChoice === 'scissors' && computerChoice === 'scissors') {
    return tie = ++tie
  } 
} 
  



