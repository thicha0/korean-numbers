<script>
  import Menu from './lib/Menu.svelte'
  import Home from './lib/Home.svelte'
  import WordList from './lib/WordList.svelte'
  import Newsletter from './lib/Newsletter.svelte'
  import { activeMenu } from './store'
</script>

<main>
  <Menu />
  {#if $activeMenu === 2}
    <WordList />
  {:else if $activeMenu === 3}
    <Newsletter />
  {:else}
    <Home />
  {/if}
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #F2D7D9;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  @font-face {
    font-family: HoonWhiteCat;
    src: url('./assets/fonts/HoonWhiteCat.ttf');
  }
</style>
