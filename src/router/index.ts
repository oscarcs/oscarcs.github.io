import { createRouter, createWebHashHistory } from 'vue-router';
import About from '@/views/About.vue';
import Home from '@/views/Home.vue';
import Post from '@/views/Post.vue';
import Projects from '@/views/Projects.vue';
import Writing from '@/views/Writing.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: { navbarColor: 'is-light' }
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    { 
      path: '/projects/:url', 
      component: Post
    },
    {
      path: '/writing',
      name: 'Writing',
      component: Writing
    },
    { 
      path: '/writing/:url', 
      component: Post
    }
  ]
});

export default router;
