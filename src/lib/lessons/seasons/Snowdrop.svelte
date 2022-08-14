<!-- From https://codepen.io/kyoyababa/pen/OWJaoB?editors=1100 -->

<ul class="g-snows" id="jsi-snows">
  {#each Array(100) as number}
    <li />
  {/each}
</ul>

<style lang="scss">
* {
  overflow: hidden;
}

// Definition of snow length
// NOTE: length should be same value with HTML elements
$SNOWDROPS_LENGTH: 100;

// Wrapper for snows, this shows background
.g-snows {
  transition: all 0.5s ease;
  margin: auto;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
}

.g-snows > li {
  transition: all 0.5s ease;
  // NOTE: Opacity zero is required due to appearance of snow.
  opacity: 0;
  position: absolute;
  top: 0;
  border-radius: 100%;
  background-color: #FFFFFF;
  background-repeat: no-repeat;
  background-size: 100% auto;
  animation-name: snow-drop;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  
  // Bases of random snows effect
  $snow-size-base: 30;
  $browser-buffer: 50;
  $left-position: 100 + $browser-buffer;
  $animate-speed-base: 20000;
  $minimum-falling-speed: 5000;
  $animate-delay-base: 5000;
  $blur-base: 5;

  @for $i from 1 through $SNOWDROPS_LENGTH {
    $size: abs(random($snow-size-base) - random($snow-size-base)) + 0px;

    &:nth-child(#{$i}) {
      left: abs(random($left-position) - random($left-position)) + 0%;
      width: $size;
      height: $size;
      animation-duration: abs(random($animate-speed-base) - random($animate-speed-base)) + $minimum-falling-speed + 0ms;
      animation-delay: abs(random($animate-delay-base)) + 0ms;
      filter: blur(abs(random($blur-base) - random($blur-base)) + 0px);
    }
  }
} 
  
@keyframes snow-drop {
  $window-height-threshold: 1;

  0% {
    transform: translate(0, 0);
    opacity: 0.5;
    margin-left: 0;
  }

  10% {
    margin-left: 15px;
  }

  20% {
    margin-left: 20px;
  }

  25% {
    transform: translate(0, 25vh / $window-height-threshold);
    opacity: 0.75;
  }

  30% {
    margin-left: 15px;
  }

  40% {
    margin-left: 0;
  }

  50% {
    transform: translate(0, 50vh / $window-height-threshold);
    opacity: 1;
    margin-left: -15px;
  }

  60% {
    margin-left: -20px;
  }

  70% {
    margin-left: -15px;
  }

  75% {
    transform: translate(0, 75vh / $window-height-threshold);
    opacity: 0.5;
  }

  80% {
    margin-left: 0;
  }

  100% {
    transform: translate(0, 100vh / $window-height-threshold);
    opacity: 0;
  }
}
</style>