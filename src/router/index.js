import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';

import Dynamic from '@/routes/Dynamic';
import Nested from '@/routes/Nested';
import ComponentA from '@/routes/Nested/routes/ComponentA';
import ComponentB from '@/routes/Nested/routes/ComponentB';
import NotFound from '@/routes/NotFound';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/dynamic/:id',
      name: 'Dynamic',
      component: Dynamic,
    },
    {
      path: '/nested',
      component: Nested,
      children: [
        {
          path: 'componentA',
          component: ComponentA,
        },
        {
          path: 'componentB',
          component: ComponentB,
        },
      ],
    },
    {
      path: '/not-found',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '*',
      redirect: '/not-found',
    },
  ],
});
