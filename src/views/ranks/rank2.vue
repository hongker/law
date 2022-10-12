<template>
  <div class="container" v-if="user_type == 3">
    <img class="backicon" @click="$router.go(-1)" src="@/assets/imgs/back.png" />
    <div class="tabs">
      <div class="tab-btns">
        <div @click="changeUserTab(1)"></div>
        <div @click="changeUserTab(2)"></div>
        <div @click="changeUserTab(3)"></div>
      </div>
      <img class="tab" src="@/assets/imgs/ranks/rank1_title1.png" v-show="tab === 1" />
      <img class="tab" src="@/assets/imgs/ranks/rank1_title2.png" v-show="tab === 2" />
      <img class="tab" src="@/assets/imgs/ranks/rank1_title3.png" v-show="tab === 3" />
    </div>
    <div class="tabs-where" v-show="tab === 2">
      <p :class="{ active: tab_where === 3 }" @click="changeWhereTab(3)">
        全校
      </p>
      <p :class="{ active: tab_where === 2 }" @click="changeWhereTab(2)">
        全省/市
      </p>
      <p :class="{ active: tab_where === 1 }" @click="changeWhereTab(1)">
        全国
      </p>
    </div>
    <div class="header col-type">
      <p>名次</p>
      <p>{{ tab_user_header_key[tab].name }}</p>
      <p>答题</p>
      <p>视频</p>
      <p>{{ tab_user_header_key[tab].num }}</p>
    </div>
    <div class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
      <div class="item col-type" :class="['no' + (index + 1)]" v-for="(item, index) in rankResponse.list" :key="index">
        <p class="normal has-yuan">
          <span v-if="item.rank > 3">{{ item.rank }}</span>
          <img :src="nos[item.rank]" />
        </p>
        <p class="normal" v-if="tab == 1">{{ item.school_name }}</p>
        <p class="normal" v-else-if="tab == 2">{{ item.nickname }}</p>
        <p class="normal" v-else>{{ item.region_name }}</p>

        <p v-if="tab == 1">{{ item.is_points }}</p>
        <p v-else-if="tab == 2">{{ item.points_score }}</p>
        <p v-else>{{ item.is_points }}</p>

        <p v-if="tab == 1">{{ item.is_video }}</p>
        <p v-else-if="tab == 2">{{ item.video_score }}</p>
        <p v-else>{{ item.is_video }}</p>

        <p class="has-kuang" v-if="tab == 1">{{ item.peoples }}</p>
        <p class="normal" v-else-if="tab == 2">{{ item.total_score }}</p>
        <p class="has-kuang" v-else>{{ item.peoples }}</p>
      </div>
    </div>
    <p class="load-tip" v-if="loading">加载中...</p>
    <p class="load-tip" v-if="no_more" v-show="tab != 3">没有更多了</p>
    <div class="self-item item col-type" v-show="tab == 1">
      <p class="normal has-kuang-1">{{ rankResponse.info.rank }}</p>
      <p class="normal oneline">{{ rankResponse.info.school_name }}</p>
      <p>{{ rankResponse.info.is_points }}</p>
      <p>{{ rankResponse.info.is_video }}</p>
      <p class="has-kuang">{{ rankResponse.info.peoples }}</p>
    </div>
    <div class="self-item item col-type" v-show="tab == 2">
      <p class="normal has-kuang-1">{{ rankResponse.info.rank }}</p>
      <p class="normal oneline">{{ rankResponse.info.nickname }}</p>
      <p>{{ rankResponse.info.points_score }}</p>
      <p>{{ rankResponse.info.video_score }}</p>
      <p class="has-kuang">{{ rankResponse.info.total_score }}</p>
    </div>
    <div class="self-item item col-type" v-show="tab == 3">
      <p class="normal has-kuang-1">{{ rankResponse.info.rank }}</p>
      <p class="normal oneline">{{ rankResponse.info.region_name }}</p>
      <p>{{ rankResponse.info.is_points }}</p>
      <p>{{ rankResponse.info.is_video }}</p>
      <p class="has-kuang">{{ rankResponse.info.peoples }}</p>
    </div>
  </div>

  <div class="container" v-else>
    <div class="tabs tabs2">
      <div class="tab-btns">
        <div @click="changeTab(1)"></div>
        <div @click="changeTab(2)"></div>
      </div>
      <img class="tab" src="@/assets/imgs/ranks/rank2_title1.png" v-show="tab === 1" />
      <img class="tab" src="@/assets/imgs/ranks/rank2_title2.png" v-show="tab === 2" />
    </div>
    <div class="header col-type col-type2">
      <p>名次</p>
      <p>{{ tab_header_key[tab].name }}</p>
      <p>{{ tab_header_key[tab].num }}</p>
    </div>
    <div class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
      <div class="item col-type col-type2" :class="['no' + (index + 1)]" v-for="(item, index) in rankResponse.list"
        :key="index">
        <p class="normal has-yuan">
          <span v-if="item.rank > 3">{{ item.rank }}</span>
          <img :src="nos[item.rank]" />
        </p>
        <p class="normal" v-if="tab == 1">{{ item.nickname }}</p>
        <p class="normal" v-else>{{ item.region_name }}</p>
        <p class="has-kuang" v-if="tab == 1">{{ item.total_score }}</p>
        <p class="has-kuang" v-else>{{ item.peoples }}</p>
      </div>
    </div>
    <p class="load-tip" v-if="loading">加载中...</p>
    <p class="load-tip" v-if="no_more" v-show="tab != 2">没有更多了</p>
    <div class="self-item item col-type col-type2" v-show="tab == 1">
      <p class="normal has-kuang-1">
        <span>{{ rankResponse.info.rank }}</span>
      </p>
      <p class="normal oneline">{{ rankResponse.info.nickname }}</p>
      <p class="has-kuang">{{ rankResponse.info.total_score }}</p>
    </div>
    <div class="self-item item col-type col-type2" v-show="tab == 2">
      <p class="normal has-kuang-1">
        <span>{{ rankResponse.info.rank }}</span>
      </p>
      <p class="normal oneline">{{ rankResponse.info.region_name }}</p>
      <p class="has-kuang">{{ rankResponse.info.peoples }}</p>
    </div>
  </div>
</template>
<script>
import {
  sendUserPersonalRankRequest,
  sendUserRegionRankRequest,
  sendUserSchoolRankRequest,
} from "@/assets/js/api.js";

export default {
  data() {
    return {
      user_type: 3,
      nos: {
        1: require("@/assets/imgs/ranks/1.png"),
        2: require("@/assets/imgs/ranks/2.png"),
        3: require("@/assets/imgs/ranks/3.png"),
      },
      tab_user_header_key: {
        1: { name: "学校", num: "参赛总人数" },
        2: { name: "昵称", num: "累计总积分" },
        3: { name: "省份", num: "参赛总人数" },
      },
      tab_header_key: {
        1: { name: "昵称", num: "累计积分" },
        2: { name: "省份", num: "参赛人数" },
      },
      tab: 1,
      tab_where: 3,
      rankParam: {
        page: 1,
        type: 1,
      },

      rankResponse: {
        info: {
          rank: 0,
        },
        list: [],
      },
      loading: false,
      maxPage: 1,
    };
  },
  mounted() {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.user_type = userInfo.user_type
    if (this.user_type == 3) {
      this.getSchoolRank();
    } else {
      this.getPersonalRank();
    }
  },
  computed: {
    no_more() {
      return this.rankParam.page >= this.maxPage;
    },
    disabled() {
      return this.loading || this.no_more;
    },
  },
  methods: {
    reset() {
      this.rankParam.page = 1;
      this.rankResponse.list = [];
      this.rankResponse.info = {};
      this.maxPage = 1;
    },
    changeUserTab(tab) {
      this.tab = tab;
      this.reset()
      if (tab == 1) {
        // 高校
        this.getSchoolRank();
      } else if (tab == 2) {
        // 积分
        this.getPersonalRank();
      } else {
        // 地区
        this.getRegionRank();
      }
    },

    changeTab(tab) {
      this.tab = tab;
      this.reset()
      if (tab == 1) {
        // 积分
        this.getPersonalRank();
      } else {
        // 地区
        this.getRegionRank();
      }
    },
    changeWhereTab(tab) {
      this.tab_where = tab;
      this.rankParam.type = tab;
      this.reset()
      this.getPersonalRank();
    },
    // 加载更多
    showMore() {

      if (this.user_type == 3) {
        if (this.tab == 1) {
          this.getSchoolRank();
        } else if (this.tab == 2) {
          this.getPersonalRank();
        } else {
          this.getRegionRank();
        }
      } else {
        if (this.tab == 1) {
          this.getPersonalRank();
        } else {
          this.getRegionRank();
        }
      }
    },

    // 获取高校排名
    getSchoolRank() {
      let that = this;

      sendUserSchoolRankRequest(that.rankParam).then(function (ret) {
        if (ret.data.code != 0) {
          that.$message.error(ret.data.msg)
          return
        }
        ret = ret.data.data
        console.log(ret);
        if (ret) {
          that.rankResponse.info = ret.info;
          that.rankResponse.list.push.apply(that.rankResponse.list, ret.list);

          that.maxPage = ret.page_num;
          that.rankParam.page++

        }
        that.loading = false;
      });
    },
    // 获取个人排名
    getPersonalRank() {
      let that = this;
      sendUserPersonalRankRequest(that.rankParam).then(function (ret) {
        if (ret.data.code != 0) {
          that.$message.error(ret.data.msg)
          return
        }
        ret = ret.data.data
        console.log(ret);
        if (ret) {
          that.rankResponse.info = ret.info;
          that.rankResponse.list.push.apply(that.rankResponse.list,ret.list);
          that.maxPage = ret.page_num;
          that.rankParam.page++
        }
        that.loading = false;
      });
    },
    // 获取区域排名
    getRegionRank() {
      let that = this;
      sendUserRegionRankRequest(that.rankParam).then(function (ret) {
        if (ret.data.code != 0) {
          that.$message.error(ret.data.msg)
          return
        }
        ret = ret.data.data
        console.log(ret);
        if (ret) {
          that.rankResponse.info = ret.info;
          that.rankResponse.list.push.apply(that.rankResponse.list,ret.list);
          that.maxPage = ret.page_num;
          that.rankParam.page++
        }
        that.loading = false;
      });
    },
    load() {
      if (this.rankParam.page == 1) {
        return
      }

      this.loading = true;
      setTimeout(() => {
        this.showMore();
      }, 500);
    },
  },
};
</script>
<style lang="less" scoped src="./style.less">

</style>