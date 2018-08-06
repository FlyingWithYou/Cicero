import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page/home'
import recommend from '@/components/page/recommend'
import postArticle from '@/components/page/postArticle'
import explore from '@/components/page/explore'
import mine from '@/components/page/mine'
import articleDetail from '@/components/page/articleDetail'

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
