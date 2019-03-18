<template>
    <div class="middleCanvas">
        <div class="diagram">
            <ul class="diagramUl" ref="monthPie">
                <li :key="index" class="diagramLi" v-for="(item, index) in caption" @click="clickPopup(item)">
                    <assemblyCanvas :array="item.personnel" :textData="item" :arrarIndex="index" :diagramHeight="diagramUlHeight" :personnelAlarm="item.personnelAlarm"></assemblyCanvas>
                </li>
            </ul>
          <div :style="{ left: markerLineLeft, width: markerLineWdith }" class="markerLine">
            <div class="markerLineLeftDiv" :style="{ left: markerLineLeftDivLeft }">
            </div>
            <ul class="markerLineUl" :style="{ left: markerLineUlLeft }">
              <li  :key="index" v-for="(data, index) in markerLineLeftData" class="markerLineLi">
                {{data}}
              </li>
            </ul>
          </div>
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
        'rgba(107, 230, 235, .6)',
        'rgba(97, 197, 255, .6)',
        'rgba(72, 141, 255, .6)'
      ],
      arr: [],
      middlePopupBoer: false,
      diagramUlHeight: 0,
      personnel: [],
      markerLineLeft: '',
      markerLineLeftData: [],
      markerLineLeftDivLeft: '0px',
      markerLineUlLeft: '11px',
      markerLineWdith: '30px'
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
      let heightCss = 456
      this.diagramUlHeight = heightCss / this.caption.length - 2
    },
    update () {
      //  获取当前时间 , 拿到当前时间的的index 然后通过,index 找到当前的位置
      let myDate = new Date()
      let hours = myDate.getHours()
      let minutes = myDate.getMinutes()

      if (hours < 10) {
        hours = `0${hours}`
      }
      if (minutes > 30 || minutes === 30) {
        minutes = 30
      } else if (minutes < 30) {
        minutes = '00'
      }
      let currentdate = `${hours}:${minutes}`
      // let currentdate = `22:00`
      let indexdate = ''
      this.middleTime.forEach((val, index) => {
        if (val === currentdate) {
          indexdate = index
        }
      })
      // let middleTime = this.middleTime.length--
      this.$nextTick(function () {
        this.markerLineLeft = (this.$refs.monthPie.clientWidth - 50) / (this.middleTime.length - 1) * indexdate + 50 + 'px'
        //  判断当先红线数字 是左还是在右
        let markerLineLeftDataTwo = [...this.markerLineLeftData]
        let max = markerLineLeftDataTwo.sort((a, b) => {
          return b - a
        })[0]
        max = `${max}`
        //  单个数字像素为9.5
        //  线条本身1px 距离数字 10px 固加 11
        let txtwidth = max.length * 9.5 + 11
        this.markerLineWdith = txtwidth + 'px'
        let markerLineLeft = (this.$refs.monthPie.clientWidth - 50) / (this.middleTime.length - 1) * indexdate + 50
        //  预留右侧 20px
        if ((markerLineLeft + txtwidth + 20) > this.$refs.monthPie.clientWidth) {
          this.markerLineUlLeft = 0
          this.markerLineLeftDivLeft = txtwidth - 1 + 'px'
          this.markerLineLeft = markerLineLeft - txtwidth + 'px'
        }
      })
      let markerLineLeftDataArr = []
      this.caption.forEach((val) => {
        val.personnel.forEach((data, index) => {
          if (index === indexdate) {
            markerLineLeftDataArr.push(data)
          }
        })
      })
      this.markerLineLeftData = markerLineLeftDataArr
    }
  },
  watch: {
    waitingRoomPersonnels: {
      handler: function (data) {
        this.caption = data
        this.caption.forEach((val, index) => {
          val.color = this.captionColor[index]
        })
        this.setHeight()
        this.update()
      },
      immediate: true
    }
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
            margin 4px 0 0 4px
           .diagramUl
             display flex
             flex-direction column
             align-content flex-start
             box-sizing border-box
             overflow hidden
             position relative
             height 386px
             width 100%
             .diagramLi
               cursor pointer
               position relative
               overflow hidden
               box-sizing border-box
               margin-bottom 2px
               height 100%
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
            left 2px
            bottom 0
            right 0
            background rgba(20, 40, 86,.94)
            overflow hidden
  .markerLine
    position absolute
    top 0
    height  calc(100% - 2px)
    overflow hidden
  .markerLineLeftDiv
    position absolute
    top 0
    width 1px
    height 100%
    background #ff504b
  .markerLineUl
    position absolute
    top 0
    height calc(100% + 3px)
    display flex
    flex-direction column
    align-content flex-start
    box-sizing border-box
    overflow hidden
  .markerLineLi
      position relative
      overflow hidden
      display flex
      justify-content center
      align-items Center
      box-sizing border-box
      margin-bottom 2px
      height 100%
      width 100%
</style>
