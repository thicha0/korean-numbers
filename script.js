// Numbers
const numbers = [
    {
    value: 1,
    sinokorean: '일',
    korean: '하나',
    },
    {
    value: 2,
    sinokorean: '이',
    korean: '둘',
    },
    {
    value: 3,
    sinokorean: '삼',
    korean: '셋',
    },
    {
    value: 4,
    sinokorean: '사',
    korean: '넷',
    },
    {
    value: 5,
    sinokorean: '오',
    korean: '다섯',
    },
    {
    value: 6,
    sinokorean: '육',
    korean: '여섯',
    },
    {
    value: 7,
    sinokorean: '칠',
    korean: '일곱',
    },
    {
    value: 8,
    sinokorean: '팔',
    korean: '여덟',
    },
    {
    value: 9,
    sinokorean: '구',
    korean: '아홉',
    }
]

// Speech Synthesis
let speechSynthesis = window.speechSynthesis
let koreanVoice = null

function getKoreanVoice() {
    if (koreanVoice) return koreanVoice
    speechSynthesis = window.speechSynthesis
    speechSynthesis.getVoices().forEach((v)=>{
    if (v.lang == 'ko-KR') {
        koreanVoice = v
    }
    })
    return getKoreanVoice()
}

function pronounceKorean(text) {
    let toSpeak = new SpeechSynthesisUtterance(text)
    const voice = getKoreanVoice()
    toSpeak.voice = voice
    toSpeak.volume = 1
    speechSynthesis.cancel()
    speechSynthesis.speak(toSpeak)
}

let sinokorean = false
let hand
const show = document.querySelector('.show')

function speakNumber(number) {
    hand.classList.add('hide')
    setTimeout(() => {
        hand.style.display = 'none'
    }, 500)
    const key = document.querySelector(`.key[data-key="${number.value}"]`)
    if (key.classList.contains('active')) return
    key.classList.add('active')
    const toPronounce = sinokorean ? number.sinokorean : number.korean
    pronounceKorean(toPronounce)
    show.textContent = toPronounce
    setTimeout(function () {
        key.classList.remove('active')
    }, 500)
}

function keyPressed(e) {
    let found = numbers.find(number => number.value === +e.key)
    if (found) {
        speakNumber(found)
    }
}

function keyClicked(e) {
    let found = numbers.find(number => number.value === +this.dataset.key)
    if (found) {
        speakNumber(found)
    }
}

document.addEventListener('keypress', keyPressed);

const keys = document.querySelector('.keys')

function displayKeys () {
    display = ''
    numbers.forEach(n => {
        display += `<div data-key="${n.value}" class="key">${n.value}`
        if (n.value === 6) {
            display += `<img class="hand" src="clicking-hand.svg" alt="Cliking hand" />`
        }
        display += `</div>`
    })
    keys.innerHTML = display
    hand = document.querySelector('.hand')
    document.querySelectorAll('.key').forEach(key => key.addEventListener('click', keyClicked))
}

displayKeys()

