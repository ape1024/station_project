<template>
    <div class="rightSideBottom">
        <div class="rightSidetopHead">
            候车室/检票口客流预警窗口
        </div>
        <div class="ListHeader">
            <ul class="ListHeaderUl">
                <li class="ListHeaderli ListHeaderlitext ListHeaderliTwo">
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
                    <li class="summarizingli ListHeaderlitext ListHeaderliTwo">
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
            font-size 12px
            text-align left
            color #fff
            height 12px
    .ListHeader
        margin 10px 0 0
        height 12px
        line-height 12px
        width 100%
        font-size 12px
        overflow hidden
        .ListHeaderUl
            float right
            width 96%
            background #2c2c34
            height 100%
            position relative
            overflow hidden
            .ListHeaderli
                width 22%
                text-align center
                height 100%
                float left
                .ListHeaderspan
                    font-size 12px
    .ListHeaderlitext
        text-align left!important
    .summarizing
        overflow hidden
        overflow-y auto
        position relative
        width 100%
        height 337px
        .summarizingLi
            overflow hidden
            border-left 3px solid rgba(255, 0, 0, .4)
            margin-top 10px
            .summarizingUl
                float right
                background rgba(255, 0, 0, .4)
                width 98%
                font-size 12px
                height 100%
                position relative
                overflow hidden
                .summarizingli
                    float left
                    font-size 12px
                    text-align center
                    line-height 12px
                    width 22%
    .summarizing::-webkit-scrollbar
         display none
    .ListHeaderliTwo
       width 10%!important
</style>
