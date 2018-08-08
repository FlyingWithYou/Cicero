<template>
  <div id="app">
    <view-box ref="viewBox">
      <keep-alive :include="['home', 'recommend', 'postArticle', 'explore', 'mine']">
        <router-view></router-view>
      </keep-alive>
    </view-box>
    <tabbar v-if="isTabBar">
      <tabbar-item :selected="$route.path == '/'" link="/">
        <span slot="icon" class="iconfont icon-home"></span>
        <span slot="icon-active" class="iconfont icon-home active"></span>
        <span slot="label">喜欢</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path == '/recommend'" link="/recommend">
        <span slot="icon" class="iconfont icon-planeo"></span>
        <span slot="icon-active" class="iconfont icon-planeo active"></span>
        <span slot="label">推荐</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path == '/postArticle'" link="/postArticle">
        <span slot="icon" class="iconfont icon-27CIRCLE"></span>
        <span slot="icon-active" class="iconfont icon-27CIRCLE active"></span>
      </tabbar-item>
      <tabbar-item :selected="$route.path == '/explore'" link="/explore">
        <span slot="icon" class="iconfont icon-theme"></span>
        <span slot="icon-active" class="iconfont icon-theme active"></span>
        <span slot="label">发现</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path == '/mine'" link="/mine">
        <span slot="icon" class="iconfont icon-wode1"></span>
        <span slot="icon-active" class="iconfont icon-wode1 active"></span>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Drawer, ViewBox } from 'vux'
import {mapActions, mapState} from 'vuex'
export default {
  name: 'app',
  components: {
    Tabbar,
    TabbarItem,
    Drawer,
    ViewBox
  },
  methods: {
    ...mapActions([
      'setPosition'
    ]),
    tabBarChange (e) {
      console.log(e)
    }
  },
  computed: {
    ...mapState({
      scrollTop: state => state.scrTop
    }),
    isTabBar () {
      return this.$route.path === '/' || this.$route.path === '/recommend' || this.$route.path === '/explore' || this.$route.path === '/mine'
    }
  },
  watch: {
    $route (to, from) {
      // let scrBody = this.$refs.viewBox.getScrollBody()
      let scrTop = this.$refs.viewBox.getScrollTop()
      if (to.name === 'articleDetail' && from.name === 'recommend') {
        // console.warn('从列表到具体文章' + scrTop)
        this.setPosition({scrTop})
      }
      if (to.name === 'recommend' && from.name === 'articleDetail') {
        // console.warn('从文章到具体列表' + this.scrollTop)
        setTimeout(() => {
          this.$refs.viewBox.scrollTo(this.scrollTop)
        }, 0)
      }
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
.weui-dialog__btn_primary {
  color: #333;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
}
#app {
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

@tabbar-text-active-color: '#559CF9';
.weui-tabbar {
  position:fixed;
  background:rgb(249, 249, 249);
  .iconfont {
    font-size: 24px;
    line-height: 27px;
    color: #939393;
  }
  .icon-27CIRCLE:before {
    content: "\E648";
    font-size: 30px;
    line-height: 40px;
  }
  .iconfont.active {
    color: #559CF9;
  }
}
</style>
