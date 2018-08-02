<template>
  <div class="customAlert" wx:if="showAlert">
    <transition name="fade">
      <div v-if="showAlert">
        <div class="weui-mask"></div>
        <div class="custom_alert">
          <header>{{title}}</header>
          <section class="content">
            <slot name="content"></slot>
          </section>
          <footer @click="btn_confirm">
            <a href="javascript:;">{{confirmText}}</a>
          </footer>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'customAlert',
  components: {},
  props: {
    title: {
      type: String,
      default: '提示',
      required: true
    },
    confirmText: {
      type: String,
      default: '确定'
    }
  },
  data () {
    return {
      showAlert: false
    }
  },
  methods: {
    show () {
      this.showAlert = true
    },
    hide () {
      this.showAlert = false
    },
    btn_confirm () {
      this.showAlert = false
    }
  }
}
</script>
<style lang="less">
.weui-mask {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6)
}
.custom_alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 300px;
  width: 80%;
  z-index: 5000;
  background: #fff;
  text-align: center;
  header {
    padding: 20px 20px;
    font-size: 14px;
    color: #101010;
    background: #fbfbfb;
  }
  .content {
    max-height: 100px;
    padding: 0 1.6em;
    font-size: 14px;
    color: #999;
    height: 98px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #D5D5D6;
    word-wrap: break-word;
    word-break: break-all;
  }
  footer {
    a {
      height: 38px;
      color: #E51C23;
      line-height: 38px;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
