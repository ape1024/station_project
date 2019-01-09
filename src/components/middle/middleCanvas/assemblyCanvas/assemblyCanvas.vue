<template>
    <div class="assemblyCanvas" :style="{ height: diagramHeight + 'px', lineHeight: diagramHeight + 'px' }">
        <div class="assemblyCanvasLeft" :style="{ background: textData.color }">
            {{textData.name}}
        </div>
        <div class="assemblyCanvasRight" >
            <canvas :id="canvasIndex" width="864" :height="diagramHeight"></canvas>
        </div>
    </div>
</template>

<script>
export default {
  name: 'assemblyCanvas',
  data () {
    return {
      canvasIndex: ''
    }
  },
  props: ['array', 'textData', 'arrarIndex', 'diagramHeight', 'personnelAlarm'],
  mounted () {
    this.ergodic(this.array)
  },

  methods: {
    //  遍历canvas 1440份
    ergodic (arr) {
      //  单个canvas的宽度
      let canvasWidth = 864 / 48
      let c = document.getElementById(`${this.canvasIndex}`)
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
          coLor = 'rgba(155, 0, 0, .4)'
        } else {
          coLor = 'rgba(255, 0, 0, .4)'
        }
        sum = canvasWidth * index
        ctx.fillStyle = coLor
        ctx.fillRect(sum, -5, canvasWidth, 30)
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
        overflow hidden
        position relative
        width 100%
        .assemblyCanvasLeft
            float left
            height 100%
            font-size 6px
            text-align center
            color #fff
            width 56px
        .assemblyCanvasRight
            width 864px
            height 100%
            overflow hidden
            float right

</style>
