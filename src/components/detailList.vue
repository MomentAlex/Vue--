<template>
    <div>
        <div class="list-box">
            <ul>
                <li v-for='(item,index) in detaildatas'>
                    <div class="list-log">
                        <img src="http://placeholder.qiniudn.com/48x48">
                    </div>
                    <div class="list-detail">
                        <div class="list-name">
                            阿道夫是巨大风姣开...阿道夫是巨大风姣开...
                        </div>
                        <div class="list-percent">
                            34%
                        </div>
                        <div class="list-num">
                            123,123,412
                            <div class="iconfont arrow-back" v-show='enter'></div>
                        </div>
                        <slot></slot>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'detailList',
    props: {
        enter: {
            type: Boolean,
            default: true
        },
        detaildatas: {
            type: Array,
            default: () => {
                return []
            }
        },
    },
    data() {
        return {}
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
@import "../sass/tobe/function";
.list-box {
    padding-left: rem(30);
    background: #ffffff;
    margin: 0 rem(20);
    border-radius: rem(6);
    li {
        height: rem(88);
        @include hair(bottom, #d9d9d9);
        background-origin: border-box;
        padding-right: rem(30);
        @include display(flex);
        @include align-items(center);
        .list-log {
            width: rem(48);
            height: rem(48);
            border-radius: 50%;
            overflow: hidden;
            margin-right: rem(24);
        }
        .list-detail {
            @include flex(1);
            @include display(flex);
            @include align-items(center);
        }
        .list-name {
            width: rem(280);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .list-percent {
            width: rem(72);
            margin-right: rem(30);
        }
        .list-num {
            @include flex(1);
            @include display(flex);
            @include align-items(center);
            @include justify-content(flex-end);
            color: #666666;
            .arrow-back {
                @include transform( rotate(180deg));
                margin-left: rem(20);
                color: #c7c7c7;
            }
        }
    }
}
</style>
