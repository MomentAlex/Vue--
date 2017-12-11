<template>
    <div>
        <div class="back-fix" :class='{showpop:showpop}'>
            <div class="pop-box">
                <div class="pop-list">
                    <ul>
                        <li v-for='time in times'>{{time}}</li>
                    </ul>
                </div>
                <div class="list-cancel" @click='changeshow'>
                     取消
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'timepop',
    props: {
       showpop:{
            type: Boolean,
            default:false
       }
    },
    data() {
        return {
            times:['昨日','近7日','近30日']
        }
    },
    methods: {
        changeshow : function(){
            this.$emit('showtimes');
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../sass/tobe/function";
.back-fix{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:rgba(0,0,0,0.6);
    z-index: 1002;
    display:none;
    .pop-box{
        background: #EFEFF4;
        position:fixed;
        bottom:-100%;
        left: 0;
        right: 0;
        z-index:1002;
        .pop-list{
            margin-bottom: rem(12);
            background: #ffffff;
        }
        li{
            height: rem(96);
            line-height: rem(96);
            text-align: center;
            @include hair(bottom,#d9d9d9);
            font-size: rem(36);
        }
        .list-cancel{
            background: #ffffff;
            height: rem(96);
            line-height: rem(96);
            text-align: center;
            font-size: rem(36);
        }
    }
    &.showpop{
        display: block;
        .pop-box{
            bottom:0;
        }
    }
}
</style>
