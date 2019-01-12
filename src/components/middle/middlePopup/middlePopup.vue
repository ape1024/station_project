<template>
    <div class="middlePopup">
        <img class="closeDown" src="../../../assets/closeDown.png" alt="" @click="closeDownClick">
        <div id="mychart" :style="{ width: '1300px', height: '450px' }"></div>
    </div>
</template>

<script>
export default {
  name: 'middlePopup',
  props: ['personnel', 'middleTime'],
  data () {
    return {
      arrTime: [],
      dataBrokenNumber: []
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('mychart'))
      myChart.setOption({
        title: {
          text: `${this.personnel.name}`,
          y: '10',
          x: 'center',
          textStyle: {
            // color: `${this.personnel.color}`,
            color: `#fff`,
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
          bottom: '10',
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
        series: [
          {
            name: '人数',
            type: 'line',
            smooth: true,
            symbol: 'none',
            color: this.personnel.color,
            label: {
              normal: {
                show: false,
                position: 'top'
              }
            },
            areaStyle: {normal: {}},
            data: this.personnel.personnel,
            markLine: {
              data: [
                [
                  { name: '预警人数起点', xAxis: 0, yAxis: this.personnel.personnelAlarm, symbol: 'circle' }, { name: '预警人数终点', xAxis: this.middleTime.length - 1, yAxis: this.personnel.personnelAlarm, symbol: 'arrow' }
                ]
              ],
              label: {
                normal: {
                  show: true,
                  position: 'middle',
                  formatter: '预警线'
                }
              },
              lineStyle: {
                normal: {
                  type: 'solid',
                  color: '#cc0001'
                }
              }
            }
          }
        ]
      })
    },
    closeDownClick () {
      this.$emit('closeDown')
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
    dataBroken () {
      for (let i = 0; i <= 48; i++) {
        let num = Math.floor(Math.random() * 500) + 200
        this.dataBrokenNumber.push(num)
      }
    }
  },
  created () {
    //  时间 5分钟一次
    // this.dataSource()
    // this.dataBroken()
  }

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .middlePopup
        overflow hidden
        position relative
        height 100%
        width 100%
    .closeDown
        position absolute
        top 10px
        z-index 1111111
        cursor pointer
        right 10px
</style>
