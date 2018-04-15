<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="goods-content">
    <div class="goods-left">
      <ul class="ul" v-for="(item,index) in goods">
        <li v-bind:key="index" v-on:click="changeLeftTab(index)" :class="['menu-item',index === leftSelect && 'active']">{{item.name}}</li>
      </ul>
    </div>
    <div class="goods-right" :style="{width:!!this.clientWidth ? this.clientWidth : '100%'}">
      <ul style="padding:0;margin:0;background-color:blue;">
          <div v-on:click="goodsClick(item)" class="liright" v-for="(item,index) in goods[leftSelect].foods">
            <img style="width:64px;height:64px;" :src="item.icon"/>
              <div class="item-left">
              {{item.name}}
              <span class="item-text">{{item.description}}</span>
              <span class="item-text2">月售{{item.sellCount}} <span v-if="item.rating > 0">好评率{{item.rating}}%</span></span>
              </div>
          </div>
      </ul>
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
        clientWidth:"80%",
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
    },
    goodsClick: function(item) {
      console.log(item);
    },
    },
    mounted() {
        // 动态设置背景图的高度为浏览器可视区域高度

        // 首先在Virtual DOM渲染数据时，设置下背景图的高度．
        this.clientWidth.height = `${document.documentElement.clientWidth}px`;
        // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
        const that = this;
        window.onresize = function temp() {
            that.clientWidth = `${document.documentElement.clientWidth}px`;
        };
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
    //width:100%;
    height: 100%;
    background-color:yellow;
  }
  .ul {
    list-style-type: none;
    padding:0;
    margin:0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .liright {
  list-style-type: none;
  background-color: #fffff9;
  padding:18px;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: row;
  }
  .item-text {
    display: block;
    margin: 10px 0;
    font-size: 10px;
    color: rgb(147,153,159);
       text-overflow:ellipsis;
        white-space:nowrap;
        overflow: hidden;
  }
    .item-text2 {
      display: block;
      font-size: 10px;
      color: rgb(147,153,159);
       text-overflow:ellipsis;
              white-space:nowrap;
              overflow: hidden;
    }
  .item-left {
    display: inline-block;
    vertical-align: top;
    margin-left: 10px;
    font-size:14px;
    color: rgb(7,17,27);
    line-height: 14px;
         text-overflow:ellipsis;
                  white-space:nowrap;
                  overflow: hidden;
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
