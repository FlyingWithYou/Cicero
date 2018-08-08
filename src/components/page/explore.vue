<template>
  <section class="explore">
    <header>
      <div class="item"  v-for="(item, index) in category" :key="index">
        <span class="iconfont" :class="[item.iconName]"></span>
        <span>{{item.name}}</span>
      </div>
    </header>
  </section>
</template>
<script>
export default {
  name: 'explore',
  components: {},
  mounted () {},
  data () {
    return {
      category: [
        {name: '举报', iconName: 'icon-icon_jubao-mian'},
        {name: '专题', iconName: 'icon-book'},
        {name: '活动', iconName: 'icon-cube'},
        {name: '数据', iconName: 'icon-shujutongji'}
      ]
    }
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.explore {
  padding: 0 5px;
  header {
    height: 90px;
    background: #f7f7fa;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: -5px;
    margin-right: -5px;
    border-bottom: 1px solid #eee;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #7b7b77;
    }
  }
}
</style>

