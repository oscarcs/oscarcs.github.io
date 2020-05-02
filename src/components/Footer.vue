<template>
  <div class="footer">
    <div class="container has-text-centered">
      <p>This site built with Vue, Typescript, and a spreadsheet. 
        Source code <a href="https://github.com/oscarcs/oscarcs.github.io/tree/2020">here</a> and 
        <a href="https://github.com/oscarcs/gh-pages-backend">here</a>.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Footer extends Vue {

}
</script>

<style lang="scss" scoped>
  @import "@/styles/oscar.scss";
</style>
