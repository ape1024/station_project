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
  props: ['array', 'textData', 'arrarIndex', 'diagramHeight'],
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
        if (val.sum >= 80000) {
          coLor = '#FF0000'
        } else if (val.sum >= 40000) {
          coLor = '#FFA500'
        } else if (val.sum >= 20000) {
          coLor = '#FFFF00'
        } else if (val.sum < 20000) {
          coLor = '#008000'
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
            text-align center
            color #fff
            width 56px
        .assemblyCanvasRight
            width 864px
            height 100%
            overflow hidden
            float right

</style>
