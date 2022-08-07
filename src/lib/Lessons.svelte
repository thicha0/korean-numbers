<script>
  import Icon from './Icon.svelte'
  // sections
  import Seasons from './lessons/Seasons.svelte'

  let categories = [
    {
      id: 1,
      text: 'Seasons',
      image: '/src/assets/icons/season/season.png',
      component: Seasons
    },
  ]
  let activeCategory = null
</script>

{#if activeCategory === null}
  <div id="grid">
    {#each categories as category}
    <div class="category" on:click={() => activeCategory = category}>
      <img src={category.image} alt={category.text} style="height: 100px"/>
      <br>{category.text}
    </div>
    {/each}
  </div>
{:else}
  <div>
    <button id="back" on:click={() => activeCategory = null}>
      <Icon name="arrow-left" height="1em" />
      &nbsp;
      Back to the list
    </button>
    <svelte:component this={activeCategory.component}/>
  </div>
{/if}

<style>
  #grid {
    max-width: 1000px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .category {
    margin: 5%;
    padding: 2%;
    background-color: #39426e;
    cursor: pointer;
  }
  .category:hover {
    background-color: #121629;
  }
  #back {
    padding: 0.5em 1em;
    border-radius: 8px;
    background-color: #eebbc3;
    color: #121629;
    border: none;
    cursor: pointer;
    font-size: 0.8em;
    font-family: Arvo;
    margin: 20px;
    display: flex;
    align-items: center;
  }
</style>