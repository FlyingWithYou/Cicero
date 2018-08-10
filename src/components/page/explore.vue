<template>
  <section class="explore">
    <header>
      <div class="item"  v-for="(item, index) in category" :key="index">
        <span class="iconfont" :class="[item.iconName]"></span>
        <span>{{item.name}}</span>
      </div>
    </header>
    <p>{{count}}</p>
  </section>
</template>
<script>
export default {
  name: 'explore',
  components: {},
  data () {
    return {
      count: 0,
      category: [
        {name: '举报', iconName: 'icon-icon_jubao-mian'},
        {name: '专题', iconName: 'icon-book'},
        {name: '活动', iconName: 'icon-cube'},
        {name: '数据', iconName: 'icon-shujutongji'}
      ]
    }
  },
  methods: {
    addCount () {
      this.count = new Date().toLocaleString()
      setInterval(() => {
        this.count = new Date().toLocaleString()
      }, 1000)
    }
  },
  mounted () {
    this.addCount()
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
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
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

