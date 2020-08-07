<template>
  <div id="app">
    <transition :name="'vux-pop-' + (direction === 'left' ? 'in' : 'out')">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      direction: 'right',
    }
  },
  watch: {
    // 跳转动画控制
    $route (to, from, next) {
      // 如果isBack为true时，证明是用户点击了回退，执行right动画
      let isBack = this.$router.isBack
      if (isBack) {
        this.direction = 'right'
      } else {
        this.direction = 'left'
      }
      // 做完回退动画后，要设置成前进动画，否则下次打开页面动画将还是回退
      this.$router.isBack = false
    }
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
  /* margin-top: 60px; */
}

/* html {
  font-size: 12px;
} */
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 300ms;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>

