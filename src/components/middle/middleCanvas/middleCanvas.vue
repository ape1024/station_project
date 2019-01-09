<template>
    <div class="middleCanvas">
        <div class="diagram">
            <ul class="diagramUl" ref="monthPie">
                <li :key="index" class="diagramLi" v-for="(item, index) in caption" @click="clickPopup(item)">
                    <assemblyCanvas :array="item.personnel" :textData="item" :arrarIndex="index" :diagramHeight="diagramUlHeight" :personnelAlarm="item.personnelAlarm"></assemblyCanvas>
                </li>
            </ul>
        </div>
        <!--按钮 暂时不要 后期商榷-->
        <div class="fastener" style="display: none">
            <div :key="index" v-for="(item, index) in caption" class="fastener_div" :style="{ background: item.color }" @click="clickPopup">
                {{item.name}}
            </div>
        </div>
        <div class="middlePopup" v-if="middlePopupBoer">
            <middlePopup @closeDown="closeDownFun" :personnel="personnel" :middleTime="middleTime"></middlePopup>
        </div>
    </div>
</template>

<script>
import assemblyCanvas from './assemblyCanvas/assemblyCanvas'
import middlePopup from '../middlePopup/middlePopup'
export default {
  name: 'middleCanvas',
  props: ['waitingRoomPersonnels', 'middleTime'],
  components: {
    assemblyCanvas,
    middlePopup
  },
  data () {
    return {
      caption: [],
      captionColor: [
        'rgba(113, 216, 154, .6)',
        'rgba(113, 216, 206, .6)',
        'rgba(113, 174, 216, .6)',
        'rgba(113, 122, 216, .6)',
        'rgba(156, 113, 216, .6)',
        'rgba(207, 113, 216, .6)',
        'rgba(216, 113, 176, .6)',
        'rgba(228, 100, 132, .6)',
        'rgba(242, 153, 132, .6)',
        'rgba(243, 191, 101, .6)',
        'rgba(229, 215, 75, .6)',
        'rgba(173, 239, 82, .6)',
        'rgba(87, 226, 192, .6)',
        'rba(107, 230, 235, .6)',
        'rgba(97, 197, 255, .6)',
        'rgba(72, 141, 255, .6)'
      ],
      arr: [],
      middlePopupBoer: false,
      diagramUlHeight: 0,
      personnel: []
    }
  },
  mounted () {

  },
  methods: {
    ergodicArr () {
      for (let i = 0; i < 49; i++) {
        let obj = {
          id: `myCanvas${i}`,
          sum: Math.ceil(Math.random() * 100000)
        }
        this.arr.push(obj)
      }
    },
    //  弹窗
    clickPopup (data) {
      this.personnel = data
      this.middlePopupBoer = true
    },
    closeDownFun () {
      this.middlePopupBoer = false
    },
    setHeight () {
      //  首先获取ul的高度 除以
      let heightCss = 296
      this.diagramUlHeight = heightCss / this.caption.length - 2
    }
  },
  created () {
    this.caption = this.waitingRoomPersonnels
    this.caption.forEach((val, index) => {
      val.color = this.captionColor[index]
    })
    this.ergodicArr()
    //  传一个值到子组件 来设置 每一个li 的高度
    //  目前没有接口, 然后 随机十三个
    //  this.diagramUlHeight
    //  总体高度 280 可以再商榷
    this.setHeight()
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .middleCanvas
        width 100%
        position relative
        overflow hidden
        .diagram
            overflow hidden
            position relative
            display flex
            margin 0 20px 0 6px
           .diagramUl
               overflow hidden
               flex-wrap wrap
               position relative
               height 296px
               width 100%
               .diagramLi
                   cursor pointer
                   margin-bottom 2px
                   width 100%
        .fastener
            margin-top 10px
            overflow hidden
            position relative
            width 100%
            .fastener_div
                cursor pointer
                float left
                margin-left 10px
                line-height 22px
                border-radius 5px
                height 20px
                width 46px
        .middlePopup
            position absolute
            top 0
            left 6px
            bottom 0
            right 6px
            background rgba(20, 40, 86,.94)
            overflow hidden
</style>
