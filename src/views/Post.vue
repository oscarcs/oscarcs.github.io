<template>
  <div class="base">
    <section class="hero is-dark">
      <Navbar></Navbar>
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{title}}</h1>
          <h1 class="subtitle">{{subtitle}}</h1>
          <template v-if="loading">
            <b-skeleton height="2rem" width="20%" :animated="true"></b-skeleton>
            <b-skeleton height="1rem" width="40%" :animated="true"></b-skeleton>
          </template>
        </div>
      </div>
    </section>
    <div class="stuff">
      <div class="container">
        <template v-if="!loading">
          <div class="content" v-html="content"></div>
        </template>
        <template v-else>
          <b-skeleton width="20%" :animated="true"></b-skeleton>
          <b-skeleton width="20%" :animated="true"></b-skeleton>
          <b-skeleton width="40%" :animated="true"></b-skeleton>
        </template>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Config from '../config';

@Component({ components: { Navbar, Footer }})
export default class Post extends Vue {
  private loading = true;

  @Prop() private url!: string;
  private title!: string;
  private subtitle!: string;
  private date!: Date;
  private img!: string;
  private content!: string;

  created() {
    this.load();
  }

  @Watch('$route')
  load() {
    this.loading = true;
    fetch(`${Config.baseUrl}${this.$route.path}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      else {
        return Promise.reject(response.status);
      }
    })
    .then(data => {
      this.title = data.title;
      this.subtitle = data.subtitle;
      this.content = data.content;
      this.loading = false;
    })
    .catch(status => {
      if (status === 404) {
        this.title = `That's an error.`;
        this.subtitle = 'That post could not be found.';
        this.content = '';
        this.loading = false;
      }
    });
  }
}
</script>

<style scoped lang="scss">
.post {
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
}
</style>