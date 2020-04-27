<template>
  <div class="container">
    <div class="section">
      <template v-if="!loading">
        <h1 class="title">{{title}}</h1>
        <h1 class="subtitle">{{subtitle}}</h1>
        <p>{{content}}</p>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import Config from '../config';

@Component({ components: { }})
export default class Post extends Vue {
  private loading = true;

  @Prop() private url!: string;
  private title!: string;
  private subtitle!: string;
  private date!: Date;
  private img!: string;
  private content!: string;

  created() {
    this.load();
  }

  @Watch('$route')
  load() {
    this.loading = true;
    fetch(`${Config.baseUrl}${this.$route.path}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      else {
        return Promise.reject(response.status);
      }
    })
    .then(data => {
      this.title = data.title;
      this.subtitle = data.subtitle;
      this.content = data.content;
      this.loading = false;
    })
    .catch(status => {
      if (status === 404) {
        this.title = `That's an error.`;
        this.subtitle = 'That post could not be found.';
        this.content = '';
        this.loading = false;
      }
    });
  }
}
</script>