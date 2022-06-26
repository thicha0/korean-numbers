<script>
  import { activeMenu } from '../store'
  let menus = [
    {
      id: 1,
      title: 'Home'
    },
    {
      id: 2,
      title: 'Word List'
    },
    {
      id: 3,
      title: 'Newsletter'
    }
  ]
</script>


<div id="menu">
  {#each menus as menu}
    <button on:click={() => $activeMenu = menu.id} class="{$activeMenu === menu.id ? 'active' : ''}">
      {menu.title}
    </button>
  {/each}
</div>

<style>
  #menu {
    text-align: right;
  }
  
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color:black;
    background-color: #D3CEDF;
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    margin: 0 10px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:hover {
    background-color: #abc0d4;
  }

  .active {
    color: white;
    background-color: #0C347A;
  }
</style>
