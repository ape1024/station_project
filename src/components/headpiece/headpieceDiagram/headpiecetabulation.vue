<template>
    <div class="tabulation" ref="companyStyle">
        <ul class="tabulationUl">
            <li :key="index" v-for="(item, index) in quantum" class="tabulationLi" :style="{ width: NewWidth }">
                120W
            </li>
        </ul>
        <ul class="tabulationUl">
          <!-- <span class="tabulationLiHeaderSpan_one">• 2019</span>-->
            <li :key="index" v-for="(item, index) in quantum" class="tabulationLi" :style="{ width: NewWidth }">
                120W
            </li>
        </ul>
        <ul class="tabulationUl">
          <!-- <span class="tabulationLiHeaderSpan_two">• 2018</span>-->
            <li :key="index" v-for="(item, index) in quantum" class="tabulationLi" :style="{ width: NewWidth }">
                120W
            </li>
        </ul>
        <ul class="tabulationUl">
          <!--<span class="tabulationLiHeaderSpan_three">• 2017</span>-->
            <!--<li class="tabulationLiHeader tabulationLi">-->
                <!--<span class="tabulationLiHeaderSpan_three">• 2017</span>-->
            <!--</li>-->
            <li :key="index" v-for="(item, index) in quantum" class="tabulationLi" :style="{ width: NewWidth }">
                120W
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
      ]
    }
  },
  mounted () {
    this.customWidth()
  },
  methods: {
    //  设置每个li的宽度
    customWidth () {
      let heightCss = this.$refs.companyStyle.clientWidth
      this.NewWidth = (((heightCss - 72 - 10) / (this.quantum - 1)) - 2) + 'px'
      // this.$refs.companyStyle.children.forEach((val) => {
      //   console.log(val)
      // })
      // let tabulation = w
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
        color #fff
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
  color #cc0001
</style>
