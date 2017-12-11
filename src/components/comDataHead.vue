<template>
    <div class="dataHead">
        {{headText}}
        <div class="rightDate">
            <div class="datePic">
                <img src="../assets/butler/date.png">
            </div>{{year}}年{{month}}月 <span v-if='showday'>{{today}}日</span>   
        </div>
    </div>
</template>
<script>
    export default {
        name: 'datahead',
        props: {
            showday:{
                type: Boolean,
                default:false
            },
            headText:{
                type: String,
                default:"xxxxxxxx"
            }
        },
        data() {
            return {
                year:2017,
                month:8,
                today: 1,
            }
        },
        methods: {
            getToday(){
                var date= new Date();
                var year=date.getFullYear();
                this.year=year;
                var month=date.getMonth();
                this.month=month+1;
                var day = new Date(year,month+1,0);
                var daycount = day.getDate();
                this.today=date.getDate();
            },
        },
        mounted() {
            this.getToday();
        }
    }
</script>
<style lang="scss" scoped>
    @import "../sass/tobe/function";
    .dataHead{
        height: rem(76);
        padding: 0 rem(30);
        @include display(flex);
        @include align-items(center);
        @include justify-content(space-between);
        color: #4E6174;
        .rightDate{
            font-size: rem(24);
            @include display(flex);
            @include align-items(center);
            color: #6989A2;
            line-height: 1
        }
        .datePic{
            font-size: 0;
            width: rem(24);
            margin-right: rem(10);
        }
    }
</style>
