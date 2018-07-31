<template>
  <div class="mine">
    <div class="head">

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
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.icon-font {
  width: 24px;
  height: 24px;
}
.mine {
  height: 100%;
  background: #f9f9f9;
}
.head {
  height: 100px;
  background: #fff;
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

