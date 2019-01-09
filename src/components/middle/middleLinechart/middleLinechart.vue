<template>
    <div class="middleLinechart">
        <div id="Distribution" :style="{ width: '950px', height: '220px' }"></div>
    </div>
</template>

<script>
export default {
  name: 'middleLinechart',
  props: ['middleTime', 'waitingRoom'],
  data () {
    return {
      arrTime: [],
      dataBrokenNumber: []
    }
  },
  mounted () {
    this.assignment()
  },
  methods: {
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
              interval: 0,
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
      for (let i = 0; i <= 48; i++) {
        let string = ''
        let division = i * 30 / 60
        let number = Math.round(division) === division ? 1 : 0
        if (number === 0) {
          let Newnumber = ''
          let Minute = (i * 30) % 60
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
    assignment () {
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
