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
                I'm a keen community advocate - and I'm standing as the Labour Party candidate in Auckland Central in 2023.
                I am driven by a belief in fairness and opportunity for everyone who calls our city home, and I will be a strong advocate
                for our community on housing, public transport, and the cost of living in the next Labour government.
              </p>
              <p>
                If you would like to get in touch, you can find me on social media below.
              </p>
              <p>
                <i>(Authorised by Rob Salmond, 187 Featherston St, Wellington.)</i>
              </p>
              <p>
                <a class="fab fa-twitter orange" href="https://twitter.com/oscarcsims"></a>
                <a class="fab fa-github red" href="https://github.com/oscarcs"></a>
                <a class="fab fa-facebook blue" href="https://facebook.com/oscarcsims"></a>
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