var homeScore = document.getElementById("homescore")
var guestScore = document.getElementById("guestscore")

var homescreen = 0
var guestscreen = 0

function aa(){
  homescreen += 1
  homeScore.innerHTML = homescreen
}
function as(){
  homescreen += 2
  homeScore.innerHTML = homescreen
}
function ad(){
  homescreen += 3
  homeScore.innerHTML = homescreen
}
function ba(){
  guestscreen += 1
  guestScore.innerHTML = guestscreen
}
function bs(){
  guestscreen += 2
  guestScore.innerHTML = guestscreen
}
function bd(){
  guestscreen += 3
  guestScore.innerHTML = guestscreen
}
