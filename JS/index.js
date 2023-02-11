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
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    clearTimeout(timeTimerOut)
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
    clearTimeout(timeTimerOut)
    resetTimer()
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
      

        if ( minutesDisplay.textContent && secondsDisplay.textContent <= 0 ) {
            minutesDisplay.textContent = 0
            secondsDisplay.textContent = 0
            return
        }
        countDown()

    }, 1000)
}

const rainSoundsButton = document.querySelector('.rainSoundsButton')
const forestSoundsButton = document.querySelector('.forestSoundsButton')
const coffeShopSoundsButton = document.querySelector('.coffeShopSoundsButton')
const fireplaceSoundsButton = document.querySelector('.fireplaceSoundsButton')

const coffeShopSounds = new Audio("https://github.com/MatheusFelipe28/Focus-Time/blob/main/Sounds/coffeshop.wav?raw=true")
const rainSounds = new Audio("https://github.com/MatheusFelipe28/Focus-Time/blob/main/Sounds/rain.wav?raw=true")
const forestSounds = new Audio("https://github.com/MatheusFelipe28/Focus-Time/blob/main/Sounds/florest.wav?raw=true")
const fireplaceSounds = new Audio("https://github.com/MatheusFelipe28/Focus-Time/blob/main/Sounds/fireplace.wav?raw=true")

let isPlaying = false;
var buttons = [rainSoundsButton, forestSoundsButton, coffeShopSoundsButton, fireplaceSoundsButton];
var sounds = [rainSounds, forestSounds, coffeShopSounds, fireplaceSounds];
var currentSounds = null;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(i) {
        return function() {
            if (isPlaying && currentSounds === sounds[i]) {
                currentSounds.pause();
                isPlaying = false;
                buttons[i].style.background = "";
            } else {
                if (isPlaying) {
                    currentSounds.pause();
                }
                currentSounds = sounds[i]
                currentSounds.play()
                isPlaying = true;
                buttons[i].style.background = "#02799D";
            }
        }
    }(i))
}
