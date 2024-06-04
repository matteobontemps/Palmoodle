import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from './components/MainPage.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/test', component: MainPage },
];

const router = new VueRouter({
  routes
});

export default router;