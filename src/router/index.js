import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('@/components/page/home')
const recommend = () => import('@/components/page/recommend')
const postArticle = () => import('@/components/page/postArticle')
const explore = () => import('@/components/page/explore')
const mine = () => import('@/components/page/mine')
const articleDetail = () => import('@/components/page/articleDetail')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/postArticle',
      name: 'postArticle',
      component: postArticle
    },
    {
      path: '/explore',
      name: 'explore',
      component: explore
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/articleDetail',
      name: 'articleDetail',
      component: articleDetail
    }
  ]
})
