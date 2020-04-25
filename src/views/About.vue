<template>
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-one-third has-text-centered">
        <img class="picture" src="../assets/face.png">
      </div>
      <div class="column">
        <div class="section">
          <div class="content">
            <h1 class="title">About me</h1>
            <p>I'm an engineer from Auckland.</p>
            <p>Computers are <a href="https://twitter.com/whitequark/status/1115432559738019840?s=20">great</a>,
            but programmers have a pretty poor track record. Most software is slow, faulty, and late.<br />
            I think that we can do better.</p>
            <p>This website catalogues some of the things I've been working on and thinking about, in software engineering and other fields. 
            If you want to get in touch, you can find me below:</p>
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
</template>

<style scoped lang="scss">
.content p:not(:last-child) {
  margin-bottom: 2rem;
}

.picture {
  margin: 3rem;
  width: 220px;
  height: 220px;
  clip-path: circle(109px at 110px 110px); // keep edges sharp
}

.fa, .fab {
  color: white;

  &:not(:last-child) {
    margin-right: 3rem;
  }
}
</style>