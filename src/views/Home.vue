<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="name light">
            Oscar Sims
          </div>
          <!-- <div class="pitch"></div> -->
          <div class="endnote">
            <router-link to="/about">About</router-link>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/writing">Writing</router-link>
            <br class="responsive">
            <a class="fab fa-twitter orange" href="https://twitter.com/oscaroverflow"></a>
            <a class="fab fa-github red" href="https://github.com/oscarcs"></a>
            <a class="fab fa-linkedin purple" href="https://www.linkedin.com/in/oscarcs"></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">

  .hero {
    background-color: black;
    background-image: url('../assets/sky-tower-dark.jpg');
    background-position: bottom 0px right 0px;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .transparent {
    color: transparent;
  }

  .name {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    font-weight: 100;
    transition: color 1s;

    &.light {
      color: #DEDEDE;
    }

    &.dark {
      color: #AAAAAA;
    }

  }

  br.responsive {
    display: none;
    @media (max-width: $tablet) {
      // font-size: 1.66rem;
      display: initial;
      margin-bottom: 1rem;
    }
  }

  .logo {
    font-weight: 400;
    margin-right: 0.5rem;
  }

  .pitch {
    color: white;
    font-size: 3rem;

    @media (max-width: $tablet) {
      font-size: 1.5rem;
    }
  }

  .line {
    display: inline-block;
  }

  .subpitch {
    font-size: 1.5rem;
  }

  .endnote {
    margin-top: 3rem;
  }

  a {
    color: white;
    &:not(:last-child) {
      margin-right: 2rem;

      // &::after {
      //   @media (max-width: 30em) {
      //     content: "\A";
      //     white-space: pre;
      //   }
      // }
    }
  }

  .accent {
    // color: $red;
    font-weight: 700;
    transition: color 0.8s;
  }

  .fab, .fa {
    // color: white;
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
</style>