<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand">
          <img alt="Brand" src="../assets/logo.png" class="app-header__brand-icon" />
        </a>
        <p class="navbar-text">Vuejs - The Good Parts</p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.app-header__brand-icon {
  width: 40px;
  margin-top: -10px;
}
</style>
