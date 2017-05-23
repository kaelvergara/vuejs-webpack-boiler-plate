import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';

Vue.use(Router);

const Dynamic = (resolve) => {
  require.ensure(['../routes/Dynamic/index.vue'], () => {
    resolve(require('../routes/Dynamic/index.vue'));
  });
};

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
  ],
});
