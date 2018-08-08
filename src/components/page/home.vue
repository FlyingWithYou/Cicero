<template>
  <div class="home">
    <swiper>
      <swiper-slide v-for="(item,index) in toDayList" :key="index">
        <div class="card">
          <img :src="item.img_url" :alt="item.author" />
          <p class="title">{{item.forward}}</p>
          <p class="author">
            <span>{{item.author.user_name?item.author.user_name: '匿名作者'}}</span>
          </p>
        </div>
      </swiper-slide>
    </swiper>
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
      toDayList: [],
      scrollX: true,
      show_modal: false
    }
  },
  methods: {
    showDialog () {
      this.$refs.customAlert.show()
    },
    showAlert () {
      let that = this
      this.$vux.confirm.show({
        title: '支付成功',
        content: `<p>成功打赏王二爷<span style="color:#E51C23;">10CCB</span></p>`,
        showCancelButton: false,
        onCancel () {
          console.log(that)
        },
        onConfirm () {
          console.log('yes')
        }
      })
    },
    getArticleIds () {
      return new Promise((resolve, reject) => {
        this.$http.get(`http://v3.wufazhuce.com:8000/api/onelist/idlist`).then(res => {
          let todayId = res.data.data[0]
          resolve(todayId)
        }, err => reject(err))
      })
    },
    getTodayArticle (id) {
      return new Promise((resolve, reject) => {
        this.$http.get(`http://v3.wufazhuce.com:8000/api/onelist/${id}/0`).then(res => {
          resolve(res.data.data.content_list)
        }, err => reject(err))
      })
    },
    async getOneArtile () {
      this.$vux.loading.show({text: 'Loading'})
      let todayId = await this.getArticleIds()
      let toDayData = await this.getTodayArticle(todayId)
      this.toDayList = toDayData
      this.$vux.loading.hide()
    }
  },
  mounted () {
    this.getOneArtile()
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
  // box-shadow: 2px 2px 5px 0 rgba(170, 170, 170, 1);
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow .25s;
  img {
    height: 234px;
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .title {
    font-size: 16px;
    color: #101010;
    font-weight: 400;
    padding: 0 20px;
  }
  .author {
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    color: #333;
    font-weight: 300;
    display: flex;
    font-size: 14px;
    justify-content: flex-end;
  }
}
.card:hover {
  box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}
</style>
