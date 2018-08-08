<template>
  <section class="articleDetail" style="padding: 46px 20px 62px;">
    <x-header slot="header" title="详情" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>
    <header>
      <p class="title">{{post.hp_title}}</p>
      <p class="time">{{post.maketime | formatDate}}</p>
      <section class="author">
        <div class="author_desc">
          <img :src="author.web_url" alt="">
          <span class="author_name">{{author.user_name}}</span>
        </div>
        <span class="tag">已关注</span>
      </section>
    </header>
    <section class="postImg">
      <div class="zoomImage" :style="{backgroundImage: `url(${postImg})`}"></div>
    </section>
    <section class="post_content" v-html="post.hp_content"></section>
    <section class="post_desc">
      <p class="text-editor">{{post.hp_author_introduce}}</p>
      <p class="text-editor">{{post.copyright}}</p>
    </section>
    <section class="post_comment">
      <p class="head">评论内容</p>
      <hr class="header_line">
      <section class="comments">
        <div class="item" v-for="(item, index) in comments" :key="index">
          <section class="head">
            <section class="user">
              <img :src="item.user.web_url" alt=""/>
              <span>{{item.user.user_name}}</span>
            </section>
            <span>{{item.created_at}}</span>
          </section>
          <section class="content">
            {{item.content}}
          </section>
          <section class="like_comment">
            <span>
              <i class="iconfont icon-comment"></i>
              <i>{{item.reviewed}}</i>
            </span>
            <span>
              <i class="iconfont icon-dynpraisenormal"></i>
              <i>{{item.praisenum}}</i>
            </span>
          </section>
        </div>
      </section>
    </section>
    <footer class="tagList">
      <div class="item" v-for="(item, index) in tagList" :key="index">
        <span class="iconfont" :class="[item.iconName]"></span>
        <span>{{item.name}}</span>
      </div>
    </footer>
  </section>
</template>
<script>
import dayjs from 'dayjs'
import { XHeader } from 'vux'
import { mapState } from 'vuex'
export default {
  components: {
    XHeader
  },
  data () {
    return {
      comments: [],
      articleId: '',
      author: {},
      post: {},
      tagList: [
        {name: '赏', iconName: 'icon-xuanshang'},
        {name: '收藏', iconName: 'icon-shoucang'},
        {name: '点赞', iconName: 'icon-like1'},
        {name: '分享', iconName: 'icon-fenxiang'}
      ]
    }
  },
  methods: {
    getPostWriting () {
      this.articleId = this.$route.query.articleId
      return new Promise((resolve, reject) => {
        this.$http.get(`http://v3.wufazhuce.com:8000/api/essay/${this.articleId}`).then(res => {
          resolve(res.data.data)
        }, err => { reject(err) })
      })
    },
    getPostComments () {
      return new Promise((resolve, reject) => {
        this.$http.get(`http://v3.wufazhuce.com:8000/api/comment/praiseandtime/essay/${this.articleId}/0`).then(res => {
          resolve(res.data.data.data)
        }, err => { reject(err) })
      })
    },
    async getArticleData () {
      this.post = await this.getPostWriting()
      this.comments = await this.getPostComments()
      this.author = this.post.author[0]
    }
  },
  created () {
    this.getArticleData()
  },
  filters: {
    formatDate (time) {
      return dayjs(time).format('YYYY-MM-DD HH:mm')
    }
  },
  computed: {
    ...mapState({
      postImg: state => state.post_img
    })
  }
}
</script>
<style lang="less">
.articleDetail {
  header {
    margin-top: 20px;
    .title {
      font-size: 18px;
      color: #101010;
      font-family: pingfang sc;
    }
    .time {
      color: #999;
      font-size: 12px;
    }
  }
  .author {
    margin-top: 10px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .author_desc {
      display: flex;
      align-items: center;
      color: #999;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 8px;
        background: rgb(180, 188, 204);
      }
    }
    span {
      &.tag {
        width: 80px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #bbb;
        color: #777;
        border-radius: 4px;
      }
    }
  }
  .postImg {
    width: 100%;
    box-sizing: border-box;
    height: 200px;
    margin-top: 20px;
    .zoomImage {
      width: 100%;
      height: 0;
      padding-bottom: 60%;
      overflow: hidden;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  .post_content {
    margin-top: 20px;
    color: #333;
    font-size: 16px;
    line-height: 1.67;
    margin-bottom: 20px;
    font-weight: 300;
    p {
      margin-bottom: 20px;
    }
  }
  .post_desc {
    .text-editor {
      margin: 20px 0;
      font-size: 12px;
      color: #808080;
    }
  }
  .post_comment {
    margin-top: 60px;
    .head {
      font-size: 14px;
      color: #333;
    }
    .header_line {
      border: 2px solid #000;
      margin: 7px 0;
      width: 70px;
    }
    .comments {
      .item {
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
        margin-bottom: 20px;
        .head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: #808080;
          .user {
            display: inline-flex;
            align-items: center;
            img {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              margin-right: 10px;
            }
          }
        }
        .content {
          margin-top: 10px;
          margin-left: 20px;
          word-break: break-all;
          word-wrap:break-word;
          line-height: 25px;
          color: #000;
          font-size: 16px;
          font-weight: 300;
        }
        .like_comment {
          display: flex;
          align-items: center;
          flex-direction: row-reverse;
          span {
            margin-right: 20px;
            display: flex;
            align-items: center;
            .iconfont {
              font-size: 18px;
              color: #999;
              margin-right: 10px;
            }
            i {
              font-size: 14px;
              color: #999;
              font-style: normal;
            }
          }
        }
      }
    }
  }
  .tagList {
    position: absolute;
    z-index: 1000;
    bottom: 0;
    left: 0;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    height: 62px;
    background: #fff;
    border-top: 1px solid #eee;
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #999;
      font-size: 14px;
      span.iconfont {
        font-size: 20px;
      }
    }
  }
}

</style>
