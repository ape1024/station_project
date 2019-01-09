<template>
    <div class="middleCanvas">
        <div class="diagram">
            <ul class="diagramUl" ref="elememt">
                <li :key="index" class="diagramLi" v-for="(item, index) in caption" @click="clickPopup">
                    <assemblyCanvas :array="arr" :textData="item" :arrarIndex="index" :diagramHeight="diagramUlHeight"></assemblyCanvas>
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
            <middlePopup @closeDown="closeDownFun"></middlePopup>
        </div>
    </div>
</template>

<script>
import assemblyCanvas from './assemblyCanvas/assemblyCanvas'
import middlePopup from '../middlePopup/middlePopup'
export default {
  name: 'middleCanvas',
  components: {
    assemblyCanvas,
    middlePopup
  },
  data () {
    return {
      caption: [
        {
          id: 1,
          name: '01室'
        },
        {
          id: 2,
          name: '02室'
        },
        {
          id: 3,
          name: '03室'
        },
        {
          id: 4,
          name: '04室'
        },
        {
          id: 5,
          name: '05室'
        },
        {
          id: 6,
          name: '06室'
        },
        {
          id: 7,
          name: '07室'
        },
        {
          id: 8,
          name: '08室'
        },
        {
          id: 9,
          name: '09室'
        },
        {
          id: 10,
          name: '10室'
        },
        {
          id: 11,
          name: '11室'
        },
        {
          id: 12,
          name: '12室'
        },
        {
          id: 13,
          name: '13室'
        }
      ],
      captionColor: [
        '#71D89A',
        '#D87179',
        '#71D8CE',
        '#D89C71',
        '#71AED8',
        '#D8CF71',
        '#717AD8',
        '#ADD871',
        '#9C71D8',
        '#79D871',
        '#CF71D8',
        '#85B681',
        '#D871AD'
      ],
      arr: [],
      middlePopupBoer: false,
      diagramUlHeight: 0
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
    clickPopup () {
      this.middlePopupBoer = true
    },
    closeDownFun () {
      this.middlePopupBoer = false
    },
    setHeight () {
      //  首先获取ul的高度 除以 13
      let heightCss = 280
      this.diagramUlHeight = heightCss / 13 - 2
    }
  },
  created () {
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
               height 280px
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
