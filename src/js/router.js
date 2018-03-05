// import Vue from "vue";
// import VueRouter from "vue-router";

import vcRouterView from "../vue-components/RouterView.vue";
import VueProgressBar from 'vue-progressbar';

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options);
Vue.use(VueRouter);

// const vcHome = (resolve) => import("../vue-components/Home.vue").then(resolve);
const vcHome = () => import('../vue-components/Home.vue');
const vcGallery = () => import('../vue-components/Gallery.vue');
const vcFavorites = () => import('../vue-components/Favorites.vue');

const routes = [
  {
    path: "/",
    component: vcHome
  },  {
    path: "/gallery/:breedname",
    component: vcGallery
  },
  {
    path: "/favorites",
    component: vcFavorites
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  router,
  render: h => h(vcRouterView)
});

export {router};