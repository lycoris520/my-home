 <style lang="less">
@import "./../style/home.less";
</style>
<template>
  <div class="home">
    <div class="header">
      <div class="logo">
        <img src="" alt="">
      </div>
      <div class="title">
        <ul>
          <li :class="{'li-active' : currentTab == 1}" @click="setTable(1)">首页</li>
          <li :class="{'li-active' : currentTab == 2}" @click="setTable(2)">服务</li>
          <li :class="{'li-active' : currentTab == 3}" @click="setTable(3)">案例</li>
          <li :class="{'li-active' : currentTab == 4}" @click="setTable(4)">合作</li>
          <li :class="{'li-active' : currentTab == 5}" @click="setTable(5)">关于</li>
          <li :class="{'li-active' : currentTab == 6}" @click="setTable(6)">联系</li>
        </ul>
        <div class="right">
          <span>
            <icon name="qq" scale="3"></icon>
          </span>
          <span>
            <icon name="phone" scale="3"></icon>
            :13999998987
          </span>
        </div>
      </div>
    </div>
    <div class="banner-content">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">
          <img :src="'./../../static/images/'+slide+'.jpg'" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="content1">
      <div class="title-content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 1,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperSlides: []
    };
  },
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.swiper;
  //   }
  // },
  mounted() {
    for (let i = 0; i < 7; i++) {
      this.swiperSlides.unshift(this.swiperSlides.length + 2);
    }
  },
  methods: {
    setTable(val) {
      this.currentTab = val;
    }
  }
};
</script>

