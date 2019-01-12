<template>
    <div class="middleLinechart">
        <div id="Distribution" :style="{ width: '1330px', height: '340px' }"></div>
    </div>
</template>

<script>
const INTERVAL = 60
export default {
  name: 'middleLinechart',
  props: ['middleTime', 'waitingRoom'],
  data () {
    return {
      arrTime: [],
      arrdata: [],
      interval: 0,
      dataBrokenNumber: [],
      middleTimeArr: []
    }
  },
  mounted () {
    // this.dataSource()
    // this.Arrdata()
    this.judgement()
  },
  methods: {
    judgement () {
      // for (let i = 0; i < 5; i++) {
      //   this.middleTime.forEach((val) => {
      //     this.middleTimeArr.push(val)
      //   })
      // }
      // console.log('/')
      // console.log(this.middleTimeArr.length)
      let arrLength = this.middleTime.length
      console.log(arrLength)
      if (arrLength > INTERVAL) {
        this.interval = Math.round(arrLength / INTERVAL)
      } else {
        this.interval = 0
      }
      this.assignment()
    },
    Initialization () {
      let myChart = this.$echarts.init(document.getElementById('Distribution'))
      myChart.setOption({
        title: {
          text: '北京西站站内人数分布图',
          x: 'center',
          textStyle: {
            color: '#fff',
            fontWeight: 'lighter',
            fontSize: '21'
          }
        },
        tooltip: {
          trigger: 'axis',
          show: false
        },
        legend: {
          show: false
        },
        grid: {
          left: '37',
          right: '20',
          bottom: '0',
          top: '38',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              color: '#fff',
              interval: this.interval,
              rotate: 50
            },
            data: this.middleTime
          }
        ],
        yAxis: [
          {
            type: 'value',
            show: true,
            boundaryGap: true,
            axisLabel: {
              color: '#fff'
            }
          }
        ],
        series: this.dataBrokenNumber
      })
    },
    dataSource () {
      //  288
      for (let i = 0; i <= 1440; i++) {
        let string = ''
        let division = i * 1 / 60
        let number = Math.round(division) === division ? 1 : 0
        if (number === 0) {
          let Newnumber = ''
          let Minute = (i * 1) % 60
          let compare = Math.floor(division)
          Newnumber = compare >= 10 ? compare : `0${compare}`
          Minute = Minute >= 10 ? Minute : `0${Minute}`
          string = `${Newnumber}:${Minute}`
        } else {
          // Math.floor
          division = division >= 10 ? `${division}` : `0${division}`
          string = `${division}:00`
        }
        this.arrTime.push(string)
      }
    },
    Arrdata () {
      let arr = []
      for (let i = 0; i <= 1; i++) {
        arr.push(Math.random() * 1000 + 500)
      }
      this.arrdata = arr
      // this.interval = 846 / 70
      this.Initialization()
    },
    assignment () {
      //  this.waitingRoom.forEach((val, index) => {
      this.waitingRoom.forEach((val, index) => {
        let obj = {
          name: `${val.name}`,
          symbol: 'none',
          smooth: true,
          type: 'line',
          stack: '总量',
          color: val.color,
          data: val.personnel,
          areaStyle: {normal: {}},
          label: {
            normal: {
              show: false,
              position: 'top'
            }
          }
        }
        this.dataBrokenNumber.push(obj)
      })
      this.Initialization()
    }
  },
  created () {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .middleLinechart
        width 100%
        position relative
        overflow hidden
        .middleLinechartTitle
            width 260px
            height 14px
            line-height 14px
            color #fff
            margin  10px auto 0
            background #302f35
            text-align center
        .middleLinechartP
            color #999
            font-size 12px
            text-align center
</style>
