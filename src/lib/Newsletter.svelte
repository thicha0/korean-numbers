<script>
  import logo from '../assets/flag_korea.png'
</script>

<h1>
  Newsletter
</h1>
<div style="display: flex; margin-top: 50px; padding: 0 100px;">
  <div id="infos">
    <img src={logo} alt="South Korea Flag" />
    <p>Speed up your korean learning !</p>
    <p>Receive daily email with 10 words to learn per day.</p>
    <p>See your progress.</p>
    <p><i>Cancel anytime.</i></p>
  </div>
  <div id="form">
    <input type="text" placeholder="Your email" />
    <button>Subscribe</button>
  </div>
</div>

<style>
  #infos {
    width: 50%;
    float: left;
    background-color: #D3CEDF;
    color: black;
    border-radius: 10px;
    font-size: 20px;
  }

  img {
    max-height: 10rem;
    margin-top: 3rem;
  }

  #form {
    display: flex;
    float: right;
    width: 50%;
    flex-direction: column;
    align-items: center;
    margin-top: auto;
    margin-bottom: auto;
  }

  input {
    border-radius: 100px;
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
    color:white;
    background-color: #0C347A;
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 150px;
    margin: 0 10px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:hover {
    background-color: #abc0d4;
  }
</style>