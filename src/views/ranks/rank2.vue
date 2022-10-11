<template>
    <div class="container">
        <img class="backicon" @click="$router.go(-1)" src="https://placeholder.smart-tools.cn/100x120/">
        <div class="tabs tabs2">
            <div class="tab-btns">
                <div @click="changeTab(1)"></div>
                <div @click="changeTab(2)"></div>
            </div>
            <img class="tab" src="@/assets/imgs/ranks/rank2_title1.png" v-show="tab === 1" >
            <img class="tab" src="@/assets/imgs/ranks/rank2_title2.png" v-show="tab === 2" >
        </div>
        <div class="header col-type col-type2">
            <p>名次</p>
            <p>{{tab_header_key[tab].name}}</p>
            <p>{{tab_header_key[tab].num}}</p>
        </div>
        <div class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
            <div class="item col-type col-type2" :class="['no'+item]" v-for="item in list_len" :key="item">
                <p class="normal has-yuan">
                    <span v-if="item > 3">{{item}}</span>
                    <img :src="nos[item]" />
                </p>
                <p class="normal">中国人民大学</p>
                <p class="has-kuang">500000</p>
            </div>
        </div>
        <p class="load-tip" v-if="loading">加载中...</p>
        <p class="load-tip" v-if="no_more">没有更多了</p>
        <div class="self-item item col-type col-type2">
            <p class="normal has-kuang-1">
                <span>1000</span>
            </p>
            <p class="normal">中国人民大学</p>
            <p class="has-kuang">500000</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nos: {
                '1': require('@/assets/imgs/ranks/1.png'),
                '2': require('@/assets/imgs/ranks/2.png'),
                '3': require('@/assets/imgs/ranks/3.png'),
            },
            tab_header_key: {
                '1': { name: '昵称', num: '累计积分' },
                '2': { name: '省份', num: '参赛人数' },
            },
            list_len: 10,
            tab:1,
            tab_where:1,

            loading: false
        }
    },
    computed: {
      no_more () {
        return this.list_len >= 32
      },
      disabled () {
        return this.loading || this.no_more
      }
    },
    methods: {
        changeTab(tab) {
            this.tab = tab
        },
        changeWhereTab(tab) {
            this.tab_where = tab
        },
        load () {
            this.loading = true
            setTimeout(() => {
                this.list_len += 10
                this.loading = false
            }, 2000)
        }
    }
}
</script>
<style lang="less" scoped src="./style.less"></style>