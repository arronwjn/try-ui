<template>
    <div class="index">
        <div class="load-wraper">
            <load :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
                <ul>
                  <li v-for="(item,index) in 100" :key="index">{{ item }}</li>
                </ul>
                <!-- <div slot="top" class="mint-loadmore-top">
                  <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
                  <span v-show="topStatus === 'loading'">Loading...</span>
                </div> -->
            </load>
        </div>
    </div>
</template>

<script>
import load from "components/loadmore";
export default {
  name: "index",
  components: {
    load
  },
  data() {
    return {
      topStatus: '',
    };
  },
  created() {},
  methods: {
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
    },
    handleTopChange(status) {
      this.topStatus = status;
      console.log(status);
    },
  }
};
</script>

<style scoped>
.index {
  width: 100%;
  height: 100%;
  font-size: 16px;
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
.load-wraper{
  /* height:480px; */
}
</style>
