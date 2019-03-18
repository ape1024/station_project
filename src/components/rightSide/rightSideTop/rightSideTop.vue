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
            <li class="summarizingLi" :key="index" v-for="(item, index) in warning">
                <ul class="summarizingUl">
                    <li class="summarizingli ListHeaderlitext">
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
        .rightSidetopHead
            border-left 5px solid #e20001
            padding-left 4px
            font-size 16px
            text-align left
            color #fff
            height 16px
        .ListHeader
            margin 10px 0
            height 22px
            line-height 22px
            width 100%
            font-size 14px
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
                        font-size 16px
        .summarizing
            overflow-x hidden
            position relative
            width 100%
            overflow-y auto
            height 260px
            .summarizingLi
               margin-bottom 10px
               border-left 3px solid rgba(255, 240, 0, .4)
               overflow hidden
               .summarizingUl
                   float right
                   width 98%
                   background rgba(255, 240, 0, .4)
                   height 100%
                   position relative
                   overflow hidden
                   .summarizingli
                       float left
                       font-size 16px
                       text-align center
                       line-height 22px
                       width 25%
    .ListHeaderlitext
        text-align left!important

</style>
