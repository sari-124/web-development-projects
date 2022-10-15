let mToF = document.getElementById("meterToFeet")
let lToG = document.getElementById("literToGaloons")
let kToP = document.getElementById("kilosToPounds")
let value = document.getElementById("inp")
let butn = document.getElementById("butn")

const meterToFeet = 3.281
const literToGaloon = 0.264
const kilogramToPound = 2.204

butn.addEventListener("click",function(){
  mToF.textContent = `meter = ${(value.value * meterToFeet).toFixed(2)} feet | feet = ${(value.value /meterToFeet).toFixed(2)} meter`
  lToG.textContent = `liter = ${(value.value * literToGaloon).toFixed(2)} galoon | galoon = ${(value.value /literToGaloon).toFixed(2)} liter`
  kToP.textContent = `kilos = ${(value.value * kilogramToPound).toFixed(2)} pounds | pounds = ${(value.value /kilogramToPound).toFixed(2)} kilos`
})
