import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('@/views/Layout'),
    redirect: '/index',
    children: [{
        path: '/index',
        name: 'index',
        component: () => import('../views/index/Index.vue')
      },
      {
        path: '/account/all',
        name: 'all',
        meta: {
          bread: ['账户管理', '所有人员']
        },
        component: () => import('../views/account/All.vue')
      },
      {
        path: '/account/business',
        name: 'Business',
        meta: {
          bread: ['账户管理', '业务人员']
        },
        component: () => import('../views/account/Business.vue')
      },
      {
        path: '/account/audit',
        name: 'audit',
        meta: {
          bread: ['账户管理', '审核人员']
        },
        component: () => import('../views/account/Audit.vue')
      },
      {
        path: '/product/all',
        name: 'alle',
        meta: {
          bread: ['产品管理', '全部产品']
        },
        component: () => import('../views/product/all.vue')
      },
      {
        path: '/product/detail',
        name: 'detail',
        meta: {
          keepAlive: true,
          bread: ['产品管理', '全部产品','产品详情']
        },
        component: () => import('../views/product/detail.vue')
      },
      {
        path: '/orders/all',
        name: 'ord',
        meta: {
          bread: ['订单管理','所有订单']
        },
        component: () => import('../views/orders/all.vue')
      },
      {
        path: '/my',
        name: 'my',
        meta: {
          bread: ['个人中心']
        },
        component: () => import('@/my.vue')
      },
      {
        path: '/todo',
        name: 'todo',
        meta: {
          bread: ['待办事项']
        },
        component: () => import('@/todo.vue')
      },
      {
        path: '/customer/info',
        name: 'customer',
        meta: {
          bread: ['客户管理','基本信息']
        },
        component: () => import('@/views/customer/info.vue')
      },
    ]

  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login')
  }, 
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404')
  }
]

const router = new VueRouter({
  routes
})

export default router