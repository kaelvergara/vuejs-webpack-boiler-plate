<template>
  <div id="app">
    <Header></Header>
    <Sidebar></Sidebar>
    <div id="content" class="container-fluid">
      <div class="row">
        <div class="col-xs-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default {
  name: 'app',
  components: {
    Header,
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
