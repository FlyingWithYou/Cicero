<template>
  <div id="app">
    <drawer>
      <view-box>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </view-box>
    </drawer>
    <tabbar>
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
        <span slot="icon" class="iconfont icon-discover"></span>
        <span slot="icon-active" class="iconfont icon-discover active"></span>
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
export default {
  name: 'app',
  components: {
    Tabbar,
    TabbarItem,
    Drawer,
    ViewBox
  },
  methods: {
    tabBarChange (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
#app {
  width: 100%;
  height: 100%;
}

@tabbar-text-active-color: '#559CF9';
body {
  background-color: #fff;
}
.weui-tabbar {
  position:fixed;
  background:rgb(249, 249, 249);
}
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
</style>
