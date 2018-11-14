import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    // 主页
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld.vue')
    },
    // 产品列表
    {
      path: '/product',
      name: 'Product',
      component: () => import('@/components/Product.vue')
    }
  ]
})
