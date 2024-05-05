document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('yellow').onclick = partyYellow
document.getElementById('orange').onclick = partyOrange
document.getElementById('red').onclick = partyRed

function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function partyYellow() {
  document.querySelector('body').style.backgroundColor = 'rgb(255, 255, 0)'
  document.querySelector('body').style.color = 'white'
}
function partyOrange() {
  document.querySelector('body').style.backgroundColor = 'rgb(227, 151, 10)'
  document.querySelector('body').style.color = 'white'
}
function partyRed() {
  document.querySelector('body').style.backgroundColor = 'rgb(220, 9, 9)'
  document.querySelector('body').style.color = 'white'
}