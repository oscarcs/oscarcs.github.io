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
            <img class="picture" src="../assets/face.jpg">
          </div>
          <div class="column">
            <div class="content">
              <p>Hi, I'm Oscar.</p>
              <p>
                I'm a professional software engineer from Auckland, New Zealand. I've worked on a number of different things, including AI-powered chatbots,
                plumbing for the financial system, and software underpinning the global cinema industry. 
              </p>
              <p>
                Outside of tech, I'm involved in <a href="https://ccrg.org.nz">my local community</a> and in <a href="https://morehomes.nz">housing policy advocacy</a>.
                We <a href="https://www.stuff.co.nz/opinion/129175203/councils-are-defying-the-need-for-housing-intensification">worked</a> to change urban policy in New Zealand in a way
                that has been <a href="https://archive.is/Vkgzn">globally influential</a>.
              </p>
              <p>
                If you would like to get in touch, you can find me on social media below, or by emailing <span class="orange">oscar@oscarsims.co.nz.</span>
              </p>
              <p>
                <a class="fab fa-twitter orange" href="https://twitter.com/oscaroverflow"></a>
                <a class="fab fa-github red" href="https://github.com/oscarcs"></a>
                <a class="fab fa-linkedin purple" href="https://www.linkedin.com/in/oscarcs"></a>
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