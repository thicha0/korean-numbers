<script>
  import logo from '../assets/flag_korea.png'

  let email = null
  let error = null

  function subscribe() {
    // TODO
    console.log('subscribed', email)
  }
</script>

<div id="container">
  <img src={logo} alt="South Korea Flag" />
  <p>Want to speed up your korean learning ?</p>
  <p><b>Subscribe to our newsletter* !</b></p>
  <p>You will receive 10 korean words to learn every day !</p>
  <br>
  <br>
  <input type="text" bind:value={email} placeholder="Your email" class:error />
  <button on:click={subscribe}>Subscribe</button>
  <p style="font-size: 0.7em;"><i>*Cancel anytime.</i></p>
</div>

<style>
  .error {
    background-color: red;
  }

  #container {
    background-color: #39426e;
    margin-top: 50px;
    margin: 50px 50px;
    align-items: stretch;
    padding: 20px;
  }

  img {
    max-height: 8rem;
    border-radius: 8px;
  }

  input {
    font-family: inherit;
    font-size: inherit;
    border-radius: 8px;
    padding: 0.5em 1em;
    font-size: 1em;
    border: none;
    margin-bottom: 20px;
    box-sizing: border-box;
  }

  button {
    font-family: inherit;
    font-size: inherit;
    padding: 0.5em;
    color:black;
    background-color: #eebbc3;
    border-radius: 8px;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 150px;
    cursor: pointer;
    margin-left: 10px;
  }

  button:hover {
    background-color: #abc0d4;
  }
</style>