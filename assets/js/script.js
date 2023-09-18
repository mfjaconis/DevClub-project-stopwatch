const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const restart = document.querySelector(".restart");

let hourElement = document.querySelector("#hour");
let minuteElement = document.querySelector("#minute");
let secondElement = document.querySelector("#second");

let cronometro;
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

function startTime() {
  stopTime();

  cronometro = setInterval(() => {
    timer();
  }, 10);

  start.style.display = "none";
  stop.style.display = "inline-block";
}

function stopTime() {
  clearInterval(cronometro);

  start.style.display = "inline-block";
  stop.style.display = "none";
}

function restartTime() {
  stopTime();
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;

  hourElement.innerText = "00: ";
  minuteElement.innerText = "00: ";
  secondElement.innerText = "00";

  start.style.display = "inline-block";
  stop.style.display = "none";
}

function timer() {
  millisecond += 10;
  if (millisecond >= 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }

  hourElement.innerText = returnData(`${hour}: `);
  minuteElement.innerText = returnData(`${minute}: `);
  secondElement.innerText = returnData(`${second}`);
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`;
}

start.addEventListener("click", startTime);
stop.addEventListener("click", stopTime);
restart.addEventListener("click", restartTime);

