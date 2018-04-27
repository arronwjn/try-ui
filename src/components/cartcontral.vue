<template>
  <div class="cartcontral">
    <transition name="move">
      <div class="cart-decrease" v-show="count.count>0" @click.stop.prevent="decreaseCart($event)">
        <i class="fa fa-minus-circle inner" aria-hidden="true"></i>
      </div>
    </transition>
    <transition name="move-count">
      <div class="cart-count" v-show="count.count>0"><span class="rotate" >{{count.count}}</span></div>
    </transition>
    <div class="cart-add"><i class="fa fa-plus-circle" aria-hidden="true" @click.stop.prevent="addCart($event)"></i></div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  props: {
    count: {
      type: Object
    }
  },
  methods: {
    addCart(event) {
      // if (!event._constructed) {
      //   return;
      // }
      // if (!this.count) {
      //   Vue.set("count", 1);
      // } else {
      //   this.count++;
      // }
      // this.$emit("update:count",this.count++);
      this.count.count++;
      // this.$emit("cartAdd", event,this.count)
    },
    decreaseCart(event) {
      // if (!event._constructed) {
      //   return;
      // }
      if (this.count.count == 1) {
        return;
      }
      this.count.count--;
      // this.$emit("cartDecrease", event)
    }
  },
  computed:{
    addCount(){
      this.count++;
    }
  }
};
</script>

<style scoped>
.cartcontral {
  font-size: 0;
}
.cart-decrease {
  display: inline-block;
  padding: 6px;
  transition: all 0.1s linear;
}
.inner {
  display: inline-block;
  line-height: 24px;
  font-size: 24px;
  color: rgb(0, 160, 220);
  transition: all 0.4s linear;
  transform: rotate(0);
}
.move-transition {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
.move-leave-active,
.move-enter-active {
  opacity: 0;
  transform: translate3d(24px, 0, 0);
}
/*.move-enter-active{*/
/*opacity:0;*/
/*transform: translate3D(24px,0,0);*/
/*}*/
.move-leave-active .inner {
  transform: rotate(360deg);
}
.move-enter-active .inner {
  transform: rotate(360deg);
}
.cart-count {
  display: inline-block;
  vertical-align: middle;
  padding-top: 6px;
  padding-bottom: 6px;
  line-height: 24px;
  text-align: center;
  font-size: 10px;
  color: rgb(147, 153, 159);
  transition: all 0.2s linear;
}
.rotate {
  vertical-align: top;
  display: inline-block;
  line-height: 24px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s linear;
  transform: rotate(0);
}
.move-count-transition {
  opacity: 1;
  transform: translate3D(0, 0, 0);
}
.move-count-leave-active,
.move-count-enter-active {
  opacity: 0;
  transform: translate3D(24px, 0, 0);
}
.move-count-leave-active .rotate {
  transform: rotate(-180deg);
}
.move-count-enter-active .rotate {
  transform: rotate(-180deg);
}
.cart-add {
  display: inline-block;
  padding: 6px;
  line-height: 24px;
  font-size: 24px;
  color: rgb(0, 160, 220);
}
</style>
