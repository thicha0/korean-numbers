<script>
  import Menu from './lib/Menu.svelte'
  import Home from './lib/Home.svelte'
  import WordList from './lib/WordList.svelte'
  import Lessons from './lib/Lessons.svelte'
  import Newsletter from './lib/Newsletter.svelte'
  import { activeMenu } from './store'
</script>

<main>
  <Menu />
  {#if $activeMenu === 2}
    <WordList />
  {:else if $activeMenu === 3}
    <Lessons />
  {:else if $activeMenu === 4}
    <Newsletter />
  {:else}
    <Home />
  {/if}
</main>

<style>
  :root {
    font-family: Arvo, sans-serif;
    background-color: #232946;
    padding: 0;
    margin: 0;
    color: white;
    overflow-x: hidden;
  }

  :global(body) {
    padding: 0;
    margin: 0;
  }

  main {
    text-align: center;
    padding: 0;
    margin: 0;
    font-size: 1.2em;
  }

  @font-face {
    font-family: HoonWhiteCat;
    src: url('./assets/fonts/HoonWhiteCat.ttf');
  }

  @font-face {
    font-family: Arvo;
    src: url('./assets/fonts/Arvo-Regular.ttf');
  }

  @font-face {
    font-family: BinggraeSamanco;
    src: url('./assets/fonts/BinggraeSamanco.ttf');
  }

  :root::-webkit-scrollbar {
    width: 13px;
  }

  :root::-webkit-scrollbar-track {
    background: #dbbdbf;
    border-radius: 25px;
  }

  :root::-webkit-scrollbar-thumb {
    background: #db8888;
    border-radius: 25px;
  }
</style>
