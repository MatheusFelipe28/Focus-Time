const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const initialMinutes = minutesDisplay.textContent
const initialSecond = secondsDisplay.textContent
let timeTimerOut
let newMinutes;

buttonPlay.addEventListener('click', function() {
    countDown()
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
    clearTimeout(timeTimerOut)
})

function countDown() {
    timeTimerOut = setTimeout(function(){
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        if (seconds <= 0) {
            seconds = 59
            minutes--
        } else {
            seconds--
        }

        minutesDisplay.textContent = String(minutes)
        secondsDisplay.textContent = String(seconds)
        countDown()

    }, 1000)
}

const rainSounds = new Audio("https://github.com/AlexJjunio/my-projects/raw/main/pomodoro-2.0/sounds/rain.wav?raw=true")
const forestSounds = new Audio("https://github.com/AlexJjunio/my-projects/raw/main/pomodoro-2.0/sounds/florest.wav?raw=true")
const coffeShopSounds = new Audio("https://github.com/AlexJjunio/my-projects/raw/main/pomodoro-2.0/sounds/coffeshop.wav?raw=true")
const fireplaceSounds = new Audio("https://github.com/AlexJjunio/my-projects/raw/main/pomodoro-2.0/sounds/fireplace.wav?raw=true")

const rainSoundsButton = document.querySelector('.rainSoundsButton')
const forestSoundsButton = document.querySelector('.forestSoundsButton')
const coffeShopSoundsButton = document.querySelector('.coffeShopSoundsButton')
const fireplaceSoundsButton = document.querySelector('.fireplaceSoundsButton')
