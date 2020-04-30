<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="section">
        <h1 class="title">projects</h1>
        <Blog :textOnly="false" url="/projects"></Blog>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import Blog from '@/components/Blog.vue';

@Component({ components: { Navbar, Blog }})
export default class Projects extends Vue {

}
</script>