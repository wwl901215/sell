<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="goods-content">
    <div class="goods-left">
      <ul class="ul">
        <li v-bind:key="item" v-for="item in goods" class="menu-item">
          <span class="text">
             <span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
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
        goods: []
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
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .goods-content {
    display: flex;
    position: absolute;
    top: 174px;
    width: 100%;
    bottom: 46px;
    overflow: hidden;
  }

  .goods-left {
    flex: 0 0 80px;
    width: 80px;
    background-color: #f3f5f7;
  }

  .goods-right {
    flex: 1;
  }
  .ul {
    list-style-type: none;
    background-color: red;
    /*margin-left: -30px;*/
  }
  .menu-item {
    /*display: table;*/
    height: 54px;
    width: 56px;
    line-height: 14px;
    margin-left: 0px;  }
  .decrease {
  bg-image('decrease_1');
  }

  .discount {
  bg-image('discount_1');
  }

  .guarantee {
  bg-image('guarantee_1');
  }

  .invoice {
  bg-image('invoice_1');
  }

  .special {
  bg-image('special_1')
  }
  .icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
  }
  /*.text {*/
    /*display: table-cell;*/
    /*width: 56px;*/
  /*}*/

</style>
