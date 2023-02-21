<template>
  <div class="base">
    <section class="hero is-dark">
      <Navbar></Navbar>
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Writing</h1>
        </div>
      </div>
    </section>
    <div class="stuff">    
      <div class="container">
        <div class="post-list">
          <Blog url="/writing"></Blog>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Blog from '@/components/Blog.vue';
</script>