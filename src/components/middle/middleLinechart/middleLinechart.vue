<template>
    <div class="middleLinechart">
        <div id="Distribution" :style="{ width: '1300px', height: '450px' }"></div>
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
      middleTimeArr: [],
      //  总和
      summation: []
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
      let arrLength = this.middleTime.length
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
            fontSize: '16'
          }
        },
        grid: {
          left: '8',
          right: '5',
          bottom: '0',
          top: '50',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          show: false
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
            },
            splitLine: {
              show: true
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
      //  获取当前最大值
      // let arr = [100, 2, 3, 4, 200, 400, 500, 6000, 700]
      // let max = this.summation.sort((a, b) => {
      //   return b - a
      // })[0]
      let obj = {
        name: `客流量人数总和`,
        smooth: true,
        type: 'line',
        symbol: 'circle',
        symbolSize: 10,
        color: '#fff',
        itemStyle: {
          normal: {
            lineStyle: {
              width: 6,
              color: '#29aef1'
            }
          }
        },
        data: this.summation,
        // data: arr,
        label: {
          normal: {
            show: false,
            position: 'top'
          }
        }
      }
      let objTwo = {
        type: 'line',
        color: '#ff504b',
        smooth: false,
        markLine: {
          itemStyle: {
            normal: {
              lineStyle: {
                width: 1,
                type: 'solid'
              }
            }
          },
          symbol: 'none',
          data: [{
            xAxis: currentdate
          }]
        }
      }
      this.dataBrokenNumber = []
      this.dataBrokenNumber.push(obj)
      this.dataBrokenNumber.push(objTwo)
      this.Initialization()
    },
    //  计算总数
    calculations () {
      const arr = this.waitingRoom.map(t => {
        return t.personnel
      })
      const currentArr = []
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          currentArr[j] = currentArr[j] === undefined ? (0 + arr[i][j]) : (currentArr[j] + arr[i][j])
        }
      }
      this.summation = currentArr
    }
  },
  created () {
    //  数据叠加 计算出总和
    this.calculations()
  },
  watch: {
    waitingRoom () {
      this.calculations()
      this.assignment()
      this.calculations()
    }
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
