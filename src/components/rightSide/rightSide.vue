<template>
    <div class="rightSide">
        <div class="rightSideTop">
            <rightSideTop></rightSideTop>
        </div>
        <div class="rightSideBottom">
            <rightSideBottom></rightSideBottom>
        </div>
    </div>
</template>

<script>
import rightSideTop from './rightSideTop/rightSideTop'
import rightSideBottom from './rightSideBottom/rightSideBottom'
export default {
  name: 'rightSide',
  components: {
    rightSideTop,
    rightSideBottom
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .rightSide
       width 280px
       margin 10px 20px 0 0
       position relative
       overflow hidden
       .rightSidehead
           width 100%
           font-size 12px
           position relative
           overflow hidden
           .manual
               float left
               width 115px
               background #035cb8
               text-align center
               line-height 24px
               letter-spacing 2px
               border-radius 2px
               cursor pointer
               color #fff
               height 24px
               transition .2s
               -moz-box-shadow 1px 1px 1px #003269 inset
               -webkit-box-shadow 1px 1px 1px #003269inset
               box-shadow 1px 1px 1px #003269 inset
           .manual:hover
               background #036cdc
           .manual:active
               position relative
               top 1px
           .time
               margin-left 24px
               float left
               line-height 24px
               color #999
               .timeSpan
                   color #fff
</style>
