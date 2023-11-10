import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProjectsView from '@/views/ProjectsView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/projects',
    component: ProjectsView,
  },
];

const router = createRouter({
  routes,
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
