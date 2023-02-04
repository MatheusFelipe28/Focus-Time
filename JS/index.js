const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const initialMinutes = minutesDisplay.textContent
const initialSecond = secondsDisplay.textContent
let newMinutes;

buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
})

buttonPause.addEventListener('click', function() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
})

buttonIncrease.addEventListener('click', function() {
    newMinutes = Number(minutesDisplay.textContent) +1
    minutesDisplay.textContent = String(newMinutes)

    if (minutesDisplay.textContent >= 60) {
        minutesDisplay.textContent = 60
        return
    } 
})

buttonDecrease.addEventListener('click', function() {
    newMinutes = Number(minutesDisplay.textContent) -1
    minutesDisplay.textContent = String(newMinutes)

    if (minutesDisplay.textContent <= 0) {
        minutesDisplay.textContent = 0
        return
    }
})

function resetTimer () {
    minutesDisplay.textContent = initialMinutes
    secondsDisplay.textContent = initialSecond
}

buttonStop.addEventListener('click', function() {
    resetTimer()
})

