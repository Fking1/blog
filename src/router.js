import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      component: function() {
        return import('@/views/test.vue')
      }
    },
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: function () {
            return import('@/views/Home.vue')
          }
        },
        {
          path: 'book',
          name: 'book',
          component: function () {
            return import('./views/Book.vue')
          }
        },
        {
          path: 'doc',
          name: 'doc',
          component: function () {
            return import('./views/Doc.vue')
          }
        },
        {
          path: 'recommendation',
          name: 'recommendation',
          component: function () {
            return import('./views/Recommendation.vue')
          }
        },
        {
          path: '/learning',
          name: 'learning',
          component: function () {
            return import('./views/Learning.vue')
          }
        }
      ]
    }
  ]
})
