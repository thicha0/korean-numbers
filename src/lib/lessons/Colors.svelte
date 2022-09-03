<script>
    import Icon from '../Icon.svelte'

    // https://www.facebook.com/learnkorean.together.ig.fbg.p.1307/photos/a.114018107063501/217479666717344/?type=3
    let colors = [
        {
            english: 'red',
            korean: '빨간색',
            short: '빨',
            ending: '간색',
            color: '#FF6663'
        },
        {
            english: 'orange',
            korean: '주황색',
            short: '주',
            ending: '황색',
            color: '#FEB144'
        },
        {
            english: 'yellow',
            korean: '노란색',
            short: '노',
            ending: '란색',
            color: ' #FDFD97'
        },
        {
            english: 'green',
            korean: '초록색',
            short: '초',
            ending: '록색',
            color: '#9EE09E'
        },
        {
            english: 'blue',
            korean: '파란색',
            short: '파',
            ending: '란색',
            color: '#9EC1CF'
        },
        {
            english: 'indigo',
            korean: '남색',
            short: '남',
            ending: '색',
            color: '#8686AF'
        },
        {
            english: 'purple',
            korean: '보라색',
            short: '보',
            ending: '라색',
            color: '#CC99C9'
        },
    ]

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

    let hovered = null

    function handleMouseOver(e, color) {
        hovered = color
    }

    function handleMouseOut(e, color) {
        hovered = null
    }
</script>

<div class="full" style={hovered ? 'background-color: ' + hovered.color : 'background-color: transparent'} />

<div id="container">
    <h1>
        Colors - 색
        <button class="sound" on:click={() => pronounceKorean('색')}>
        <Icon name='volume-2' height="20px" width="20px" />
      </button>
    </h1>
    <div id="colors">
        {#each colors as color}
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <div class="color" style={'background-color: ' + color.color} on:mouseover={e => handleMouseOver(e, color)} on:mouseout={e => handleMouseOut(e, color)}>
                <div class="short">{color.short}</div>
                <div class={hovered === color ? 'show' : 'transparent'}>{color.ending}</div>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">

#container {
    margin: auto;
    margin-top: -50px;
    max-width: 1000px;
}

#colors {
    display: flex;
    color: #232946;
    font-weight: bold;
    font-size: 2em;
    margin-top: 50px;
}

.color {
    min-width: 100px;
    width: 15%;
    padding-top: 50px;
    padding-bottom: 50px;
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

  .transparent {
    width: 50px;
    margin: auto;
    opacity: 0.1;
  }

  .show {
    width: 50px;
    margin: auto;
    opacity: 1;
  }

  .full {
    margin: auto;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    opacity: 0.5;
    transition: all 0.5s ease;
  }
</style>