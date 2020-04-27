<template>
    <div @click="go()">
        {{date | date}} - 
        <span class="has-text-weight-bold">{{title}}</span> - 
        <span class="has-text-weight-light">{{subtitle}}</span>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  filters: {
    date: function (value: Date) {
      return `${value.toLocaleDateString()} (${value.toLocaleTimeString()})`;
    }
  }
})
export default class ImagePost extends Vue {
  @Prop() private url!: string;
  @Prop() private title!: string;
  @Prop() private subtitle!: string;
  @Prop() private date!: Date;
  @Prop() private img!: string;
  
  go () {
    this.$router.push(this.url);
  }
}
</script>

<style scoped lang="scss">
.post {
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
}
</style>
