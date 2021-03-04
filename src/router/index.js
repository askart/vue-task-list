import Vue from 'vue';
import VueRouter from 'vue-router';
import TaskForm from '../views/TaskForm.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'form',
    component: TaskForm,
  },
  {
    path: '/list',
    name: 'list',
    // route level code-splitting
    // this generates a separate chunk (list.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "list" */ '../views/TasksList.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
