<template>
    <div @click="go()">
      <h3>{{title}}</h3>
      <div class="info has-text-weight-light">
        {{date}}
      </div> 
      <div class="sub">{{subtitle}}</div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
  url: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  date: { type: String, required: true },
});

const router = useRouter();

function go() {
  router.push(props.url);
}
</script>

<style scoped lang="scss">
.post {
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
}
</style>
