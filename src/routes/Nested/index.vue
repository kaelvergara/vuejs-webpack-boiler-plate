<template>
  <div>
    <span>Nested Route</span>
    <router-link to="/nested/componentA">Component A</router-link>
    <router-link to="/nested/componentB">Component B</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Nested',
};
</script>
