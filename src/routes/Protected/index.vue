<template>
  <div>
    <h1>Auth Flow</h1>
    <ul>
      <li>
        <router-link v-if="loggedIn" to="/protected/logout">Log out</router-link>
        <router-link v-if="!loggedIn" to="/protected/login">Log in</router-link>
      </li>
      <li>
        <router-link to="/protected/dashboard">Dashboard</router-link>
        (authenticated)
      </li>
    </ul>
    <template v-if="$route.matched.length">
      <router-view></router-view>
    </template>
    <template v-else>
      <p>You are logged {{ loggedIn ? 'in' : 'out' }}</p>
    </template>
  </div>
</template>

<script>
import auth from '@/utils/auth';

export default {
  name: 'Protected',
  data() {
    return {
      loggedIn: auth.loggedIn(),
    };
  },
  created() {
    auth.onChange = (loggedIn) => {
      this.loggedIn = loggedIn;
    };
  },
};
</script>
