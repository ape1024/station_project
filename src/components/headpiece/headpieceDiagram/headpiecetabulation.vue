<template>
    <div class="tabulation" ref="companyStyle">
        <ul ref="companyColor" :key="index" class="tabulationUl" v-for="(item, index) in quantum">
            <li :key="$index" v-for="(data, $index) in item" class="tabulationLi">
              {{data}}
            </li>
        </ul>
      <!--<div style="position: fixed;left: 0;-->
<!--right: 0;top: 0; bottom: 0;background: #fff; z-index: 1000000;display: none">-->
        <!--<div style="width: 800px;height: 200px; display: flex;flex-direction: column">-->
          <!--<div style="width: 100%;height: 100px;flex-shrink: 0;box-sizing: border-box;border: 1px solid #000"></div>-->
          <!--<div :key="t" v-for="t in 3" style="width: 100%;height: 100%;box-sizing: border-box;border: 1px solid #000"></div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
</template>

<script>
export default {
  name: 'headpiecetabulation',
  props: ['quantum'],
  data () {
    return {
      NewWidth: ',',
      color: [
        '#fff',
        '#EE9D29',
        '#2CEAA0',
        '#61bcff'
      ],
      dataList: []
    }
  },
  mounted () {
    this.customWidth()
  },
  methods: {
    //  设置每个li的宽度
    customWidth () {
      // let heightCss = this.$refs.companyStyle.clientWidth
      // this.NewWidth = (((heightCss - 72 - 10) / (this.quantum[0].length - 1)) - 2) + 'px'
      // this.$refs.companyStyle.children.forEach((val) => {
      // })
      this.dataList = this.quantum
      this.$refs.companyColor.forEach((val, index) => {
        val.style.color = this.color[index]
      })
    },
    resetStyle () {
      return {}
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.tabulation
   overflow hidden
   margin 0 10px
   position relative
   .tabulationUl
     display flex
     overflow hidden
     position relative
     width 100%
    .tabulationLi
        width 100%
        overflow hidden
        position relative
        text-align center
        height 42px
        margin 1px
        font-size 21px
        box-sizing border-box
        line-height 42px
  .tabulationUl li:nth-child(odd)
    background rgba(41,173,241,0.4)
  .tabulationUl li:nth-child(even)
    background rgba(41,173,241,0.2)
  .tabulationLiHeaderSpan_one
    color $color-orange
  .tabulationLiHeaderSpan_two
    color $color-green
  .tabulationLiHeaderSpan_three
    color $color-blue
.tabulationUl .tabulationLi:first-child
  width 70px!important
  flex-shrink 0
/*.tabulationLi:first-child:before*/
  /*content: '●'*/
</style>
