<template>
  <div>
    <span>Lazy Loading</span>
    <router-link to="/lazy-loading/componentA">Component A</router-link>
    <router-link to="/lazy-loading/componentB">Component B</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Lazyloading',
};
</script>
