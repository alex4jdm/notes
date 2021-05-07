<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './views/Home'
import Header from './views/Header';

export default {
  components: { Header },
  methods: {
    onNavigateToCreateFlow() {
      this.$router.push({
        path: `/create`
      })
    }
  }
}
</script>

