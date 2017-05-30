/* globals localStorage firebase */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    id: null,
  },
  getters: {
    isLoggedIn: () => () => {
      const user = localStorage.getItem('user_token');

      return user;
    },
  },
  mutations: {
    setToken(state, { uid }) {
      localStorage.setItem('user_token', uid);
    },

    deleteToken() {
      localStorage.removeItem('user_token');
    },
  },
  actions: {
    logIn({ commit }, { email, password }) {
      return new Promise((resolve) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
          commit('setToken', user);
          resolve();
        });
      });
    },
    logOut({ commit }) {
      return new Promise((resolve) => {
        firebase.auth().signOut().then(() => {
          commit('deleteToken');
          resolve();
        });
      });
    },
  },
  strict: debug,
});
