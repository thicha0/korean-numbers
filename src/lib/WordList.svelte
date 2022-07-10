<script>
  import IntersectionObserver from "svelte-intersection-observer"

  let words = [
    {
      id: 1,
      kr: '것',
      en: 'A thing or an object'
    },
    {
      id: 2,
      kr: '하다',
      en: 'To do'
    },
    {
      id: 3,
      kr: '있다',
      en: 'To be'
    },
    {
      id: 4,
      kr: '수',
      en: 'Way, method, number'
    },
    {
      id: 5,
      kr: '나',
      en: 'Je'
    },
    {
      id: 6,
      kr: '것',
      en: 'A thing or an object'
    },
    {
      id: 7,
      kr: '하다',
      en: 'To do'
    },
    {
      id: 8,
      kr: '있다',
      en: 'To be'
    },
    {
      id: 9,
      kr: '수',
      en: 'Way, method, number'
    },
    {
      id: 10,
      kr: '나',
      en: 'Je'
    },
    {
      id: 11,
      kr: '것',
      en: 'A thing or an object'
    },
    {
      id: 12,
      kr: '하다',
      en: 'To do'
    },
    {
      id: 13,
      kr: '있다',
      en: 'To be'
    },
    {
      id: 14,
      kr: '수',
      en: 'Way, method, number'
    },
    {
      id: 15,
      kr: '나',
      en: 'Je'
    },
    {
      id: 16,
      kr: '것',
      en: 'A thing or an object'
    },
    {
      id: 17,
      kr: '하다',
      en: 'To do'
    },
    {
      id: 18,
      kr: '있다',
      en: 'To be'
    },
    {
      id: 19,
      kr: '수',
      en: 'Way, method, number'
    },
    {
      id: 20,
      kr: '나',
      en: 'test'
    },
  ]

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
    speechSynthesis.speak(toSpeak)
  }

  let showWords = new Array(words.length).fill(false)
  let rows = new Array(words.length)
</script>

<form on:submit={jumpToSearch}>
  Jump to word number
  <input type="number" bind:value={searchValue} min="1" placeholder="1" />
  <button type="submit" id="jump">
    Jump !
  </button>
</form>

<!-- TODO add checkbox, hide translation -->

<div id="container">
  <table style="width: 95%">
    {#each words as word, index}
    <IntersectionObserver element={rows[index]} once bind:intersecting={showWords[index]}>
      <tr id="word-{word.id}" bind:this={rows[index]} class="{(selected === word.id) ? 'highlight' : ''}" style="opacity: {showWords[index] ? '1' : '0'} !important">
        <td style="width: 10%">
          {word.id}
        </td>
        <td style="width: 35%">
          <button class="sound" on:click={() => pronounceKorean(word.kr)}>
            🔊
          </button>
          {word.kr}
        </td>
        <td style="width: 5%">
          {word.en}
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
  }

  tr {
    background-color: #f0e9e9;
    transition: all 1s ease;
  }

  td {
    padding: 10px 20px;
    text-align: left;
  }

  .sound {
    background-color: #D3CEDF;
    padding: 5px;
    border-radius: 2em;
    border: none;
    cursor: pointer;
  }

  .sound:hover {
    background-color: #abc0d4;
  }

  form {
    margin: 30px 0;
  }

  input {
    width: 50px;
    padding: 1em;
    border-radius: 2em;
    border: none;
    margin: 0 10px;
    font-size: 0.8em;
  }

  #jump {
    padding: 1em 2em;
    border-radius: 2em;
    background-color: #db8888;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 0.8em;
  }

  #jump:hover {
    filter: brightness(90%);
  }

  #container {
    width: 70%;
    height: 60vh;
    overflow: auto;
    margin: auto;
    scroll-behavior: smooth;
  }

  .highlight {
    background-color: #c1d0de;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #dbbdbf;
    border-radius: 25px;
  }

  ::-webkit-scrollbar-thumb {
    background: #db8888;
    border-radius: 25px;
  }
</style>
