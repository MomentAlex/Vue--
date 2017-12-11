<template>
  <div class="collec-detail">
    <div class="collec-flex">
      <label>{{infodata.lable1}}</label>
      <div>{{infodata.time}}</div>
    </div>
    <div class="collec-flex">
      <label>{{infodata.lable2}}</label>
      <div>{{infodata.num}} 件</div>
    </div>
    <div class="collec-flex">
      <label>{{infodata.lable3}}</label>
      <div v-if="showstatus"><span>0</span> 件</div>
      <div class="collec-success" v-else-if="statusFull"><i></i> <div>完成</div></div>
      <div class="collec-success" v-else><span>商品破损</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'collecinfo',
  data() {
    return {}
  },
  props: {
    showstatus: Boolean,
    statusFull:Boolean,
    infodata: Object
  }
}
</script>
<style lang="scss" scoped>
@import "../sass/tobe/function";
.collec-list {
  .collec-detail {
    background: #ffffff;
    padding: rem(6) rem(30) rem(26);
    .collec-flex {
      @include display(flex);
      @include justify-content(space-between);
      margin-top: rem(20);
      span{
        color: #F76260;
      }
      .collec-success{
        @include display(flex);
        @include justify-content(space-between);
        @include align-items(center);
        color: #47B628;
        vertical-align: middle;
        i{
            display: block;
            background: url(../assets/butler/collec-success.png) no-repeat center center;
            width: rem(20);
            height: rem(14);
            background-size: rem(20) rem(14);
            margin-right: rem(20);
        }
      }
    }
  }
}
</style>
