<template>
  <div>
    <template v-if="!loading">
      <template v-for="post of posts">
        <div class="post" :key="post.id">
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
              :img="post.img"
            ></ImagePost>
          </template>
        </div>
      </template>
    </template>
    <template v-else>
      <div class="post" v-for="i of 2" :key="i">
        <b-skeleton width="20%" animated="true"></b-skeleton>
        <b-skeleton width="20%" animated="true"></b-skeleton>
        <b-skeleton width="40%" animated="true"></b-skeleton>
        <hr />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TextPost from '@/components/TextPost.vue';
import ImagePost from '@/components/ImagePost.vue';
import Config from '../config';

interface Post {
  title: string;
  subtitle: string;
  date: Date;
  url: string;
  img?: string;
}

@Component({ components: { TextPost, ImagePost } })
export default class Blog extends Vue {
  @Prop() private textOnly!: boolean;
  @Prop() private sourceUrl!: string;
  @Prop() private url!: string;

  private loading = true;
  private posts: Post[] = [];
  private totalPosts = 0;

  mounted() {
    fetch(Config.baseUrl + this.url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.loading = false;
      this.posts = data.rows.map((x: Post) => {
        x.url = this.url + '/' + x.url;
        x.date = new Date(x.date);
        return x;
      });
      this.totalPosts = data.length;
    })
  }
}
</script>

<style scoped lang="scss">
</style>
