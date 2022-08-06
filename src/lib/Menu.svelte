<script>
  import Icon from './Icon.svelte'


  import { activeMenu } from '../store'
  let menus = [
    {
      id: 1,
      title: 'Home',
      icon: 'home'
    },
    {
      id: 2,
      title: 'Word List',
      icon: 'list'
    },
    {
      id: 3,
      title: 'Vocabulary',
      icon: 'book-open'
    },
    {
      id: 4,
      title: 'Newsletter',
      icon: 'mail'
    }
  ]
</script>


<div id="menu">
  {#each menus as menu}
    <div on:click={() => $activeMenu = menu.id} class="{$activeMenu === menu.id ? 'active' : ''}">
      <Icon name={menu.icon} height="1em" /><br>
      {menu.title}
    </div>
  {/each}
</div>
<div id="spacer">
  &nbsp;
</div>

<style>
  #menu {
    text-align: center;
    position: fixed;
    z-index: 100;
    background-color: #121629;
    width: 100%;
    height: 100px;
    display: flex;
    border-bottom: 1px solid #eebbc3;
  }

  #spacer {
    height: 100px;
  }
  
  #menu > div {
    margin: auto;
    cursor: pointer;
    padding: 10px;
    border-radius: 8px;
    width: 150px;
    font-size: 1.1em;
  }

  #menu > div:hover {
    filter: brightness(90%);
    background-color: #232946;
  }

  .active {
    border: 1px solid #eebbc3;
  }
</style>
