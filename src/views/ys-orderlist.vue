<template>
  <div>
    <div class="content">
      <bar barStyle="bar-dark-linear">
        <div class="button" slot="left-button" @click="$router.go(-1)">
          <div class="iconfont arrow-back"></div>返回
        </div>
        <div slot="title">订单列表</div>
        <div slot="right-button" class="button">
          <div class="iconfont more-v"></div>
        </div>
      </bar>
    </div>
    <!-- search srart -->
    <div class="faq-search" v-show="shows">
      <input class="faq-import" @focus="search()">
      <div class="search-default">
        <div class="searchs"></div>
        <div>搜索</div>
      </div>
    </div>
    <div class="search-ts" v-show="isShow">
      <div class="search-input">
        <input class="faq-imports" v-model="inputValue">
        <div class="search-special">
          <div class="searchs"></div>
        </div>
        <div class="search-ico" v-show="inputValue" @click="hideClose()"></div>
      </div>
      <div class="search-remove" @click="search()">取消</div>
    </div>
    <!-- search end -->
    <div class="main-select">
      <ul class="order-nav">
        <li>
          <div class="nav-name">企业</div>
          <span></span>
        </li>
        <li>
          <div>订单状态</div>
          <span></span>
        </li>
        <li @click="showtime()">
          <div>时间</div>
          <span></span>
        </li>
      </ul>
      <div class="nav-bg" :class='{ordershow: showpop}'></div>
      <div class="business">
        <div class="items">
          <div class="items-li"><b>上海中石化易捷专区</b><i class="ico-up"></i></div>
          <ul>
            <li class="active"><i></i>易捷商业中心</li>
            <li><i></i>零售分公司</li>
          </ul>
        </div>
        <div class="items">
          <div class="items-li"><b>上海中石化易捷专区2</b><i></i></div>
          <ul>
            <li><i></i>易捷商业中心</li>
            <li><i></i>零售分公司</li>
          </ul>
        </div>
        <div class="items">
          <div class="items-li"><b>易捷专区 1</b><i></i></div>
          <ul>
            <li><i></i>易捷商业中心</li>
            <li><i></i>零售分公司</li>
          </ul>
        </div>
        <div class="items">
          <div class="items-li"><b>易捷专区 2</b><i></i></div>
          <ul>
            <li><i></i>易捷商业中心</li>
            <li><i></i>零售分公司</li>
          </ul>
        </div>
        <div class="items">
          <div class="items-li"><b>易捷专区 2</b><i></i></div>
          <ul>
            <li><i></i>易捷商业中心</li>
            <li><i></i>零售分公司</li>
          </ul>
        </div>
      </div>
      <div class="business">
        <ul class="order-status">
          <li class="active"><i></i>等待买家付款</li>
          <li><i></i>待配送</li>
          <li><i></i>配送中</li>
          <li><i></i>已完成</li>
          <li><i></i>售后</li>
        </ul>
      </div>
      <div class="business" :class='{ordershow: showpop}' >
        <group>
          <datetime v-model="value1" @on-change="change" clear-text="选择时间" :title="'开始时间'"></datetime>
        </group>
        <group>
          <datetime v-model="value2" @on-change="change" clear-text="选择时间" :title="'结束时间'"></datetime>
        </group>
        <!-- <div class="items-li">
          <b>结束时间</b>
          <div class="items-time">
           <span>选择</span><i></i>
          </div>
        </div> -->
      </div>
    </div>
    <div class="order-list">
      <div class="order-detail">
        <div class="order-datetime">2017.05.01～2017.08.01</div>
        <div class="order-title">
          <div class="order-line">订单号 FXYS20171130</div>
        </div>
        <div class="order-date">
          <div class="order-cont">
            <div><label>订单日期</label>2017-11-30</div>
            <div><label>订单金额</label><i>&yen;</i>59.22</div>
          </div>
          <div class="order-cont">
            <div><label>订单状态</label><span>等待买家付款</span></div>
            <div><label>收货电话</label>021-11334039</div>
          </div>
        </div>
      </div>
      <div class="order-detail">
        <div class="order-title">
          <div class="order-line">订单号 FXYS20171130</div>
        </div>
        <div class="order-date">
          <div class="order-cont">
            <div><label>订单日期</label>2017-11-30</div>
            <div><label>订单金额</label><i>&yen;</i>59.22</div>
          </div>
          <div class="order-cont">
            <div><label>订单状态</label><span>待发货</span></div>
            <div><label>收货电话</label>021-11334039</div>
          </div>
        </div>
      </div>
      <div class="order-detail">
        <div class="order-title">
          <div class="order-line">订单号 FXYS20171130</div>
        </div>
        <div class="order-date">
          <div class="order-cont">
            <div><label>订单日期</label>2017-11-30</div>
            <div><label>订单金额</label><i>&yen;</i>59.22</div>
          </div>
          <div class="order-cont">
            <div><label>订单状态</label>已完成</div>
            <div><label>收货电话</label>021-11334039</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="../sass/ys-orderlist.scss"></style>

<script>
import bar from '../components/bar';
import { Datetime,Group } from 'vux'
export default {
  components: {
    bar,
    Datetime,
    Group
  },
  data() {
    return {
      inputValue: '',
      isShow: false,
      shows: true,
      value1: '选择',
      value2: '选择',
      showpop: false,
    }
  },
  methods: {
    search() {
      this.isShow = !this.isShow;
      this.shows = !this.shows;
      this.inputValue = '';
    },
    hideClose() {
      this.inputValue = '';
    },
    change (value) {
      console.log('change', value)
    },
    cancel() {

    },
    showtime() {
      this.showpop = !this.showpop;
    }
  },
  mounted() {
    var navHeight=document.getElementsByClassName("nav-bg")[0].clientHeight;
    var business=document.getElementsByClassName("business")[0];
    business.style.height = navHeight + "px";
  }
}
</script>
