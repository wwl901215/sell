<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar"/>
      </div>

      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>

      <div v-if="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}</span>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../stylus/mixin.styl";

  .header {
    color: #fff;
    background-color: #000;
    background-image: url("https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1521796276&di=4d987011efe896a16b6a0a27fa5f0684&src=http://img1.3lian.com/2015/a1/95/d/105.jpg");
  }

  .content-wrapper {
    padding: 24px 12px 18px 24px;
    font-size: 0;
    position: relative;
  }

  .avatar {
    display: inline-block;
    vertical-align: top;
  }

  img {
    border-radius: 2px;
  }

  .content {
    display: inline-block;
    font-size: 14px;
    margin-left: 16px;
  }

  .title {
    margin: 2px 0 8px 0;
  }

  .brand {
    display: inline-block;
    width: 30px;
    height: 18px;
  bg-image('brand');
    background-size: 30px 18px;
    background-repeat: no-repeat;
    vertical-align: top;
  }

  .name {
    font-size: 16px;
    margin-left: 6px;
    line-height: 18px;
    font-weight: bold;
  }

  .description {
    margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
  }

  .support .icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
  }

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

  .support .text {
    vertical-align: top;
    line-height: 12px;
    font-size: 12px;
  }

  .support-count {
    display: flex;
    position: absolute;
    bottom: 20px;
    right: 12px;
    background-color: red;
    height: 24px;
    padding:7px;
    border-radius: 7px;
    font-size: 15px;
  }
  .count {
    text-align: center;
  }
  .bulletin-wrapper {
    height: 28px;
    line-height: 28px;
    padding:0 22px 0 12px;
    white-space:normal;
  }

</style>
