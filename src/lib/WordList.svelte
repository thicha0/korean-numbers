<script>
  import IntersectionObserver from "svelte-intersection-observer"
  import Icon from './Icon.svelte'

  import { words } from '../assets/json/words.json'

  let searchValue = null
  let selected = null

  function jumpToSearch () {
    if (searchValue) {
      window.location.href = '#word-' + searchValue
      selected = searchValue
    }
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

  let showWords = new Array(words.length).fill(false)
  let rows = new Array(words.length)

  let hideTranslation = false
</script>

<form on:submit={jumpToSearch}>
  Jump to word number
  <input type="number" bind:value={searchValue} min="1" placeholder="1" />
  <button type="submit" id="jump">
    Jump !
  </button>
  <label class="checkbox">
    <input type="checkbox" bind:checked={hideTranslation}>
    <span class="checkmark"></span>
    Hide translations
  </label>
</form>

<div id="spacer">
  &nbsp;
</div>

<div id="container">
  <table style="width: 95%">
    {#each words as word, index}
    <IntersectionObserver element={rows[index]} once bind:intersecting={showWords[index]}>
      <tr id="word-{word.id}" bind:this={rows[index]} class="{(selected === word.id) ? 'highlight' : ''}" style="opacity: {showWords[index] ? '1' : '0'} !important">
        <td style="width: 10%">
          {word.id}
        </td>
        <td style="width: 35%">
          <button class="sound" on:click={() => pronounceKorean(word.korean)}>
            <Icon name='volume-2' height="20px" width="20px" />
          </button>
          {word.korean}
        </td>
        <td style="width: 55%" class:spoiler="{hideTranslation}">
          {word.english}
        </td>
      </tr>
    </IntersectionObserver>
    {/each}
  </table>
</div>

<style>
  table {
    margin-left: auto;
    margin-right: auto;
    border-collapse: separate; 
    border-spacing: 0 8px;
    margin-bottom: 25px;
  }

  tr {
    background-color: #39426e;
    transition: all 1s ease;
    scroll-margin-top: 180px;
  }

  td {
    padding: 10px 20px;
    text-align: left;
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

  form {
    margin: auto;
    padding-top: 20px;
    position: fixed;
    height: 55px;
    width: 100%;
    background-color: #121629;
    z-index: 99;
    border-bottom: 1px solid #eebbc3;
  }

  #spacer {
    height: 80px;
  }

  input {
    width: 50px;
    padding: 0.5em 1em;
    border-radius: 8px;
    border: none;
    margin: 0 10px;
    font-size: 0.8em;
  }

  #jump {
    padding: 0.5em 1em;
    border-radius: 8px;
    background-color: #eebbc3;
    color: #121629;
    border: none;
    cursor: pointer;
    font-size: 0.8em;
    font-family: Arvo;
    margin-right: 15px;
  }

  #jump:hover {
    filter: brightness(90%);
  }

  #container {
    max-width: 1000px;
    overflow: auto;
    margin: auto;
    scroll-behavior: smooth;
  }

  .highlight {
    background-color: #96a1d6;
  }

  input[type="checkbox"] {
    width: 1em;
    height: 1em;
  }

  .spoiler {
    filter: blur(8px);
  }

  .spoiler:hover {
    filter: blur(0px);
  }
</style>
