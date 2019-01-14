<template>
    <div class="headpiece">
        <!--头部折线图-->
        <div class="headpieceTop">
            <headpieceDiagram v-if="this.headpieceSeries.length" :headpieceText="headpieceText" :headpieceindex="headpieceindex" :headpieceSeries="headpieceSeries" :headpieceXaxisData="headpieceXaxisData"></headpieceDiagram>
        </div>
        <div class="headpieceBottom">
            <headpiecetabulation v-if="headpieceList.length" :quantum="headpieceList"></headpiecetabulation>
        </div>
    </div>
</template>
<script>
import headpieceDiagram from './headpieceDiagram/headpieceDiagram'
import headpiecetabulation from './headpieceDiagram/headpiecetabulation'
import { findDataComparison } from '../../common/api/Interface'
export default {
  name: 'headpiece',
  data () {
    return {
      quantumNumber: 11,
      headpieceText: '',
      headpieceindex: 0,
      headpieceList: [],
      headpieceSeries: [],
      headpieceXaxisData: []
    }
  },
  components: {
    headpieceDiagram,
    headpiecetabulation
  },
  created () {

  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.axios.post(findDataComparison()).then((response) => {
        if (response.data.data) {
          let data = JSON.parse(response.data.data)
          //  头部信息
          this.headpieceText = data.title
          //  显示当前第几个
          this.headpieceindex = data.index - 1
          //  折线图信息
          this.headpieceSeries = data.graph.series
          let itemstyle = {
            normal: {
              lineStyle: {
                width: 4
              }
            }
          }
          this.headpieceSeries.forEach((val) => {
            val.itemStyle = itemstyle
          })
          //  折线图 x轴信息
          this.headpieceXaxisData = data.graph.xAxisData
          //  列表信息tableList
          this.headpieceList = data.tableList
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.headpiece
  width 100%
  height 348px
  background url("../../assets/headpiece.png") no-repeat
  background-size cover cover
  position relative
  overflow hidden
  .headpieceTop
    width 100%
    height 207px
    overflow hidden
    position relative
  .headpieceBottom
    width 100%
    overflow hidden
    position relative

</style>
