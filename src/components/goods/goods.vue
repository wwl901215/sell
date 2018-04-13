<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="goods-content">
    <div class="goods-left">
      <ul class="ul" v-for="(item,index) in goods">
        <div v-bind:key="index" v-on:click="changeLeftTab(index)" :class="['menu-item',index === leftSelect && 'active']">{{item.name}}</div>
      </ul>
    </div>
    <div class="goods-right">
      ejwoej
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
//      goods: {
//        type: Array
//      },
      seller: {
        type: Object
      }
    },
    data () {
      return {
        goods: [],
        leftSelect:0,
      };
    },
    created () {
      this.$http.get('/api/goods').then((response) => {
        let res = response.body;
        if (res.code === 200) {
          console.log(res.data);
          this.goods = res.data;
        }
      }, (err) => {
        console.log(err);
      });
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
    },
    methods:{
    changeLeftTab: function(index) {
      this.leftSelect = index;
    }
    },
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .goods-content {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .goods-left {
    width: 80px;
    height: 100%;
    background-color: #f3f5f7;
  }

  .goods-right {
    width: 100%;
    height: 100%;
    background-color:blue;
  }
  .ul {
    list-style-type: none;
    padding:0;
    margin:0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu-item {
    list-style-type: none;
    height: 54px;
    width: 100%;
    font-size: 5px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-bottom: 4px white solid;
    padding: 0 4px 0 6px;
    }
    & .active {
      border-bottom: 4px red solid;
    }
</style>
