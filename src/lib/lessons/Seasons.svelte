<script>
  import Icon from '../Icon.svelte'
  import Snowdrop from './seasons/Snowdrop.svelte'


  let prefixImage = '/src/assets/icons/season/'
  let suffixImage = '.png'
  let seasons = [
    {
      id: 1,
      en: 'Spring',
      kr: '봄',
      image: prefixImage + 'spring' + suffixImage,
      component: null,
    },
    {
      id: 2,
      en: 'Summer',
      kr: '여름',
      image: prefixImage + 'summer' + suffixImage,
      component: null,
    },
    {
      id: 3,
      en: 'Automn',
      kr: '가을',
      image: prefixImage + 'automn' + suffixImage,
      component: null,
    },
    {
      id: 4,
      en: 'Winter',
      kr: '겨울',
      image: prefixImage + 'winter' + suffixImage,
      component: Snowdrop,
    },
  ]
  let activeSeason = null
  function selectSeason (season) {
    pronounceKorean(season.kr)
    activeSeason = season
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

{#if activeSeason !== null}
  <svelte:component this={activeSeason.component}/>
{/if}
<div id="container">
  <h1>
      Seasons - 계절
      <button class="sound" on:click={() => pronounceKorean('계절')}>
      <Icon name='volume-2' height="20px" width="20px" />
    </button>
  </h1>
  <div id="grid">
    {#each seasons as season}
      <div class="{(activeSeason?.id === season.id) ? 'highlight season' : 'season'}" on:click={() => selectSeason(season)}>
        <img src={season.image} alt={season.en} style="height: 100px"/>
        <br><span class="korean">{season.kr}</span>
      </div>
    {/each}
  </div>
</div>

<style>
  h1 {
    align-items: center;
  }
  #container {
    margin: auto;
    margin-top: -50px;
    max-width: 1000px;
  }
  #grid {
    max-width: 600px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .season {
    padding: 5%;
    margin: 5%;
    cursor: pointer;
    border-radius: 5px;
    background-color: #39426e;
  }

  .season:hover {
    background-color: #eebbc3;
    color: black;
  }

  .highlight {
    background-color: #96a1d6;
    color: black;
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

  .korean {
    font-family: BinggraeSamanco;
    font-size: 2.5em;
  }
</style>
