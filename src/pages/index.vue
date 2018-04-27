<template>
    <div class="index">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: "index",
  data() {
    return {
    };
  },
  created(){
  },
};
</script>

<style scoped>
.index {
  min-width: 1366px;
  height:100%;
}
.v-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.content {
  height: 100%;
}
.content-wrapper {
  height: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  overflow: hidden;
}
.content-view {
  flex: 1;
  padding: 20px;
  overflow: auto;
}
</style>
