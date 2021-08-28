<template>
  <div class="base">
    <section class="hero is-dark">
      <Navbar></Navbar>
      <div class="hero-body">
        <div class="container">
          <h1 class="title">About</h1>
        </div>
      </div>
    </section>
    <div class="stuff">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-one-third has-text-centered">
            <img class="picture" src="../assets/face.png">
          </div>
          <div class="column">
            <div class="content">
              <p>Hi, I'm Oscar.</p>
              <p>
                I'm a professional software engineer from Auckland, New Zealand. I've worked at a range of companies since 2015, 
                including a real estate software company, a medical device manufacturer, an AI startup, and an anti-money laundering
                startup. Currently I'm working as a backend engineer, but I have experience in all parts of the stack. I've also tried
                my hand at hobby compiler design, videogame development, and data visualization to combine technology with my other passions.
              </p>
              <p>
                Outside of the tech industry, I am involved in local and national politics. I'm particularly passionate about urban
                issues. I have a lot of pride in my hometown – hence the background image – but I believe Auckland can be an even better
                place to live if we invest in urban renewal, increase housing density, provide better amenities and transport, and thereby
                provide affordable homes for all.
              </p>
              <p>
                This website is mostly a portfolio of software projects that I have worked on in the past, but I may post commentary here on
                various issues that I am interested in from time to time.
              </p>
              <p>
                If you would like to get in touch, you can find me below, or at <span class="orange">oscar@oscarsims.co.nz.</span>
              </p>
              <p>
                <a class="fab fa-twitter" href="https://twitter.com/oscaroverflow"></a>
                <a class="fab fa-github" href="https://github.com/oscarcs"></a>
                <a class="fab fa-linkedin" href="https://www.linkedin.com/in/oscarcs"></a>
                <a class="fa fa-gamepad" href="https://oscar.itch.io"></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

@Component({ components: { Navbar, Footer } })
export default class About extends Vue {

}
</script>

<style scoped lang="scss">
@import "@/styles/oscar.scss";

.content p:not(:last-child) {
  margin-bottom: 2rem;
}

.picture {
  margin-top: -3rem;
  width: 70%;
  // height: 20rem;
  // clip-path: circle(109px at 110px 110px); // keep edges sharp
}

.fa, .fab {
  color: $slate;

  &:not(:last-child) {
    margin-right: 3rem;
  }
}
</style>