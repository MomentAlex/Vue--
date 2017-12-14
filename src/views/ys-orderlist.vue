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
    <div class="order-search">
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
    </div>
    <!-- search end -->
    <div class="main-select">
      <ul class="order-nav">
        <li @click="showtime(1)">
          <div :class='{"nav-name": nav1}'>{{msgBusiness}}</div>
          <span :class='{flipy: i==1}'></span>
        </li>
        <li @click="showtime(2)">
          <div :class='{"nav-name": nav2}'>{{msgstatus}}</div>
          <span :class='{flipy: i==2}'></span>
        </li>
        <li @click="showtime(3)" >
          <div>时间</div>
          <span :class='{flipy: i==3}'></span>
        </li>
      </ul>
      <div class="nav-bg" v-show='oIndex != 0'></div>
      <div class="business" v-show='oIndex==1'>
        <div class="fold">
          <div class="items" v-for="(item,mindex) in items">
            <div class="items-li" @click="showToggle(item)"><b>{{item.name}}</b><i :class='{"ico-up": item.isSubShow}'></i></div>
            <ul v-show="item.isSubShow">
              <li v-for="(subItem, sindex) of item.subItems" :class="{active:selected==mindex+'_'+sindex}" @click="itemToggle(mindex,sindex)"><i></i>{{subItem.name}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="business" v-show='oIndex==2'>
        <ul class="order-status">
          <li v-for="(item, index) of status" :class="{active:select==index}" @click="itemclick(index)"><i></i>{{item}}</li>
        </ul>
      </div>
      <div class="business y-datetime" v-show='oIndex==3'>
        <group>
          <datetime v-model="value1" @on-change="change" clear-text="选择时间" :title="'开始时间'"></datetime>
        </group>
        <group>
          <datetime v-model="value2" @on-change="change" clear-text="选择时间" :title="'结束时间'"></datetime>
        </group>
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
    Group,
  },
  data() {
    return {
      inputValue: '',
      isShow: false,
      shows: true,
      value1: '选择',
      value2: '选择',
      select: 0,
      selected: '0_0',
      status: ["等待买家付款","待配送","配送中","已完成","售后"],
      msgstatus: '订单状态',
      msgBusiness: '企业',
      nav1: false,
      nav2: false,
      oIndex:0,
      i: 0,
      items:[
        {
          name:'上海中石化易捷专区',
          isSubShow:true,
          subItems:[
            {
              name:'易捷商业中心'
            },
            {
              name:'零售分公司2'
            },
            {
              name:'零售分公司3'
            }
          ]
        },
        {
          name:'上海中石化易捷专区 2',
          isSubShow:false,
          subItems:[
            {
              name:'零售分公司4'
            },
            {
              name:'零售分公司5'
            },
            {
              name:'零售分公司6'
            }
          ]
        },
        {
          name:'零售分公司',
        }
      ],
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
    showtime(num) {
      if(this.oIndex==0){
        this.oIndex = num;
        this.i = num;
        if(num==1){
          var bodyHeight=window.innerHeight;
          var barHeight=document.getElementsByClassName("bar")[0].clientHeight;
          var sHeight=document.getElementsByClassName("order-search")[0].clientHeight;
          var mHeight=document.getElementsByClassName("main-select")[0].clientHeight;
          var business=document.getElementsByClassName("business")[0];
          var itemHeigt=bodyHeight - barHeight - sHeight -mHeight;
          business.style.height = itemHeigt + "px";
        }
      }else{
        this.oIndex = 0;
        this.i = 0;
      }
    },
    itemclick(index){
      this.select=index;
      this.msgstatus=this.status[index];
      console.log(this.msgstatus);
      this.nav2 = true;
    },
    showToggle(item){
      item.isSubShow = !item.isSubShow;
    },
    itemToggle(mindex,sindex){
      console.log(this.items[mindex].subItems[sindex])
      this.selected = mindex+'_'+sindex;
      this.nav1 = true;
      this.msgBusiness=this.items[mindex].subItems[sindex].name;

    },
  },
  mounted() {

  }
}
</script>
