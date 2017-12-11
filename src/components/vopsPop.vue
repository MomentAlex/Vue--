<template>
  <div class="vops-pop" :class='{showpop:showpop}'>
    <div class="vops-bg"></div>
    <div class="vops-info">
      <div>切换账号</div>
      <div @click='hidepop'>取消</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vopspop',
  data() {
    return {}
  },
  props: {
    showpop:{
            type: Boolean,
            default:false
       }
  },
  methods: {
        hidepop : function(){
            this.$emit('showchangge');
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../sass/tobe/function";
.vops-pop{
  display: none;
  &.showpop{
        display: block;
  }
}
.vops-bg {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
}
.vops-info{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #EFEFF4;
    z-index: 22222;
    div{
      @include hairline(bottom, #d9d9d9);
      position: relative;
      height: rem(100);
      line-height: rem(100);
      text-align: center;
      font-size: rem(34);
      color: #585858;
      background: #fff;
      &:last-child{
        margin-top: rem(16);
        font-size: rem(30);
        color: #000000;
        font-weight: bold;
      }
    }
}
</style>
