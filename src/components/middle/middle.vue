<template>
    <div class="middle">
        <!--折线图-->
        <div class="middleLinechart">
            <middleLinechart></middleLinechart>
        </div>
        <!--canvas-->
        <div class="middleCanvas">
            <middleCanvas></middleCanvas>
        </div>
    </div>
</template>

<script>
import middleLinechart from './middleLinechart/middleLinechart'
import middleCanvas from './middleCanvas/middleCanvas'
export default {
  name: 'middle',
  data () {
    return {

    }
  },
  components: {
    middleLinechart,
    middleCanvas
  },
  mounted () {
    console.log(this.data.item)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .middle
      width 100%
      margin-top 20px
      position relative
      overflow hidden
      .middleLinechart
         width 100%
         height 250px
         overflow hidden
         position relative
      .middleCanvas
          width 100%
          overflow hidden
          position relative
</style>
