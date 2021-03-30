import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    // 异步l懒加载组件webpackChunkName,打包后的chunk名叫auth
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth/index.vue'),
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
