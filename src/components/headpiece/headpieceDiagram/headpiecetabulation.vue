<template>
    <div class="tabulation" ref="companyStyle">
        <ul ref="companyColor" :key="index" class="tabulationUl" v-for="(item, index) in quantum">
            <li :key="$index" v-for="(data, $index) in item" class="tabulationLi" :style="{ width: NewWidth }">
              {{data}}
            </li>
        </ul>
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
      let heightCss = this.$refs.companyStyle.clientWidth
      this.NewWidth = (((heightCss - 72 - 10) / (this.quantum[0].length - 1)) - 2) + 'px'
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
   margin-left 10px
   position relative
   .tabulationUl
     overflow hidden
     position relative
     width 100%
    .tabulationLi
        overflow hidden
        position relative
        text-align center
        height 24px
        margin 1px
        line-height 24px
        float left
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
/*.tabulationLi:first-child:before*/
  /*content: '●'*/
</style>
