<script>
    import logo from '../assets/flag_korea.png'
</script>

<img src={logo} alt="Svelte Logo" />
  <h1>한국어 연습</h1>

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>

  <style>

    img {
      max-height: 20rem;
      margin-top: 3rem;
    }
  
    h1 {
      text-transform: uppercase;
      font-size: 4rem;
      font-weight: 100;
      line-height: 1.1;
      margin: 2rem auto;
      max-width: 14rem;
      font-family: HoonWhiteCat;
    }
  
    p {
      max-width: 14rem;
      margin: 1rem auto;
      line-height: 1.35;
    }
  
    @media (min-width: 480px) {
      h1 {
        max-width: none;
      }
  
      p {
        max-width: none;
      }
    }
    </style>