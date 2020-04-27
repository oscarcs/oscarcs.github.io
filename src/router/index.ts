import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Writing from '../views/Writing.vue'
import Post from '../views/Post.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
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

const router = new VueRouter({
  routes
})

export default router
