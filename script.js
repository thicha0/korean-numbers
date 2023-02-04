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

let sinokorean = true
const switchInput = document.querySelector('.checkbox')
const skTitle = document.querySelector('.sinokorean')
const kTitle = document.querySelector('.korean')
switchInput.addEventListener('change', () => {
    sinokorean = !sinokorean
    show.classList.add('hide')
    setTimeout(() => {
        show.textContent = null
    }, 200)
    
    if (sinokorean) {
        skTitle.classList.add('active-method')
        kTitle.classList.remove('active-method')
    } else {
        kTitle.classList.add('active-method')
        skTitle.classList.remove('active-method')
    }
})

let hand
const padHand = document.querySelector('.pad-hand')
const show = document.querySelector('.show')

function speakNumber(number) {
    hand.classList.add('hide')
    show.classList.add('hide')
    padHand.classList.add('hide')
    
    const key = document.querySelector(`.key[data-key="${number.value}"]`)
    if (key.classList.contains('active')) return
    key.classList.add('active')
    const toPronounce = sinokorean ? number.sinokorean : number.korean
    pronounceKorean(toPronounce)
    setTimeout(() => {
        show.textContent = toPronounce
        show.classList.remove('hide')
        hand.style.display = 'none'
        padHand.style.display = 'none'
    }, 200)
    setTimeout(function () {
        key.classList.remove('active')
    }, 500)
}

let waiting = null

function showHelpers() {
    hand.style.display = 'flex'
    hand.classList.remove('hide')

    padHand.style.display = 'flex'
    padHand.classList.remove('hide')
}

function keyPressed(e) {
    if (waiting) {
        clearTimeout(waiting)
    }
    waiting = setTimeout(showHelpers, 8000)
    let found = numbers.find(number => number.value === +e.key)
    if (found) {
        speakNumber(found)
    }
}

function keyClicked(e) {
    if (waiting) {
        clearTimeout(waiting)
    }
    waiting = setTimeout(showHelpers, 8000)
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
