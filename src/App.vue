<template>
  <div id="app">
    <exo1 />
  </div>
</template>

<script>
import exo1 from './components/exo1.vue'

export default {
  name: 'App',
  components: {
    exo1
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
  margin-top: 60px;
}
</style>
