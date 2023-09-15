const timerText = document.querySelector(".text-time")
const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
const restart = document.querySelector(".restart")
let timerStar
let timer = 1

function startTime(){

    if(!timerStar){
        timerStar = true

        timerStar = setInterval(() => {
             timerText.innerHTML = timer++
         }, 1000);
    }

}

function stopTime() {
    clearInterval(timerStar)
    timerStar = false
}

function restartTime() {
    stopTime()
    timer = 0
    timerText.innerHTML = 0
    timerStar = false
}


start.addEventListener('click', startTime)
stop.addEventListener('click', stopTime)
restart.addEventListener('click', restartTime)