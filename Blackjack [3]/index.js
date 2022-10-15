var text = document.getElementById("text")
var mScore = document.getElementById("mertScore")
var mSum = document.getElementById("mertSum")
var cScore = document.getElementById("computerScore")
var money = document.getElementById("money")
let raNum = 0
let raNum1 = 0
let sum = 0
function randomCard(){
  var randomNumber = Math.floor(Math.random()*13 + 2)
    if(randomNumber >= 12){
      randomNumber= 10
    }
  return(randomNumber)
}
function start(){
let firstCard = randomCard()
let secondCard = randomCard()
        mScore.innerHTML ="Your Cards: " +firstCard+" - "+secondCard
        text.innerHTML = "Do you want to draw a new card?"
        if((firstCard+secondCard) == 21){
        text.innerHTML = "Congratulations! Blackjack!"
      }
        sum = firstCard + secondCard
        mSum.innerHTML =firstCard + secondCard
      }




   function asd(){
     if(sum<21){
       var raNum2 = Math.floor(Math.random()*13 + 2)
       if(raNum2 >= 12){
         raNum2= 10
       }
     mScore.innerHTML += " - "+ raNum2
     sum += raNum2
     mSum.innerHTML = sum
      if(sum==21){
        text.innerHTML = "Your score is maximum"
      }else if(sum>21){
          text.innerHTML ="You're out of the game!"
      }
     }



}
