<style lang="scss">
.loading-box {
    position:fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.6);
    z-index: 1000;
}

.loading-start {
  position: absolute;
  top: 50%;
  left:50%;
  margin-left: -15px;
  margin-top:-15px;
  animation: rotate-forever 1s infinite linear;
  -webkit-animation: rotate-forever 1s infinite linear;
  transform:translate3d(-50%,-50%,0);
  -webkit-transform:translate3d(-50%,-50%,0);
  height: 30px;
  width: 30px;
  border: 4px solid #ccc;
  border-right-color: transparent;
  border-radius: 50%;
  
}

@keyframes rotate-forever {
  0% {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}
</style>
<template>
  <div class="loading-box" v-show="loading">
    <div :class="{'loading-start' : loading}">
    </div>
  </div>
</template>
<script>

export default {
  props: {
    loading: { // 是否在请求中
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
 
}
</script>
