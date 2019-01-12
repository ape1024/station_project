<template>
    <div class="rightSideBottom">
        <div class="rightSidetopHead">
            候车室/检票口客流预警窗口
        </div>
        <div class="ListHeader">
            <ul class="ListHeaderUl">
                <li class="ListHeaderli ListHeaderlitext">
                    <span class="ListHeaderspan">位置</span>
                </li>
                <li class="ListHeaderli">
                    <span class="ListHeaderspan">定员</span>
                </li>
                <li class="ListHeaderli">
                    <span class="ListHeaderspan">预警人数</span>
                </li>
                <li class="ListHeaderli">
                    <span class="ListHeaderspan">预警时间</span>
                </li>
                <li class="ListHeaderli">
                    <span class="ListHeaderspan">实时比例</span>
                </li>
            </ul>
        </div>
        <ul class="summarizing">
            <li :key="index" v-for="(item, index) in waitingRoomWarnings" class="summarizingLi">
                <ul class="summarizingUl">
                    <li class="summarizingli ListHeaderlitext">
                        <span class="ListHeaderspan">{{item.name}}</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">{{item.customized}}</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">{{item.warning}}</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">{{item.warningTime}}</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">{{item.proportion}}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'rightSideBottom',
  props: ['waitingRoomWarnings'],
  created () {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .rightSideBottom
        overflow hidden
        position relative
        width 100%
        .rightSidetopHead
            border-left 5px solid #e20001
            padding-left 4px
            font-size 21px
            text-align left
            color #fff
            height 21px
    .ListHeader
        margin 20px 0 0
        height 26px
        line-height 26px
        width 100%
        font-size 21px
        overflow hidden
        .ListHeaderUl
            float right
            width 96%
            background #2c2c34
            height 100%
            position relative
            overflow hidden
            .ListHeaderli
                width 20%
                text-align center
                height 100%
                float left
                .ListHeaderspan
                    font-size 21px
    .ListHeaderlitext
        text-align left!important
    .summarizing
        overflow hidden
        overflow-y auto
        position relative
        width 100%
        height 594px
        .summarizingLi
            overflow hidden
            border-left 3px solid #cc0001
            margin-top 20px
            .summarizingUl
                float right
                background #cc0001
                width 98%
                font-size 12px
                height 100%
                position relative
                overflow hidden
                .summarizingli
                    float left
                    font-size 21px
                    text-align center
                    line-height 21px
                    width 20%
    .summarizing::-webkit-scrollbar
         display none
</style>
