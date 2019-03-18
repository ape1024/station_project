<template>
    <div class="middle">
        <!--折线图-->
        <div class="middleLinechart">
            <middleLinechart v-if="time.length" :middleTime="time" :waitingRoom="waitingRoomPersonnels"></middleLinechart>
        </div>
        <!--canvas-->
        <div class="middleCanvas">
            <middleCanvas v-if="waitingRoomPersonnels.length" :waitingRoomPersonnels="waitingRoomPersonnels" :middleTime="time"></middleCanvas>
        </div>
    </div>
</template>

<script>
import middleLinechart from './middleLinechart/middleLinechart'
import middleCanvas from './middleCanvas/middleCanvas'

export default {
  name: 'middle',
  props: ['time', 'waitingRoomPersonnels'],
  data () {
    return {
    }
  },
  components: {
    middleLinechart,
    middleCanvas
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .middle
      width 100%
      margin-top 10px
      position relative
      overflow hidden
      .middleLinechart
         width 100%
         margin-bottom 10px
         margin-top 10px
         overflow hidden
         position relative
      .middleCanvas
          width 1295px
          overflow hidden
          position relative
</style>
