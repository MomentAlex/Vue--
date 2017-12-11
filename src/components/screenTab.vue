<template>
    <div>
        <div class="screen-tab" v-show='screen.length>0'>
            <ul>
                <li v-for='(item,index) in screen' @click='remove(index)'>
                    <div class="font">{{item}}</div>
                    <div class="close"><img src="../assets/butler/close1.png"></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'screenCom',
    props: {
      screen: {
        type: Array,
        default:()=>{
           return []
        } 
      },
    },
    data() {
        return {
        }
    },
    methods: {
        remove(index) {
            this.screen.splice(index, 1);
        },
    }
}
</script>
<style lang="scss" scoped>
@import "../sass/tobe/function";
.screen-tab {
    padding: rem(20) rem(30) 0;
    background: #FFFFFF;
    border-bottom: 1px solid #D9D9D9;
    min-height: rem(88);
    @include hair(bottom, #d9d9d9);
    background-origin: border-box;
    ul {
        overflow: hidden;
        margin-right: rem(-20);
    }
    li {
        min-width: rem(156);
        height: rem(48);
        padding: 0 rem(10);
        @include display(flex);
        @include align-items(center);
        font-size: rem(24);
        position: relative;
        @include full-line(#999999, transparent, 1px);
        float: left;
        margin-right: rem(20);
        margin-bottom: rem(20);
        .font {
            @include flex(1);
            text-align: center;
        }
        .close {
            width: rem(14);
            font-size: 0;
            margin-left: rem(8);
        }
    }
}
</style>
