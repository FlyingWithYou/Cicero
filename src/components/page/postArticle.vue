<template>
  <section class="postArticle">
    <header>
      <span class="arrow" @click="goBack"></span>
      <span>发布</span>
    </header>
    <group>
      <x-input placeholder="标题"></x-input>
      <x-textarea placeholder="请输入正文" autosize></x-textarea>
    </group>
  </section>
</template>
<script>
import { Group, XInput, XTextarea } from 'vux'
export default {
  name: 'postArticle',
  components: {
    Group,
    XInput,
    XTextarea
  },
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
    goBack () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>
<style lang="less" scoped>
.postArticle {
  header {
    height: 60px;
    padding: 0 20px;
    background: #f7f7fa;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #60A2F2;
    font-size: 14px;
    .arrow {
      width: 10px;
      height: 10px;
      border-top: 2px solid #999;
      border-right: 2px solid #999;
      transform: rotate(-135deg);
    }
  }
}
</style>

