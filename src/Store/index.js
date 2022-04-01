import axios from "axios";
import { createStore } from "vuex";

// Create a new store instance.
export default createStore({
  state() {
    return {
      token: null,
      user: null,
      noty: {
        status: false,
        message: null,
        type: null,
      },
    };
  },
  mutations: {
    setToken(state, token) {
      localStorage.removeItem("token");
      state.token = token;
      localStorage.setItem("token", token);
      // console.log(state.token)
    },
    setUser(state, user) {
      localStorage.removeItem("user");
      localStorage.removeItem("monthlyTarget")
      state.user = user;
      var result = encodeURIComponent(JSON.stringify(user));
      localStorage.setItem("user", result);
    },
    fetchUser(state, context) {
      var data = localStorage.getItem("user");
      if (data) {
        data = decodeURIComponent(data);
        data = JSON.parse(data);

        state.user = data;
        state.token = localStorage.getItem("token")
      } else {
        window.location.href = "/sign-in";
      }
    },
    logOut(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("monthlyTarget")
      localStorage.removeItem("dailyExpenses")
      window.location.href = "/sign-in";
    },
    setNoty({ noty }, data) {
      noty.status = true;
      noty.message = data.message;
      noty.type = data.type;
      setTimeout(() => {
        noty.status = false;
        noty.message = null;
        noty.type = null;
      }, 3500);
    },
  },
  actions: {
    updateUser (context, token) {
      var headers = {
        Authorization: `Bearer ${context.state.token}`,
        'Content-Type': 'application/json'
      }
      var res = axios.get('https://campaign.fundall.io/api/v1/base/profile', { headers: headers })
      .then(res => {
        console.log(res.data.success.data)
        context.commit('setUser', res.data.success.data)
        context.commit('fetchUser')
      })
      .catch(err => {
        console.log(err.response.data.error.message)
        context.commit('setNoty', {
          message: err.response.data.error.message,
          type: 'error'
        })
      })
    }
  }
});
