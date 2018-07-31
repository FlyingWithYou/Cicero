import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import recommend from '@/components/recommend'
import postArticle from '@/components/postArticle'
import explore from '@/components/explore'
import mine from '@/components/mine'

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
    }
  ]
})
