<template>
    <div class="rightSideTop">
        <div class="rightSidetopHead">
            车站客流预警窗口
        </div>
        <div class="ListHeader">
            <ul class="ListHeaderUl">
                <li class="ListHeaderli ListHeaderlitext">
                    <span class="ListHeaderspan ListHeaderlitext">定员</span>
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
                        <span class="ListHeaderspan">{{warning.customized}}</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">{{warning.warning}}</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">{{warning.warningTime}}</span>
                    </li>
                    <li class="summarizingli">
                        <span class="ListHeaderspan">{{warning.proportion}}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'rightSideTop',
  props: ['warning'],
  data () {
    return {

    }
  },
  methods: {

  },
  created () {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .rightSideTop
        overflow hidden
        position relative
        width 100%
        margin-top 16px
        .rightSidetopHead
            border-left 5px solid #e20001
            padding-left 4px
            font-size 21px
            text-align left
            color #fff
            height 21px
        .ListHeader
            margin 20px 0
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
                    width 25%
                    text-align center
                    height 100%
                    float left
                    .ListHeaderspan
                        font-size 21px
        .summarizing
            overflow hidden
            position relative
            width 100%
            height 80px
            .summarizingLi
               border-left 3px solid #EE9D29
               overflow hidden
               .summarizingUl
                   float right
                   width 98%
                   background #EE9D29
                   height 100%
                   position relative
                   overflow hidden
                   .summarizingli
                       float left
                       font-size 21px
                       text-align center
                       line-height 21px
                       width 25%
    .ListHeaderlitext
        text-align left!important

</style>
