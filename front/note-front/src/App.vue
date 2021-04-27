<template>
  <div id="app">
    <!-- <Home /> -->
    <div>
      <button @click="onNavigateToCreateFlow()">Create Note</button>
       <!-- <router-link to="/create">Create Note</router-link> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './views/Home'

export default {
  // components: { Home }
  methods: {
    onNavigateToCreateFlow() {
      this.$router.push({
        path: `/create`
      })
    }
  }
}
</script>

