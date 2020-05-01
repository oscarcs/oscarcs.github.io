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
             <div class="line">Hi, I'm an engineer from</div> <div class="line">Auckland, NZ.</div>
          </div>
          <div class="pitch">
            I build <span 
              :class="['accent', accentClass]"
            >{{accentText[accentTextIndex].text}}.</span>
          </div>
          <div class="endnote">
            <router-link to="/about">about</router-link>
            <router-link to="/projects">projects</router-link>
            <router-link to="/writing">writing</router-link>
            <a class="fab fa-twitter orange" href="https://twitter.com/oscaroverflow"></a>
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
    { text: 'web apps', class: 'red' },
    { text: 'compilers', class: 'purple' },
    { text: 'desktop apps', class: 'blue' },
    { text: 'backends', class: 'orange' },
    { text: 'cloud software', class: 'red' },
    { text: 'tooling', class: 'purple' },
    { text: 'CI/CD pipelines', class: 'blue' }
  ]

  private accentTextIndex = 0;
  private accentClass = this.accentText[this.accentTextIndex].class;

  mounted () {
    setTimeout(() => {
      this.accentClass = 'white'
    }, 1500) 

    setInterval(() => {
      this.accentTextIndex = (this.accentTextIndex + 1) % this.accentText.length;
      this.accentClass = this.accentText[this.accentTextIndex].class;
      setTimeout(() => {
        this.accentClass = 'white'
      }, 1500) 
    }, 2000);
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
    color: transparent;
  }

  .name {
    font-size: 2rem;
    margin-bottom: 3rem;
    font-weight: 100;

    @media (max-width: 30em) {
      font-size: 1.66rem;
    }
  }

  .logo {
    font-weight: 400;
    margin-right: 0.5rem;
  }

  .pitch {
    font-size: 3rem;

    @media (max-width: 30em) {
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
    color: $slate;
    &:not(:last-child) {
      margin-right: 2rem;

      &::after {
        @media (max-width: 30em) {
          content: "\A";
          white-space: pre;
        }
      }
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