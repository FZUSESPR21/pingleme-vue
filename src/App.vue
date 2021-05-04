<template>
  <div id="app" style="height:0px;margin-top: 0px;">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
};
</script>

<style>
#app {
  height:100%;
  width:100%;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
