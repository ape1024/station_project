<template>
    <div class="subject">
        <!--顶部折线图-->
        <headpiece v-if="false"></headpiece>
        <p class="sectionP"> 北京西站站内人数分布图</p>
        <div class="section">
            <!--下左折线图-->
            <div class="sectionLeft">
                <middle v-if="time.length" :time="time" :waitingRoomPersonnels="waitingRoomPersonnels"></middle>
            </div>
            <!--右侧数据-->
            <div class="sectionRight">
                <rightSide v-if="time.length" :warning="warning" :waitingRoomWarnings="waitingRoomWarnings"></rightSide>
            </div>
        </div>
    </div>
</template>

<script>
import headpiece from '../headpiece/headpiece'
import middle from '../middle/middle'
import rightSide from '../rightSide/rightSide'
import { todayPassenger } from '../../common/api/Interface'
export default {
  name: 'homepage',
  data () {
    return {
      time: [],
      waitingRoomPersonnels: [],
      warning: [],
      waitingRoomWarnings: []
    }
  },
  components: {
    headpiece,
    middle,
    rightSide
  },
  created () {
    this.getData()
    setInterval(() => {
      this.getData()
    }, 60000)
  },
  methods: {
    getData () {
      this.axios.get(todayPassenger()).then((data) => {
        //  折线图的时间
        this.time = data.data.data.time
        //  canvas需要的数据
        this.waitingRoomPersonnels = data.data.data.waitingRoomPersonnels
        //  车站预警信息
        this.warning = data.data.data.warnings
        //  候车室预警信息
        this.waitingRoomWarnings = data.data.data.waitingRoomWarnings
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.subject
    width 100%
    height 100%
    background url("../../../src/assets/bottomSide.png") no-repeat
    overflow hidden
    position relative
    user-select none
    .section
      margin 20px
      background-size cover
      position relative
      overflow hidden
      .sectionLeft
        width 1300px
        overflow hidden
        position relative
        height 100%
        float left
      .sectionRight
        overflow hidden
        position relative
        float right
  .sectionP
    position absolute
    left 20px
    font-size 20px
    color #fff
    top 10px
</style>
