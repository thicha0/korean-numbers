<script>
let intervalId = null
let currentNumber = 0
let numberCount = 0
let currentTimer = '2:00'

function start() {
    startTimer();
    nextNumber()
}

function nextNumber() {
    if (intervalId) {
        let number = numberToSinoKorean(generateRandomNumber());
        currentNumber = number;
        numberCount++
    }
}

function reset() {
    currentNumber = 0;
    numberCount = 0;
    if (intervalId) {
        clearInterval(intervalId);
        currentTimer = '2:00';
    }
}

function generateRandomNumber(n = 1000) {
  return Math.floor(Math.random() * n);
}

function numberToSinoKorean(number) {
  let numbers = [
    "",
    "일",
    "이",
    "삼",
    "사",
    "오",
    "육",
    "칠",
    "팔",
    "구",
    "십"
  ];
  let digits = ("" + number).split("");
  let string = numbers[digits[0]];
  if (digits.length === 2) {
    string += numbers[10];
    string += numbers[digits[1]];
  }
  if (digits.length === 3) {
    string += "백";
    string += numbers[digits[1]];
    string += numbers[10];
    string += numbers[digits[2]];
  }
  return string;
}

function startTimer() {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
  let timer = 120,
    minutes,
    seconds;
  intervalId = setInterval(function () {
    seconds = timer % 60;
    minutes = (timer - seconds) / 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    console.log(minutes, seconds)
    currentTimer = minutes + ":" + seconds;

    if (timer > 0) {
      --timer;
    } else {
        // end
    }
  }, 1000);
}
</script>

<div id="app">{currentNumber}</div>
<button id="start" on:click={start}>Start</button>
<button id="reset" on:click={reset}>Reset</button>
<button id="next" on:click={nextNumber}>Next</button>
<div id="count">{numberCount}</div>

<span id="time">{currentTimer}</span>
