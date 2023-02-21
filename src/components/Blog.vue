<template>
  <div>
    <template v-if="!loading">
      <template v-for="post of posts" :key="post.id">
        <div class="post">
          <template v-if="textOnly">
            <TextPost
              :url="post.url"
              :title="post.title"
              :subtitle="post.subtitle"
              :date="post.date"
            ></TextPost>
          </template>
          <template v-else>
            <ImagePost
              :url="post.url"
              :title="post.title"
              :subtitle="post.subtitle"
              :date="post.date"
              :img="post.img ?? ''"
            ></ImagePost>
          </template>
        </div>
      </template>
    </template>
    <template v-else>
      <div class="post">
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        <hr />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import TextPost from '@/components/TextPost.vue';
import ImagePost from '@/components/ImagePost.vue';
import Config from '../config';

interface Post {
  title: string;
  subtitle: string;
  date: string;
  url: string;
  img?: string;
}

const props = defineProps({
  textOnly: { type: Boolean },
  sourceUrl: { type: String },
  url: { type: String }
});

const loading = ref(true);
let posts = reactive(new Array<Post>());
const totalPosts = ref(0);

onMounted(() => {
  fetch(Config.baseUrl + props.url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    loading.value = false;
    posts = data.rows.map((x: Post) => {
      x.url = props.url + '/' + x.url;
      return x;
    });
    totalPosts.value = data.length;
  })
});
</script>

<style scoped lang="scss">
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
