let homeScore = parseInt(document.getElementById("home").innerHTML)
let guestScore = parseInt(document.getElementById("away").innerHTML)


function hOne(){
    a = homeScore += 1
    document.getElementById("home").innerHTML = a
}
function hTwo(){
    a = homeScore += 2
    document.getElementById("home").innerHTML = a
}
function hThree(){
    a = homeScore += 3
    document.getElementById("home").innerHTML = a
}
function gOne(){
    a = guestScore += 1
    document.getElementById("away").innerHTML = a
}
function gTwo(){
    a = guestScore += 2
    document.getElementById("away").innerHTML = a
}
function gThree(){
    a = guestScore += 3
    document.getElementById("away").innerHTML = a
}