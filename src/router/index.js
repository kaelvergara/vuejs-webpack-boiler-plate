import Vue    from 'vue';
import Router from 'vue-router';

import store from '@/store';

// Routes
const Login      = () => import('@/routes/Login');
const Home       = () => import('@/components/Home');
const Dynamic    = () => import('@/routes/Dynamic');
const Nested     = () => import('@/routes/Nested');
const ComponentA = () => import('@/routes/Nested/routes/ComponentA');
const ComponentB = () => import('@/routes/Nested/routes/ComponentB');
const SimpleForm = () => import('@/routes/SimpleForm');

Vue.use(Router);

function requireAuth(to, from, next) {
  if (!store.getters.isLoggedIn()) {
    next({
      path: '/login',
      query: { 'not-allowed': 'true' },
    });
  } else {
    next();
  }
}

export default new Router({
  routes: [
    // Routes
    { path: '/login', component: Login },
    { path: '/',
      component: Home,
      beforeEnter: requireAuth,
      children: [
        { path: 'dynamic/:id', name: 'Dynamic', component: Dynamic },
        { path: 'nested',
          component: Nested,
          children: [
            { path: 'componentA', component: ComponentA },
            { path: 'componentB', component: ComponentB },
          ],
        },
        { path: 'simple-form', component: SimpleForm },
      ],
    },
  ],
});
