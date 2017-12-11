<template>
    <div>
        <div class="fix-screen" :class="{show: showtag}">
            <div class="fix-mark">
            </div>
            <div class="fix-detail">
                <div class="detail-head">
                    <div @click='hidesrc'>取消</div>
                    <div class="screen-title">筛选门店</div>
                    <div>确定</div>
                </div>
                <div class="screen-select">
                    <div class="select-result">
                        <div v-for="re in scrresult" class="result-detail">
                            {{re}}
                        </div>
                        <div class="select-intro">
                            请选择
                        </div>
                    </div>
                    <div class="select-list">
                        <ul>
                            <li v-for="(sc, index) in screen" @click='scrchoose(sc)'>
                                {{sc}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'screenCom',
    props: {
      showtag: {
        type: Boolean,
        default: false
      },
      scrresult: {
        type: Array,
        default: ()=>{
           return  []
        }
      },
      screen: {
        type: Array,
        default:()=>{
           return ['闵行区', '长宁区', '黄浦区', '静安区', '闸口区', '虹口区', '嘉定区', '杨浦区', '松江区']
        } 
      },
    },
    data() {
        return {
        }
    },
    methods: {
        scrchoose(sc) {
            if (this.scrresult.length < 4) {
                this.scrresult.push(sc);
            }
        },
        hidesrc() {

            this.$emit('showscreen');
        },
    }
}
</script>
<style lang="scss" scoped>
@import "../sass/tobe/function";
.fix-screen {
    .fix-mark {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 1001;
        display: none;
    }
    .fix-detail {
        position: fixed;
        bottom: -100%;
        left: 0;
        right: 0;
        z-index: 1005;
        background: #EFEFF4;
        transition: bottom ease .2s;
        .detail-head {
            height: rem(96);
            background: #FFFFFF;
            padding: 0 rem(30);
            font-size: rem(32);
            @include display(flex);
            @include align-items(center);
            @include justify-content(space-between);
            margin-bottom: rem(10);
            .screen-title {
                font-size: rem(36);
            }
        }
        .screen-select {
            background: #FFFFFF;
        }
        .select-result {
            height: rem(96);
            @include hair(bottom, #d9d9d9);
            @include display(flex);
            @include align-items(center);
            .result-detail {
                width: 20%;
                padding-left: rem(30);
            }
            .select-intro {
                height: rem(96);
                line-height: rem(96);
                width: 20%;
                text-align: center;
                color: #F76260;
                @include hair(bottom, #F76260);
            }
        }
        .select-list {
            max-height: rem(630);
            overflow: auto;
            li {
                height: rem(88);
                line-height: rem(88);
                padding-left: rem(30);
            }
        }
    }
    &.show {
        .fix-mark {
            display: block;
        }
        .fix-detail {
            bottom: 0;
        }
    }
}
</style>
