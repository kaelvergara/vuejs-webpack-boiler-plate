import Vue    from 'vue';
import Router from 'vue-router';

import store from '@/store';

// Routes
import Login      from '@/routes/Login';
import Home       from '@/components/Home';
import Dynamic    from '@/routes/Dynamic';
import Nested     from '@/routes/Nested';
import ComponentA from '@/routes/Nested/routes/ComponentA';
import ComponentB from '@/routes/Nested/routes/ComponentB';
import SimpleForm from '@/routes/SimpleForm';

// Lazy Loading
const LazyLoading   = () => import('@/routes/LazyLoading');
const LazyLoadCompA = () => import('@/routes/LazyLoading/routes/ComponentA');
const LazyLoadCompB = () => import('@/routes/LazyLoading/routes/ComponentB');

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
        {
          path: 'lazy-loading',
          component: LazyLoading,
          children: [
            { path: 'componentA', component: LazyLoadCompA },
            { path: 'componentB', component: LazyLoadCompB },
          ],
        },
        { path: 'simple-form', component: SimpleForm },
      ],
    },
  ],
});
