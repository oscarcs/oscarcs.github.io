<template>
    <div @click="go()">
      <h3>{{title}}</h3>
      <div class="info has-text-weight-light">
        {{date | date}}
      </div> 
      <div class="sub">{{subtitle}}</div>
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
export default class TextPost extends Vue {
  @Prop() private url!: string;
  @Prop() private title!: string;
  @Prop() private subtitle!: string;
  @Prop() private date!: Date;

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
