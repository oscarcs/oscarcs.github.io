<template>
    <div @click="go()">
      <div class="post-container">
        <div class="post-content">
          <h3>{{title}}</h3>
          <div class="info has-text-weight-light">{{date}}</div> 
          <div class="sub">{{subtitle}}</div>
        </div>
        <img class="post-image" v-if="img" :src="img" />
      </div>
      <hr />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class ImagePost extends Vue {
  @Prop() private url!: string;
  @Prop() private title!: string;
  @Prop() private subtitle!: string;
  @Prop() private date!: string;
  @Prop() private img!: string;
  
  go () {
    this.$router.push(this.url);
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/oscar.scss";

.post-container {
  display: flex;
  flex-direction: row;

  @media (max-width: $desktop) {
    flex-direction: column;
  }

  &:hover .post-image {
    filter: saturate(100%);
  }

  .post-image {
    margin-left: auto;
    height: 15rem;
    width: 35%;
    flex-grow: 0;
    flex-shrink: 0;
    object-fit: cover;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.2);
    filter: saturate(0%);
    transition: filter 0.3s;
    border-radius: 0.25rem;
    
    @media (max-width: $desktop) {
      filter: saturate(100%);
      margin-left: auto;
      margin-right: auto;
      width: initial;
    }

    @media (max-width: $tablet) {
      filter: saturate(100%);
      margin-left: auto;
      margin-right: auto;
      width: 100%;
    }
  }
}
</style>
