<template>
  <div id="app">
    <div class="topnav">
      <router-link v-if="$store.state.isLoggedIn" to="/">Home</router-link>
      <router-link v-if="$store.state.isLoggedIn" to="/search">Search</router-link>
      <router-link v-if="$store.state.isLoggedIn" to="/filter">Food</router-link>
      <router-link v-if="$store.state.isLoggedIn" to="/favorit">Favorit</router-link>
      <div class="login">
        <router-link v-if="$store.state.isLoggedIn" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
      </div>
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      authenticated: false,
      mockAccount: {
        username: 'admin',
        password: 'admin'
      }
    }
  },
  mounted () {
    if (localStorage.getItem('isLoggedIn')) {
      this.$store.state.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))
    }
    if (!this.$store.state.isLoggedIn) {
      this.$router.replace({ name: 'Login' }).catch(err => err)
    }
  },
  methods: {
    setAuthenticated (status) {
      this.$store.commit('setLogin', status)
      localStorage.setItem('isLoggedIn', JSON.stringify(this.$store.state.isLoggedIn))
    },
    logout () {
      localStorage.removeItem('isLoggedIn')
      this.$store.commit('revokeLogin')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.router-link-exact-active {
  background-color: rgb(49, 118, 165);
  color: white;
}

.topnav .icon {
  display: none;
}

.login {
  float: right;
}

@media screen and (max-width: 500px) {
  .topnav a {
    float: none;
    display: block;
  }
}
</style>
