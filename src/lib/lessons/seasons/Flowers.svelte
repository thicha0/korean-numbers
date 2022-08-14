<!-- From https://codepen.io/maxakohler/pen/nzvwBm -->

<div id="container">
    <div class='flower flower-0'><span></span></div>
    <div class='flower flower-1'><span></span></div>
    <div class='flower flower-2'><span></span></div>
    <div class='flower flower-3'><span></span></div>
    <div class='flower flower-4'><span></span></div>
    <div class='flower flower-5'><span></span></div>
    <div class='flower flower-6'><span></span></div>
    <div class='flower flower-7'><span></span></div>
    <div class='flower flower-8'><span></span></div>
    <div class='flower flower-9'><span></span></div>
    <div class='flower flower-10'><span></span></div>
</div>


<style lang="scss">
#container {
    position: fixed;
    z-index: -1;
    bottom: 0;
    height: 50vh;
    width: auto;
    margin-right: auto;
    margin-left: auto;
}

#test {
    display: none;
}


$bg : rgb(210,210,180);
$orange : #F8C475;
$red : #F87575;
$green : rgb(180,210,140);
$blue : #75BFF8;
$sky : lighten($blue, 10);
$yellow : #F3F875;
$purple : #D9ABFF;
$pink : #FF89B3;
@mixin animation-duration($t){
  -moz-animation-duration: $t;
  -webkit-animation-duration: $t;
  -moz-animation-duration: $t;
}
@mixin animation-delay($t){
  -moz-animation-delay: $t;
  -webkit-animation-delay: $t;
  -moz-animation-delay: $t;
}
@mixin transform($property: none) {
  transform: $property;
  -moz-transform: $property;
  -webkit-transform: $property;
  -o-transform: $property;
}

@mixin animation($name, $duration, $delay: 0s, $fill-mode: forwards){
  -moz-animation-name: $name; 
  -webkit-animation-name: $name; 
  
  -webkit-animation-fill-mode: $fill-mode;
  -moz-animation-fill-mode: $fill-mode;
  
  -webkit-animation-delay: $delay;
  -moz-animation-delay: $delay;

  -moz-animation-duration: $duration; 
  -webkit-animation-duration: $duration; 
}
@mixin keyframes($name) {
  @-webkit-keyframes #{$name} {
    @content; 
  }
  @-moz-keyframes #{$name} {
    @content;
  }
  @-ms-keyframes #{$name} {
    @content;
  }
  @keyframes #{$name} {
    @content;
  } 
}

@include keyframes(grow){
  from {
    top: 15em;
  }
  to {
    top: 1em;
    opacity: 1
  }
}

@include keyframes(turn-right){
  from {
    @include transform(rotateY(-140deg));
  }
  to {
    @include transform(rotateY(0deg));
  }
}
@include keyframes(turn-left){
  from {
    @include transform(rotateY(140deg));
  }
  to {
    @include transform(rotateY(0deg));
  }
}
@mixin config($w,$top, $background, $border-color, $border-width, $leaves){
  height: $w;
  width: $w;
  opacity: 0;
  margin-top: $top;
  background-color: $background;
  border-radius: $w * 5;
  border: $border-width solid $border-color;
  box-shadow: 0 0 0 .2em darken($border-color, 4), 0 0 0 .2em lighten($background, 4) inset;
  
  span {
    top: $w + $border-width + .2em;
    left: $w / 2.3;
    
    @if $leaves == 0 {
      &:before {display: none;}
      &:after {display: none;}
    }
    @if $leaves == 1 {
      &:before {display: block;}
      &:after {display: none;}
    }
    @if $leaves == 2 {
      &:before {display: block;}
      &:after {display: block;}
    }
  }
}

body {
  padding: 3em;
  background: $bg;
}
.flower {

  @include animation(grow, 4s);
  top: 1em;
  position: absolute;
  z-index: 10;
  span {
    background: $green;
    width: .5em;
    z-index: 5;
    height: 50em;
    display: block;
    position: absolute;
 
    &:after {
     content: '';
      @include transform(rotateY(-140deg));
     -moz-transform-origin: left;
     -webkit-transform-origin: left; 
     width: 3em;
     height: 3em;
      display: block;
      background: darken($green, 5);
      border-radius: 2em 0em 2em 0em;
      box-shadow: 0 0 0 .2em darken($green, 8) inset;
      z-index: 0;
      top: 1em;
      left: .5em;
      position: absolute;
    }
    &:before {
     @include transform(rotateY(140deg));
     -moz-transform-origin: right;
     -webkit-transform-origin: right; 
     @include animation(turn-left, 4s, 4s);
     content: '';
     width: 3em;
     height: 3em;
      display: block;
      background: darken($green, 7);
      border-radius: 0em 2em 0em 2em;
      box-shadow: 0 0 0 .2em darken($green, 8) inset;
      z-index: 0;
      position: absolute;
      left: -3em;
      top: 5em;
    }

  }
}

//Configuring the flowers:
//=========================

.flower-0 {
  @include config(4em, 6em, $yellow, $orange, 1em, 1);
}
.flower-1 {
  @include config(6em, 1em, $sky, $blue, 1em, 2);
}
.flower-2 {
  @include config(3em, 0em,$orange, $red, 1.2em, 0);
}
.flower-3 {
  @include config(2em, 3em,$red, $orange, 3em, 1);
}
.flower-4 {
  @include config(3em, 0em,$blue, $sky, 1.2em, 1);
}
.flower-5 {
  @include config(4em, 2em,$purple, $pink, .7em, 2);
}
.flower-6 {
  @include config(5em, 7em,$red, $orange, 1.2em, 2);
}
.flower-7 {
  @include config(3em, 4em,$orange, $blue, 1.2em, 2);
}
.flower-8 {
  @include config(5em, 7em,$yellow, $red, 1.2em, 2);
}
.flower-9 {
  @include config(5em, 7em,$pink, $sky, 1.2em, 2);
}
.flower-10 {
  @include config(5em, 7em,$blue, $orange, 1.2em, 2);
}
@for $i from 0 through 10 {
    .flower-#{$i} {
      @include animation-delay(.3s * $i);
      left: 1em + (10em * $i);
    span:before {
     @include animation(turn-right, 3s, .3s * $i);
    }
    span:after {
     @include animation(turn-left, 2s, .4s * $i);
    }
  }
}
</style>
