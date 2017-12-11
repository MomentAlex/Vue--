<template>
  <div>
    <div class="content">
      <bar barStyle="bar-dark-linear">
        <div class="button" slot="left-button" @click="$router.go(-1)">
          <div class="iconfont arrow-back"></div>返回
        </div>
        <div slot="title">订单详情</div>
        <div slot="right-button" class="button">
          <div class="iconfont more-v"></div>
        </div>
      </bar>
    </div>
    <div class="order-detail">
      <div class="detail-bg">
        <div class="detail-title">
          <div>订单号 FXYS20171130</div>
          <div class="red">已完成</div>
        </div>
      </div>
      <div class="detail">
        <div class="order-info order-button">
          <div>
            <div><label>订单日期</label>2017-11-30</div>
            <div class="order-num"><label>订单金额</label><span class="red"><i>&yen;</i>59.22</span></div>
          </div>
          <div>
            <button @click='showchangge'>申请退款</button>
          </div>
        </div>
        <div class="order-info">
          <label>分销商户</label>
          <div>易捷商业中心易捷商业中心易捷商业中心易捷商业中心</div>
        </div>
        <div class="order-info">
          <label>经营店铺</label>
          <div>Salvatore Ferragamo 旗舰店</div>
        </div>
        <div class="order-info">
          <label>收货人员</label>
          <div>吴丹丹 13390908790</div>
        </div>
        <div class="order-info">
          <label>收货地址</label>
          <div>上海市黄浦区四川南路26号7楼</div>
        </div>
      </div>
    </div>
    <div class="detail-list">
      <div class="list-goods">
        <div><img src="http://placeholder.qiniudn.com/160x160" /></div>
        <div>
          <div class="list-title">商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品...</div>
          <div class="list-id">
            <div>
              <label>商品ID号: 72163</label>
              <div class="list-price"><span class="red"><i>&yen;</i>00.00</span>X 1</div>
            </div>
            <div>
              <button @click='showchangge'>申请退货</button>
            </div>
          </div>
        </div>
      </div>
      <div class="list-goods">
        <div><img src="http://placeholder.qiniudn.com/160x160" /></div>
        <div>
          <div class="list-title">商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品...</div>
          <div class="list-id">
            <div>
              <label>商品ID号: 72163</label>
              <div class="list-price"><span class="red"><i>&yen;</i>00.00</span>X 1</div>
            </div>
            <div>
              <button>申请退货</button>
            </div>
          </div>
        </div>
      </div>
      <div class="list-goods">
        <div><img src="http://placeholder.qiniudn.com/160x160" /></div>
        <div>
          <div class="list-title">商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品...</div>
          <div class="list-id">
            <div>
              <label>商品ID号: 72163</label>
              <div class="list-price"><span class="red"><i>&yen;</i>00.00</span>X 1</div>
            </div>
            <div>
              <button>申请退货</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 退货弹窗 -->
    <div class="order-pop" :class='{showpop:showpop}'>
      <div class="order-bg"></div>
      <div class="modal">
          <div class="modal-inner">
              <div class="modal-text">
                  申请退货
              </div>
              <div class="modal-info">
                请输入短信验证码完成退货申请验证码已发至*******0345手机
              </div>
              <div class="modal-input">
                  <input placeholder="" v-model="inputValue" />
                  <div class="btn-ico" v-show="inputValue" @click="hideClose()"></div>
              </div>
          </div>
          <div class="modal-buttons">
              <div class="modal-button" @click='showchangge'>取消</div>
              <div class="modal-button" :class='{sure:inputValue}'>确认</div>
          </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="../sass/ys-orderdetail.scss"></style>
<script>
  import bar from '../components/bar';
  export default {
    components: {
      bar
    },
    data(){
      return {
        inputValue: '',
        showpop: false,
      }
    },
    methods: {
      showchangge: function() {
        this.showpop = !this.showpop;
      },
      hideClose() {
        this.inputValue = '';
      }
    },
  }
</script>
