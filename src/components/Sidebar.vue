<template>
  <div class="sidebar">
    <div class="sidebar__navigation-links">
      <span>Routes</span>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/dynamic/1">Dynamic</router-link></li>
        <li><router-link to="/nested">Nested</router-link></li>
        <li><router-link to="/lazy-loading">Lazy Loading</router-link></li>
      </ul>
      <span>Forms</span>
      <ul>
        <li><router-link to="/simple-form">Simple Form</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped>
.sidebar {
  position: absolute;
  top: 52px;
  left: 0;
  bottom: 0;
  width: 200px;
  background-color: #f7f7f9;
}

.sidebar__navigation-links {
  padding: 10px;
}
</style>

