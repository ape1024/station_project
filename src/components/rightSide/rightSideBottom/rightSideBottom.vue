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
            <li class="summarizingLi">
                <ul class="summarizingUl">
                    <li class="summarizingli ListHeaderlitext">
                        <span class="ListHeaderspan">27000</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">10000</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">10000</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">10:00</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">1:1</span>
                    </li>
                </ul>
            </li>
            <li class="summarizingLi">
                <ul class="summarizingUl">
                    <li class="summarizingli ListHeaderlitext">
                        <span class="ListHeaderspan">27000</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">10000</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">10000</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">10:00</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">1:1</span>
                    </li>
                </ul>
            </li>
            <li class="summarizingLi">
                <ul class="summarizingUl">
                    <li class="summarizingli ListHeaderlitext">
                        <span class="ListHeaderspan">27000</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">10000</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">10000</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">10:00</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">1:1</span>
                    </li>
                </ul>
            </li>
            <li class="summarizingLi">
                <ul class="summarizingUl">
                    <li class="summarizingli ListHeaderlitext">
                        <span class="ListHeaderspan">27000</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">10000</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">10000</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">10:00</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">1:1</span>
                    </li>
                </ul>
            </li>
            <li class="summarizingLi">
                <ul class="summarizingUl">
                    <li class="summarizingli ListHeaderlitext">
                        <span class="ListHeaderspan">27000</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">10000</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">10000</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">10:00</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">1:1</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'rightSideBottom'
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
            font-size 14px
            text-align left
            color #fff
            height 14px
    .ListHeader
        margin 10px 0 0
        height 10px
        line-height 10px
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
                width 20%
                text-align center
                height 100%
                float left
                .ListHeaderspan
                    font-size 12px
                    -webkit-transform scale(0.6)
                    transform scale(0.6)
    .ListHeaderlitext
        text-align left!important
    .summarizing
        overflow hidden
        overflow-y auto
        position relative
        width 100%
        height 324px
        .summarizingLi
            overflow hidden
            border-left 3px solid #cc0001
            margin-top 10px
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
                    font-size 12px
                    text-align center
                    line-height 20px
                    width 20%
    .summarizing::-webkit-scrollbar
         display none
</style>
