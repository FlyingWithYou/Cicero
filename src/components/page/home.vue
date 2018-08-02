<template>
  <div class="home">
    <swiper>
      <swiper-slide v-for="(item,index) in cardList" :key="index">
        <div class="card">
          <img :src="item.cover_img" :alt="item.author" />
          <p class="title">{{item.title}}</p>
          <p class="author">{{item.author}}</p>
        </div>
      </swiper-slide>
    </swiper>
    <!-- <weuiDialog ref="weuiDialog" @confirm="confirm"></weuiDialog> -->
    <!-- <customAlert title="支付成功" ref="customAlert">
      <template slot="content">
        <p>成功打赏王二爷10CCB</p>
      </template>
    </customAlert> -->
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import weuiDialog from '@/components/common/weuiDialog'
import customAlert from '@/components/common/customAlert'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'home',
  components: {
    weuiDialog,
    customAlert,
    swiper,
    swiperSlide
  },
  data () {
    return {
      scrollX: true,
      cardList: [
        {
          cover_img: 'http://image.wufazhuce.com/FjcHfsbi7xfkurxmZMNqgQzyEgm6',
          title: '我的生命从此多了一个你',
          author: '王二爷'
        },
        {
          cover_img: 'http://image.wufazhuce.com/FtNJ5eJxA_5AQMmfKsV14EtRWazv',
          title: '十五岁的夏天错过了什么',
          author: '安妮'
        }
      ],
      show_modal: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    showModal () {
      this.$refs.weuiDialog.show()
    },
    showAlert () {
      this.$refs.customAlert.show()
    },
    confirm (e) {
      console.log(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.home {
  height: 100%;
}
.cardList {
  white-space: nowrap;
}
.card {
  background: #fff;
  width: 90%;
  margin: 0 auto;
  margin-top: 54px;
  top: 74px;
  height: 498px;
  border-radius: 4px;
  text-align: center;
  box-shadow: 1px 0px 2px 2px rgba(170, 170, 170, 1);
  border: 1px solid rgba(255, 255, 255, 0);
  img {
    height: 234px;
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .title {
    margin-top: 100px;
    font-size: 16px;
    color: #101010;
    font-weight: 500;
  }
  .author {
    margin-top: 90px;
    text-align: right;
    padding: 0 20px;
  }
}
</style>
