<template>
  <div id="app">
    <hompage></hompage>
  </div>
</template>

<script>
import hompage from './components/homepage/homepage'
export default {
  name: 'app',
  components: {
    hompage
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/variable"
html, body
  width $width-total
  height $height-total
  overflow hidden
  position relative
  background url("../src/assets/bottom_background.png") no-repeat
#app
  width $width-total
  height 100%
  /*height 100%*/
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #fff

</style>
