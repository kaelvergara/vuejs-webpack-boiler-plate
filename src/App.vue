<template>
  <div id="app">
    <AppHeader></AppHeader>
    <Sidebar></Sidebar>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import Sidebar from './components/Sidebar';

export default {
  name: 'app',
  components: {
    AppHeader,
    Sidebar,
  },
};
</script>

<style scope>
#content {
  position: absolute;
  top: 80px;
  left: 200px;
  right: 0;
  bottom: 0;
}
</style>
