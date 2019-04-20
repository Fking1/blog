<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  height: auto;
  width: 100%;
}

#app {
  font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fff;
  color: rgba(0, 0, 0, 0.84);
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}
</style>
