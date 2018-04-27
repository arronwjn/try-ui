<template>
  <el-dialog
      :title="title"
      :visible.sync="centerDialogVisible"
      :width="width"
      :modal-append-to-body="true"
      @close="handleClose"
      center>
      <slot name="dialog-body"></slot>
      <span slot="footer" class="dialog-footer" v-if="showButton">
        <el-button @click="Submit">提 交</el-button>
      </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      centerDialogVisible: this.show
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title:{
      type:String,
      default:'提示'
    },
    width:{
      type:String,
      default:'30%'
    },
    showButton:{
      type:Boolean,
      default:true
    }
  },
  methods:{
    Submit(){
      this.$emit('update:show',this.show);
      this.$emit('selectSubmit')
    },
    handleClose(){
      this.$emit('selectClose')
      this.$emit('update:show',false);
    }
  },
  watch: {
    show() {
      this.centerDialogVisible = this.show;
    }
  }
};
</script>

<style scoped>
.modelBox {
  position: relative;
  position: fixed;
  bottom: 0;
  right: 0;
  width: calc(100% - 201px);
  height: calc(100% - 40px);
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
}
.wrapper {
  margin-top: 200px;
}
.wrapper-footer {
  display: flex;
  justify-content: center;
}
.wrapper-body {
  margin: 0 auto;
}
</style>

