<template>
  <div id="app">
    <el-header style="height:30px;">
      <div>
        <a v-bind:href="'/'"><h1 class="title">Cocktail</h1></a>
      </div>
    </el-header>
    <el-container>
      <el-main style="padding: 100px;">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app'
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
.title {
  color: rgb(242,243,243);
  font-size: 55px;
  letter-spacing: 10px;
}
a {
  text-decoration: none;
}
body {
  background-color: rgb(132,212,211) !important;
}
</style>
