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
                I'm a professional software engineer from Auckland, New Zealand. I've worked at a range of companies since starting my 
                career in 2015, including a real estate software company, a medical device manufacturer, an AI startup, and an anti-money 
                laundering startup.
              </p>
              <p>
                Outside of the tech industry, I'm involved in <a href="https://ccrg.org.nz">my local community</a> and in <a href="https://morehomes.nz">housing advocacy</a>. I have a lot of pride in my hometown – hence the background image – but I believe Auckland can be an even better
                place to live if we invest in urban renewal, increase housing density, provide better amenities and transport, and thereby
                provide affordable homes for all.
              </p>
              <p>
                If you would like to get in touch, you can find me on social media below, or by emailing <span class="orange">oscar@oscarsims.co.nz.</span>
              </p>
              <p>
                <a class="fab fa-twitter orange" href="https://twitter.com/oscaroverflow"></a>
                <a class="fab fa-github red" href="https://github.com/oscarcs"></a>
                <a class="fab fa-linkedin purple" href="https://www.linkedin.com/in/oscarcs"></a>
                <a class="fa fa-gamepad blue" href="https://oscar.itch.io"></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped lang="scss">
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
  // color: $slate;

  &:not(:last-child) {
    margin-right: 3rem;
  }
}
</style>