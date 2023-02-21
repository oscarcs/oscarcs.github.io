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
          <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
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

.lds-ellipsis {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: $slate;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>