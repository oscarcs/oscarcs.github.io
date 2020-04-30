<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="name">
            <span class="logo">//</span> Oscar Sims
          </div>
          <div class="pitch">
            <!-- <span class="accent">Hi,</span> -->
             Hi, I'm an engineer from <span class="">Auckland</span>, NZ.
          </div>
          <div class="pitch">
            I build <span 
              :class="['accent', accentText[accentTextIndex].class]"
            >{{accentText[accentTextIndex].text}}.</span>
          </div>
          <div class="endnote">
            <router-link to="/about">about</router-link>
            <router-link to="/projects">projects</router-link>
            <router-link to="/writing">writing</router-link>
            <a style="margin-left: 2rem;" class="fab fa-twitter orange" href="https://twitter.com/oscaroverflow"></a>
            <a class="fab fa-github red" href="https://github.com/oscarcs"></a>
            <a class="fab fa-linkedin purple" href="https://www.linkedin.com/in/oscarcs"></a>
            <a class="fa fa-gamepad blue" href="https://oscar.itch.io"></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';

@Component({ components: { Navbar } })
export default class Home extends Vue {
  private accentText = [
    { text: 'software', class: 'orange' },
    { text: 'software', class: 'white' },
    { text: 'web apps', class: 'red' },
    { text: 'web apps', class: 'white' },
    { text: 'compilers', class: 'purple' },
    { text: 'compilers', class: 'white' },
    { text: 'desktop apps', class: 'blue' },
    { text: 'desktop apps', class: 'white' },
    { text: 'backends', class: 'orange' },
    { text: 'backends', class: 'white' },
    { text: 'cloud software', class: 'red' },
    { text: 'cloud software', class: 'white' },
    { text: 'tooling', class: 'purple' },
    { text: 'tooling', class: 'white' },
    { text: 'CI/CD pipelines', class: 'blue' },
    { text: 'CI/CD pipelines', class: 'white' },
  ]

  // private accentTextIndex = Math.floor(Math.random() * this.accentText.length);
  private accentTextIndex = 0;

  mounted () {
    setInterval(() => {
      this.accentTextIndex = (this.accentTextIndex + 1) % this.accentText.length; 
    }, 2500);
  }
}
</script>

<style scoped lang="scss">
  @import "@/styles/oscar.scss";

  .hero {
    background-color: white;
    background-image: url('../assets/sky-tower.jpg');
    background-position: bottom 0px right 0px;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .white {
    color: white;
  }

  .name {
    font-size: 2rem;
    margin-bottom: 3rem;
    font-weight: 100;
  }

  .logo {
    font-weight: 400;
    margin-right: 0.5rem;
  }

  .pitch {
    font-size: 3rem;
  }

  .subpitch {
    font-size: 1.5rem;
  }

  .endnote {
    margin-top: 3rem;
  }

  a {
    color: $slate;
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }

  .accent {
    // color: $red;
    font-weight: 700;
    transition: color 0.8s;
  }

  .fa, .fab {
    // color: white;
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
</style>