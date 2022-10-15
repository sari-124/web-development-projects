var incValue = document.getElementById("valueOfTotal")
var asd = document.getElementById("resul")
var sumValue = 0


function incfunc() {
sumValue += 1
incValue.innerHTML = sumValue

}

function savfunc() {
asd.innerHTML += sumValue + " - "
sumValue = 0
incValue.innerHTML = 0
 }
