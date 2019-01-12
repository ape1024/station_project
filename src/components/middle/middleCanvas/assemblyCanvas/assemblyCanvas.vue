<template>
    <div class="assemblyCanvas">
        <div class="assemblyCanvasLeft" :style="{ background: textData.color }">
            {{textData.name}}
        </div>
        <div class="assemblyCanvasRight" ref="assembWithd">
            <div class="assemblyCanvasRightItem">
              <canvas ref="canvasIndex"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'assemblyCanvas',
  data () {
    return {
      canvasIndex: '',
      canvasWidth: '',
      canvasHeight: ''
    }
  },
  props: ['array', 'textData', 'arrarIndex', 'diagramHeight', 'personnelAlarm'],
  mounted () {
    this.ergodic(this.array)
  },

  methods: {
    //  遍历canvas 1440份
    ergodic (arr) {
      console.log('/')
      console.log()
      //  单个canvas的宽度
      this.canvasWidth = this.$refs.assembWithd.offsetWidth
      this.canvasHeight = this.$refs.assembWithd.offsetHeight
      let canvasWidth = this.$refs.assembWithd.clientWidth / this.array.length
      let c = this.$refs.canvasIndex
      c.width = this.canvasWidth
      c.height = this.canvasHeight
      let ctx = c.getContext('2d')
      let sum = 0
      arr.forEach((val, index) => {
        let coLor = ''
        let Proportion = val / this.personnelAlarm
        if (Proportion <= 0.7) {
          coLor = 'rgba(0, 255, 132, .4)'
        } else if (Proportion > 0.7 && Proportion < 0.85) {
          coLor = 'rgba(255, 240, 0, .4)'
        } else if (Proportion >= 0.85 && Proportion < 1) {
          coLor = 'rgba(255, 120, 0, .4)'
        } else {
          coLor = 'rgba(255, 0, 0, .4)'
        }
        sum = canvasWidth * index
        ctx.fillStyle = coLor
        ctx.fillRect(sum, 0, canvasWidth, this.canvasHeight)
      })
    }
  },
  created () {
    this.canvasIndex = `myCanvas${this.arrarIndex}`
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .assemblyCanvas
        display flex
        overflow hidden
        position relative
        width 100%
        height 100%
        .assemblyCanvasLeft
            flex-shrink 0
            box-sizing border-box
            height 100%
            font-size 21px
            display flex
            justify-content center
            align-items center
            color #fff
            width 56px
        .assemblyCanvasRight
            position relative
            width 100%
            height 100%
            overflow hidden
            .assemblyCanvasRightItem
              position absolute
              left 0
              right 0
              top 0
              bottom 0
</style>
