<template>
  <div class="recommend">
    <header class="tabHeader">
      <span @click="changeTab(index)" class="tab" :class="[{active: item.active}]" v-for="(item, index) in tabList" :key="index">{{item.name}}</span>
    </header>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <div class="article" v-for="(item, index) in articleList" :key="index">
        <div class="writing">
          <div>
            <header class="title">{{item.title}}</header>
            <article class="content">{{item.content}}</article>
          </div>
          <img class="article_img" :src="item.img_url" alt="" v-if="index % 2 === 0">
        </div>
        <footer>
          <span class="author">{{item.author}}</span>
          <div class="total_tag">
            <span><i class="iconfont icon-like1"></i>{{item.like_total}}</span>
            <span><i class="iconfont icon-eye"></i>{{item.uv}}</span>
            <span><i class="iconfont icon-share"></i>{{item.share_total}}</span>
          </div>
        </footer>
      </div>
    </div>
    <load-more tip="正在加载"></load-more>
  </div>
</template>
<script>
import {LoadMore} from 'vux'
export default {
  name: 'recommend',
  components: {
    LoadMore
  },
  data () {
    return {
      tabList: [{name: '推荐', active: true}, {name: '专题', active: false}],
      count: 0,
      writings: {
        title: '我的生命从此多了一个你',
        content: '如果你无法简洁表达你的想法，那说明你还不够了解它',
        author: '阿妮',
        like_total: 90,
        img_url: 'http://image.wufazhuce.com/FjcHfsbi7xfkurxmZMNqgQzyEgm6',
        uv: 100,
        share_total: 100
      },
      articleList: []
    }
  },
  methods: {
    changeTab (index) {
      this.tabList = this.tabList.map(item => {
        item.active = false
        return item
      })
      this.tabList[index].active = true
    },
    loadMore () {
      // this.$vux.loading.show({
      //   text: 'Loading'
      // })
      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.articleList.push(this.writings)
        }
        // this.$vux.loading.hide()
      }, 500)
    }
  }
}
</script>
<style lang="less">
.tabHeader {
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  .tab {
    width: 74px;
    font-size: 16px;
    color: #101010;
    padding-bottom: 3px;
    text-align: center;
    &.active {
      color: #DF3030;
      padding-bottom: 2px;
      border-bottom: 1px solid #DF3030;
    }
  }
}
.article {
  width: 90%;
  margin: 0 auto 14px;
  border: 1px solid #F7F3F3;
  box-sizing: border-box;
  padding: 14px 5px 2px 13px;
  color: #7B7878;
  font-size: 14px;
  .writing {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .title {
      font-size: 18px;
      color: #101010;
    }
    .article_img {
      width: 124px;
      height: 100px;
      background: #f6f6f6;
      display: block;
    }
  }
  footer {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #7B7878;
    .author {
      margin-right: 30px;
    }
    .total_tag span {
      margin-right: 10px;
      .iconfont {
        font-size: 14px;
        margin-right: 5px;
      }
    }
  }

}
</style>
