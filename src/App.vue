<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods" replace tag="div" active-class="top-tab-active-link">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings" replace tag="div" active-class="top-tab-active-link">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sellers" replace tag="div" active-class="top-tab-active-link">商店</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue'
export default {
  data () {
    return {
      seller: {}
    }
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "stylus/mixin.styl";
  @import "css/app.css";
  #app .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    /*border-bottom: 1px solid rgba(7, 17, 27, 0.1);*/
  border-1px(rgba(7, 17, 27, 0.1))
  }
</style>
