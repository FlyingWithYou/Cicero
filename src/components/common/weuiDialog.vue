<template>
  <div class="wrapper">
    <transition name="fade">
      <div v-if="showModal">
        <div class="weui-mask"></div>
        <div class="weui-dialog">
          <header>{{title}}</header>
          <section class="body">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</section>
          <footer>
            <a href="javascript:;" class="weui-dialog_btn" @click="btn_cancel">取消</a>
            <a href="javascript:;" class="weui-dialog_btn" @click="btn_confirm">确定</a>
          </footer>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'weui-dialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confrimText: {
      type: String,
      default: '确定'
    }
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    show () {
      this.showModal = true
    },
    hide () {
      this.showModal = false
    },
    btn_cancel () {
      this.hide()
    },
    btn_confirm () {
      this.hide()
      this.$emit('confirm', 'confirm')
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
.weui-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 300px;
  width: 80%;
  z-index: 5000;
  background: #fff;
  text-align: center;
  border-radius: 3px;
  overflow: hidden;
  header {
    padding: 1.3em 1.6em 0.5em;
    font-size: 18px;
    color: #101010;
  }
  .body {
    padding: 0 1.6em 0.8em;
    min-height: 40px;
    font-size: 15px;
    line-height: 1.3;
    word-wrap: break-word;
    word-break: break-all;
    color: #808080;
  }
  footer {
    position: relative;
    line-height: 48px;
    font-size: 18px;
    display: flex;
    a {
      &.weui-dialog_btn {
        display: block;
        flex: 1;
        text-decoration: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        position: relative;
        color: #353535;
        &::after {
          content: " ";
          position: absolute;
          left: 0;
          top: 0;
          width: 1px;
          bottom: 0;
          border-left: 1px solid #D5D5D6;
          color: #D5D5D6;
          transform-origin: 0 0;
          transform: scaleX(0.5);
        }
      }
    }
    &::after {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #D5D5D6;
      color: #D5D5D6;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
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

