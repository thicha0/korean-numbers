<script>
import Icon from '../Icon.svelte'

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
        intervalId = null
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
    intervalId = null
  }
  let timer = 120,
    minutes,
    seconds;
  intervalId = setInterval(function () {
    seconds = timer % 60;
    minutes = (timer - seconds) / 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    currentTimer = minutes + ":" + seconds;

    if (timer > 0) {
      --timer;
    } else {
        // end
    }
  }, 1000);
}

let speechSynthesis = window.speechSynthesis
    let voice = null
    speechSynthesis.getVoices().forEach((v)=>{
        if (v.name === 'Microsoft Heami - Korean (Korean)') {
            voice = v
        }
    })
    function pronounceKorean(text) {
        let toSpeak = new SpeechSynthesisUtterance(text)
        toSpeak.voice = voice
        toSpeak.volume = 1
        speechSynthesis.speak(toSpeak)
    }
</script>

<div id="container">
  <h1>
      Numbers - 숫자
      <button class="sound" on:click={() => pronounceKorean('숫자')}>
      <Icon name='volume-2' height="20px" width="20px" />
    </button>
  </h1>
  <div id="quizz">
    {#if intervalId !== null}
    <p id="count">Question {numberCount} - Time remaining: {currentTimer}</p>
    <div id="app">{currentNumber}</div>
    <button id="reset" on:click={reset}>Reset</button>
    <button id="next" on:click={nextNumber}>Next</button>
    {:else}
    <button id="start" on:click={start}>Start</button>
    {/if}
  </div>
</div>

<style lang="scss">
#container {
    margin: auto;
    margin-top: -50px;
    max-width: 1000px;
}

.sound {
  background-color: #eebbc3;
  padding: 3px 4px 0px 4px;
  margin-right: 5px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.sound:hover {
  background-color: #abc0d4;
}

#quizz {
  font-size: 1.5em;
}

</style>
