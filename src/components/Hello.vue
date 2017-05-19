<template>
  <span>Hello</span>
</template>

<script>
export default {
  name: 'hello',
  data() {
    // directly get data from vuex store
    return {
      msg: this.$store.state.welcomeMessage,
    };
  },
};
</script>
