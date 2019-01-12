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
html, body
  width 1920px
  height 852px
  overflow hidden
  position relative
  background #071321
#app
  width 1900px
  margin 10px
  /*height 100%*/
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #fff

</style>
