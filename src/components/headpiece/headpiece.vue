<template>
    <div class="headpiece">
        <!--头部折线图-->
        <div class="headpieceTop">
            <headpieceDiagram></headpieceDiagram>
        </div>
        <div class="headpieceBottom">
            <headpiecetabulation :quantum="quantumNumber"></headpiecetabulation>
        </div>
    </div>
</template>
<script>
import headpieceDiagram from './headpieceDiagram/headpieceDiagram'
import headpiecetabulation from './headpieceDiagram/headpiecetabulation'
export default {
  name: 'headpiece',
  data () {
    return {
      quantumNumber: 11
    }
  },
  components: {
    headpieceDiagram,
    headpiecetabulation
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.headpiece
  width 100%
  height 348px
  margin-bottom 20px
  background url("../../assets/headpiece.png") no-repeat
  background-size cover cover
  position relative
  overflow hidden
  .headpieceTop
    width 100%
    height 230px
    overflow hidden
    position relative
  .headpieceBottom
    width 100%
    overflow hidden
    position relative

</style>
