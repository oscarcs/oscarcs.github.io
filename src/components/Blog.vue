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
      <div class="post" v-for="i of 2" :key="i">
        <b-skeleton width="20%" :animated="true"></b-skeleton>
        <b-skeleton width="20%" :animated="true"></b-skeleton>
        <b-skeleton width="40%" :animated="true"></b-skeleton>
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
</style>
