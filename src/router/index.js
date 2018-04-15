import Vue from 'vue';
import Router from 'vue-router';
import goods from '@/components/goods/goods.vue';
import ratings from '@/components/ratings/ratings.vue';
import sellers from '@/components/sellers/sellers.vue';
import goodsdetail from '@/components/goods/goods-detail.vue';
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods,
      children:[
        {
          path:'/',
          name:'goodsdetail',
          component: goodsdetail,
        }
      ],
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/sellers',
      name: 'sellers',
      component: sellers
    },
  ]
});
