<template>
  <div id="login-page" class="row">
    <div class="col-xs-6 col-xs-offset-3">
      <div class="jumbotron">
        <div class="container">
          <form class="form-horizontal">
            <div class="form-group">
              <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
              </div>
            </div>
            <div class="form-group">
              <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <div class="checkbox">
                  <label>
                    <input type="checkbox"> Remember me
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button type="button" class="btn btn-default" v-on:click="logIn">Sign in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    logIn() {
      this.$store.dispatch('logIn', { email: 'test@test.com', password: 'password123' }).then(() => {
        this.$router.push('/');
      });
    },
  },
};
</script>

<style scoped>
#login-page {
  margin-top: 100px;
}
</style>
