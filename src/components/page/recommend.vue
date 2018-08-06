<template>
  <section class="recommend">
    <header class="tabs">
      <div class="tabHeader">
        <span @click="changeTab(index)" class="tab" :class="[{active: item.active}]" v-for="(item, index) in tabList" :key="index">{{item.name}}</span>
      </div>
    </header>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <div class="article" v-for="(item, index) in readingList" :key="index">
        <div class="writing">
          <div class="wrting_content" :data-id="item.id" @click="goToArticleDetail(item.id)">
            <header class="title">{{item.title}}</header>
            <article class="content">{{item.forward}}</article>
          </div>
          <div class="article_img"><img :src="item.img_url" alt=""></div>
        </div>
        <footer>
          <span class="author">{{item.author.user_name}}</span>
          <div class="total_tag">
            <span><i class="iconfont icon-like1"></i>{{item.like_count}}</span>
            <span><i class="iconfont icon-eye"></i>{{item.has_reading}}</span>
            <span><i class="iconfont icon-share"></i>{{item.number}}</span>
          </div>
        </footer>
      </div>
    </div>
    <load-more tip="正在加载"></load-more>
  </section>
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
      lastId: 0,
      tabList: [{name: '推荐', active: true}, {name: '专题', active: false}],
      readingList: [],
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
    goToArticleDetail (id) {
      console.log(id)
      this.$router.push('/articleDetail:id')
    },
    changeTab (index) {
      this.tabList = this.tabList.map(item => {
        item.active = false
        return item
      })
      this.tabList[index].active = true
    },
    getMoreReading (lastId) {
      this.$http.get(`http://v3.wufazhuce.com:8000/api/channel/reading/more/${lastId}`).then(res => {
        this.readingList = this.readingList.concat(res.data.data)
        this.lastId = this.readingList[this.readingList.length - 1].id
      })
    },
    loadMore () {
      this.getMoreReading(this.lastId)
    }
  },
  mounted () {
    // this.getNewReading().then(res => {
    //   console.log(res)
    //   this.readingList = res
    //   this.lastId = res[res.length - 1].id
    //   console.log(this.lastId)
    // })
  }
}
</script>
<style lang="less">
.recommend {
  .tabs {
    position: relative;
    height: 64px;
    background: #fff;
    .tabHeader {
      position: fixed;
      top: 0;
      left: 0;
      height: 64px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      z-index: 99;
      background: #f9f9f9;
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
    justify-content: space-between;
    margin-bottom: 10px;
    .wrting_content {
      flex: 2;
      display: flex;
      flex-direction: column;
      margin-right: 10px;
      .title {
        font-size: 18px;
        color: #101010;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .content {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    }
    .article_img {
      flex: 1;
      height: 100px;
      background: #f6f6f6;
      display: block;
      img {
        width: 100%;
        height: 100px;
        border-radius: 4px;
      }
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
