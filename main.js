// When clicks on button set a variable userChoice
// create a function that uses Math.floor(Math.random() * 3) computerChoice
// 0..2 would be one of the game things
// for each possiblity compare UserChoice  and ComputerChoice using if statment to see winneer 




var rock = document.getElementById('Rock');
var paper = document.getElementById('Paper')
var scissors = document.getElementById('Scissors')
var userChoice = ''
var computerChoice = Math.floor(Math.random() * 3)
var userScore = 0
var computerScore = 0
var tie = 0

rock.addEventListener('click', function() {
  UserChoice = 'rock'
  computerChoice = Math.floor(Math.random() * 3)
  cToS()
  counter()
  console.log(UserChoice)
  console.log(computerChoice)
  console.log(userScore)
  console.log(computerScore)
  console.log(tie)
})

paper.addEventListener('click', function() {
  UserChoice = 'paper'
  computerChoice = Math.floor(Math.random() * 3)
  cToS()
  counter()
  console.log(userScore)
  console.log(computerScore)
  console.log(tie)

  })

  scissors.addEventListener('click', function() {
    UserChoice = 'scissors'
    computerChoice = Math.floor(Math.random() * 3)
    cToS()
    counter()
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











function counter() {
  if (userChoice === 'rock' && computerChoice === 'rock') {
   return ++tie
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    return ++userScore
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    return ++computerScore
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    return ++computerScore
  } else if (userChoice === 'paper' && computerChoice === 'paper') {
    return ++tie
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    return ++userChoice
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    return ++userChoice
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    return ++computerScore
  } else if (userChoice === 'scissors' && computerChoice === 'scissors') {
    return ++tie
  } 
} 
  



