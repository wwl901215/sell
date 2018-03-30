<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="goods-content">
    <div v-for="(item) in goods" class="goods-left">
      <div>{{item.name}}</div>
    </div>
    <div class="goods-right">
      ejwoej
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      goods: {
        type: Array
      }
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
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../stylus/mixin.styl";

  .goods-content {
    display: flex;
    direction: inherit;
    width: 100%;
    height: 100%;
    background-color: red;
    flex: 1;
  }

  .goods-left {
    display: table-cell;
    width: 160px;
    height: 100%;
    background-color: #f3f5f7;
  }

  .goods-right {
    flex: 1;
    background-color: #fffff9;
  }
</style>
