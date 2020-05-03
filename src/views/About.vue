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
                I'm fortunate enough to be able to write computer programs for money! I've been doing it since 2015,
                at a range of companies, including a <a href="http://foreground.co.nz/">real estate accounting software company</a>,
                a <a href="https://www.fphcare.com">publicly-listed medical device manufacturer</a>, 
                and an <a href="https://www.ako.ai/">AI startup</a>.
              </p>
              <p>
                I'm from Auckland, a great little city in New Zealand. Our landmark building looks like a 
                <a href="https://en.wikipedia.org/wiki/Sky_Tower_(Auckland)"> hypodermic needle</a>. 
                I studied engineering at the University of Auckland.
              </p>
              <p>
                This website catalogues some of the things I've been working on and thinking about, software and otherwise.
                Computers are <a href="https://twitter.com/whitequark/status/1115432559738019840?s=20">great</a>,
                but programmers have a pretty poor track record. Most software is slow, faulty, and late.
                I'm sure that we can do better.
              </p>
              <p>
                If you want to get in touch, you can find me below, or at <span class="orange">oscar@oscarsims.co.nz.</span>
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