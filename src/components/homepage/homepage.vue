<template>
    <div class="subject">
        <!--顶部折线图-->
        <headpiece></headpiece>
        <div class="section">
            <!--下左折线图-->
            <div class="sectionLeft">
                <middle></middle>
            </div>
            <!--右侧数据-->
            <div class="sectionRight">
                <rightSide></rightSide>
            </div>
        </div>
    </div>
</template>

<script>
import headpiece from '../headpiece/headpiece'
import middle from '../middle/middle'
import rightSide from '../rightSide/rightSide'
export default {
  name: 'homepage',
  components: {
    headpiece,
    middle,
    rightSide
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.subject
    width 1260px
    overflow hidden
    position relative
    .section
      width 100%
      height 552px
      background url("../../../src/assets/bottomSide.png") no-repeat
      background-size cover
      position relative
      overflow hidden
      .sectionLeft
        width 950px
        overflow hidden
        position relative
        height 100%
        float left
      .sectionRight
        overflow hidden
        position relative
        float right
</style>
