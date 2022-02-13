<template>
  <div id="app">
    <HymnSearch/>
  </div>
</template>

<script>
import HymnSearch from './components/HymnSearch.vue'

export default {
  name: 'app',
  components: {
    HymnSearch
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
