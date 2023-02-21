<template>
  <div class="base">
    <section class="hero is-dark">
      <Navbar></Navbar>
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{postInfo.title}}</h1>
          <h1 class="subtitle">{{postInfo.subtitle}}</h1>
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
          <div class="content" v-html="postInfo.content"></div>
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

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Config from '../config';

let loading = ref(true);
let route = useRoute();

let postInfo = reactive({
  url: '',
  title: '',
  subtitle: '',
  date: new Date(),
  img: '',
  content: ''
});

load();

function load() {
  loading.value = true;
  fetch(`${Config.baseUrl}${route.path}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    else {
      return Promise.reject(response.status);
    }
  })
  .then(data => {
    postInfo.title = data.title;
    postInfo.subtitle = data.subtitle;
    postInfo.content = data.content;
    loading.value = false;
  })
  .catch(status => {
    if (status === 404) {
      postInfo.title = `That's an error.`;
      postInfo.subtitle = 'That post could not be found.';
      postInfo.content = '';
      loading.value = false;
    }
  });
}
</script>

<style scoped lang="scss">
.post {
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
}
</style>