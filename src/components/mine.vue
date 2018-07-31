<template>
  <div class="mine">
    <div class="head">
      <img  class="avatar" :src="avatar.url" alt="avatar.name">
      <div class="author">
        <span class="author_name">{{avatar.name}}
          <i class="iconfont icon-bianji" style="font-size:17px;"></i>
        </span>
        <span class="pen_name">笔名：{{avatar.pen_name}}</span>
      </div>
    </div>
    <div class="tags">
      <div class="tag" v-for="(item, index) in tags" :key="index">
        <span class="name">{{item.name}}</span>
        <span>{{item.total}}</span>
      </div>
    </div>

    <div class="list" v-for="(item, index) in groupList" :key="index">
      <div class="icons">
        <span class="iconfont" :class="[item.iconName]"></span>
        <span class="icon_name">{{item.name}}</span>
      </div>
      <span class="arrow"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mine',
  data () {
    return {
      avatar: {
        url: 'https://avatars1.githubusercontent.com/u/23456250?s=460&v=4',
        name: '王二爷',
        pen_name: '安妮宝贝'
      },
      groupList: [
        {iconName: 'icon-wallet', name: '钱包'},
        {iconName: 'icon-ai66', name: '购买'},
        {iconName: 'icon-flag', name: '举报'},
        {iconName: 'icon-setting', name: '设置'}
      ],
      tags: [
        {name: '关注', total: 199},
        {name: '粉丝', total: 22},
        {name: '创作', total: 3},
        {name: '最近浏览', total: 15}
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.icon-font {
  font-size: 24px;
}
.mine {
  height: 100%;
  background: #f9f9f9;
}
.head {
  padding: 40px 30px 15px 30px;
  background: #fff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .author {
    font-size: 14px;
    font-family: pingfang sc;
    color: #999;
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    .pen_name {
      margin-top: 3px;
      font-size: 12px;
    }
  }
}
.tags {
  padding: 10px;
  background: #fff;
  display: flex;
  align-items: center;
  .tag {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: pingfang sc;
    font-size: 14px;
    color: #959591;
    .name {
      font-size: 12px;
    }
  }
}
.list {
  height: 55px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 14px;
  font-family: pingfang sc;
  color: #999;
  margin-top: 11px;
  .icons {
    display: flex;
    align-items: center;
  }
  .icon_name {
    margin-left: 15px;
  }
  .arrow {
    width: 7px;
    height: 7px;
    border-top: 2px solid #101010;
    border-right: 2px solid #101010;
    transform: rotate(45deg);
  }
}
</style>

