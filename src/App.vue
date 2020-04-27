<template>
  <div id="app">
    <b-navbar wrapper-class="container" :transparent="true">
      <template slot="brand">
        <b-navbar-item tag="router-link" to="/">
          <div class="logo">//</div>
          <div class="logo-text">
            <div class="logo-name">Oscar Sims</div>
            <!-- <div class="logo-title">Software Engineer</div> -->
          </div>
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="router-link" to="/about">about</b-navbar-item>
        <b-navbar-item tag="router-link" to="/projects">projects</b-navbar-item>
        <b-navbar-item tag="router-link" to="/writing">writing</b-navbar-item>
      </template>
    </b-navbar>
    <router-view />
  </div>
</template>

<style lang="scss">
@use "sass:color";
@import url("https://fonts.googleapis.com/css?family=Quicksand:400,700&amp;display=swap");
@import "~bulma/sass/utilities/_all";

// Fonts
$family-primary: "Quicksand", sans-serif;
$weight-normal: 400;

// Main Theme Colors
$color-main: black;
$color-main-invert: $white;
$color-text: $white;
$color-link: $grey;

$scheme-main: $color-main;
$scheme-main-bis: color.adjust($color-main, $lightness: 5%);
$scheme-main-ter: color.adjust($color-main, $lightness: 10%);

$scheme-invert: $color-main-invert;
$scheme-invert-bis: $white;
$scheme-invert-ter: $white;

$background: color.adjust($color-main, $lightness: 10%);

$text: $color-text;
$text-invert: color.invert($color-text, $weight: 100%);

$link: $color-link;
$link-invert: color.invert($color-link, $weight: 100%);

// Backgrounds
.hero-skytower {
  @extend .hero;
  background-image: url('assets/sky-tower.jpg');
  background-position: right; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain;
  background-color: black;
  
  .title {
    color: $white-bis;
  }
}

// Navbar
$navbar-height: 5rem;

// Bulma
@import "~bulma/bulma.sass";
@import "~buefy/src/scss/buefy";

// Custom

html {
  overflow: auto;
}

$logo-size: 2.4rem;
.logo {
  padding-left: 0.5rem;
  font-size: $logo-size;
}

.logo-text {
  margin-left: $logo-size / 2;
  margin-right: $logo-size / 2;
}

.logo-name {
  font-size: $logo-size / 2;
}

.logo-title {
  font-size: ($logo-size / 2) * 0.75;
}

.navbar-burger {
  height: initial;
}
</style>
