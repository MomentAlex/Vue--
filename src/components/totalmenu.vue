<template>
    <div>
        <div class="menu-box">
            <div class="box-container">
                <div class="menu-li " :class='{gray: active!=0}'>
                    <div>
                        <div class="menu-pic survey">
                        </div>
                        <div class="menu-text">
                            概况
                        </div>
                    </div>
                </div>
                <div class="menu-li " :class='{gray: active!=1}'>
                    <div>
                        <div class="menu-pic order">
                        </div>
                        <div class="menu-text">
                            延误单
                        </div>
                    </div>
                </div>
                <div class="menu-li " :class='{gray: active!=2}'>
                    <div>
                        <div class="menu-pic data">
                        </div>
                        <div class="menu-text">
                            数据
                        </div>
                    </div>
                </div>
                <div class="menu-li " :class='{gray: active!=3}'>
                    <div>
                        <div class="menu-pic question">
                        </div>
                        <div class="menu-text">
                            Q/A
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'hello',
    data() {
        return {
            active:0
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../sass/tobe/function";
.gray {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray;
}

.menu-box {
    padding-top: rem(100);
    .box-container {
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1000;
        height: rem(100);
        background: #F8F8FA;
        @include display(flex);
        @include align-items(center);
        .menu-li {
            @include flex(1);
            @include display(flex);
            @include justify-content(center);
            .menu-pic {
                width: rem(54);
                height: rem(54);
                @include display(flex);
                @include justify-content(center);
                margin: 0 auto;
                margin-bottom: rem(6);
            }
            .menu-text {
                text-align: center;
                font-size: rem(20);
                line-height: 1;
            }
            .survey {
                background: url(../assets/butler/menu1.png) no-repeat center center;
                background-size: 100%;
            }
            .order {
                background: url(../assets/butler/menu2.png) no-repeat center center;
                background-size: 100%;
            }
            .data {
                background: url(../assets/butler/menu3.png) no-repeat center center;
                background-size: 100%;
            }
            .question {
                background: url(../assets/butler/menu4.png) no-repeat center center;
                background-size: 100%;
            }
        }
        .gray {
            .survey {
                background: url(../assets/butler/menu1-g.png) no-repeat center center;
                background-size: 100%;
            }
            .order {
                background: url(../assets/butler/menu2-g.png) no-repeat center center;
                background-size: 100%;
            }
            .data {
                background: url(../assets/butler/menu3-g.png) no-repeat center center;
                background-size: 100%;
            }
            .question {
                background: url(../assets/butler/menu4-g.png) no-repeat center center;
                background-size: 100%;
            }
            .menu-text {
                color: #999999;
            }
        }
    }
}
</style>
