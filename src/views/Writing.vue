<template>
  <div class="container">
    <div class="section">
      <h1 class="title">writing</h1>
      <Blog url="/writing"></Blog>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Blog from '@/components/Blog.vue';

@Component({ components: { Blog }})
export default class Writing extends Vue {
  
}
</script>