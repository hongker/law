<template>
    <div class="container">
        <img class="title-pic" src="@/assets/imgs/home/title.png">
        <!-- 参与方式 -->
        <div class="area-out">
            <div class="area-in">
                <img class="title" src="@/assets/imgs/home/cyfs.png" >
                <div class="content-type1">
                    <p>青春喜迎二十大，学法用法向未来！第18届全国青少年学法用法网上知识竞赛“校园新星来普法”视频征集活动正式启动！</p>
                    <p class="p1">一、高校赛道</p>
                    <p>高校官方账号在B站带#校园新星来普法#和#高校全称#投稿作品，联系活动运营方确认报名，即可参与全国比拼。校友进入参赛视频点赞助力，捍卫母校荣耀！</p>
                    <p class="p1">二、个人赛道</p>
                    <p>在B站带#校园新星来普法#投稿参与活动，即有机会获得奖项荣誉和丰厚奖品！ </p>
                    <p class="p2">*高校参赛请添加运营方微信：Tuan1922，或B站内联系“全国青少年普法大赛”账号。</p>
                    <div class="btn-group">
                        <img src="@/assets/imgs/home/dkbztg.png">
                        <img src="@/assets/imgs/home/dkbzdz.png">
                    </div>
                </div>
            </div>
        </div>
        <!-- 高校作品排行榜 -->
        <div class="area-out">
            <div class="area-in">
                <img class="title title1" src="@/assets/imgs/home/gszpphb.png" >
                <div class="content-type2">
                    <div class="header col-type">
                        <p class="col1">学校</p>
                        <p class="col2">作品名</p>
                        <p class="col3">点赞数</p>
                    </div>
                    <div class="list">
                        <div class="item col-type" :class="['no'+item]" v-for="item in 8" :key="item">
                            <p class="normal col1">
                                中国人民大学
                            </p>
                            <p class="normal col2">作品名称</p>
                            <p class="has-kuang col3">
                                <img src="@/assets/imgs/home/star.png">
                                <span>1026</span>
                            </p>
                            <p class="sort" v-if="item > 3">{{item}}</p>
                            <img class="sort img" :src="nos[item]" v-else>
                        </div>
                    </div>
                    <div class="btn-group">
                        <img src="@/assets/imgs/home/syy.png">
                        <img src="@/assets/imgs/home/xyy.png">
                    </div>
                    <div class="self-item item col-type">
                        <p class="normal has-kuang-1">
                            99
                        </p>
                        <p class="normal">
                            中国人民大学
                        </p>
                        <p class="normal">作品名称</p>
                        <p class="has-kuang">
                            <img src="@/assets/imgs/home/star.png">
                            <span>1026</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 高校作品 -->
        <div class="area-out">
            <div class="area-in">
                <img class="title title1" src="@/assets/imgs/home/gxzp.png" >
                <div class="content-type3">
                    <Carousel class="gxCarousel" ref="gxCarousel" indicator-position="outside" :autoplay="false" arrow="never">
                        <CarouselItem class="card-group" v-for="item in 4" :key="item">
                            <div class="card" v-for="item1 in 6" :key="item1">
                                <img src="https://placeholder.smart-tools.cn/100x120/">
                                <p>中国人民大学中国人民大学中国人民大学中国人民大学中国人民大学中国人民大学</p>
                            </div>
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>
        </div>
        <!-- 个人作品 -->
        <div class="area-out">
            <div class="area-in">
                <img class="title title1" src="@/assets/imgs/home/grzp.png" >
                <div class="content-type3 content-type3-1">
                    <Carousel class="grCarousel" ref="grCarousel" indicator-position="outside" :autoplay="false" arrow="never">
                        <CarouselItem class="card-group" v-for="item in 4" :key="item">
                            <div class="card" v-for="item1 in 6" :key="item1">
                                <img src="https://placeholder.smart-tools.cn/100x120/">
                                <p>中国人民大学中国人民大学中国人民大学中国人民大学中国人民大学中国人民大学</p>
                            </div>
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>
        </div>
        <!-- 活动奖励 -->
        <div class="area-out">
            <div class="area-in">
                <img class="title title1" src="@/assets/imgs/home/hdjl.png" >
                <div class="content-type4">
                    <div class="group">
                        <img class="group-title" src="@/assets/imgs/home/grz.png">
                        <div class="grid">
                            <div class="grid-item-out">
                                <div class="grid-item-in">
                                    <p>电话手表</p>
                                    <img src="https://placeholder.smart-tools.cn/100x120/">
                                </div>
                            </div>
                            <div class="grid-item-out">
                                <div class="grid-item-in">
                                    <p>电话手表</p>
                                    <img src="https://placeholder.smart-tools.cn/100x120/">
                                </div>
                            </div>
                            <div class="grid-item-out">
                                <div class="grid-item-in">
                                    <p>电话手表</p>
                                    <img src="https://placeholder.smart-tools.cn/100x120/">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group">
                        <img class="group-title" src="@/assets/imgs/home/grz.png">
                        <div class="grid">
                            <div class="grid-item-out">
                                <div class="grid-item-in">
                                    <p>电话手表</p>
                                    <img src="https://placeholder.smart-tools.cn/100x120/">
                                </div>
                            </div>
                            <div class="grid-item-out">
                                <div class="grid-item-in">
                                    <p>电话手表</p>
                                    <img src="https://placeholder.smart-tools.cn/100x120/">
                                </div>
                            </div>
                            <div class="grid-item-out">
                                <div class="grid-item-in">
                                    <p>电话手表</p>
                                    <img src="https://placeholder.smart-tools.cn/100x120/">
                                </div>
                            </div>
                            <div class="grid-item-out">
                                <div class="grid-item-in">
                                    <p>电话手表</p>
                                    <img src="https://placeholder.smart-tools.cn/100x120/">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 合作高校 -->
        <div class="area-out">
            <div class="area-in">
                <img class="title title1" src="@/assets/imgs/home/hzgx.png" >
                <div class="content-type5">
                    <div v-for="item in 12" :key="item">
                        <img src="https://placeholder.smart-tools.cn/100x120/">
                        <p>中国人民大学</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 底部按钮 -->
        <div class="footer">
            <img src="@/assets/imgs/home/dkbzcjhd.png">
        </div>
    </div>
</template>
<script>
import { Carousel, CarouselItem } from 'element-ui'
export default {
    data() {
        return {
            nos: {
                '1': require('@/assets/imgs/home/1.png'),
                '2': require('@/assets/imgs/home/2.png'),
                '3': require('@/assets/imgs/home/3.png'),
            },
        }
    },
    components: {
        Carousel, CarouselItem
    },
    methods: {
        // 滑动切换
        slideBanner(key) {
        //选中的轮播图
            var box = document.querySelector(`.${key} .el-carousel__container`);
            var startPoint = 0;
            var stopPoint = 0;
            //重置坐标
            var resetPoint = function () {
                startPoint = 0;
                stopPoint = 0;
            }
            //手指按下
            box.addEventListener("touchstart", function (e) {
                //手指点击位置的X坐标
                startPoint = e.changedTouches[0].pageX;
            });
            //手指滑动
            box.addEventListener("touchmove", function (e) {
                //手指滑动后终点位置X的坐标
                stopPoint = e.changedTouches[0].pageX;
            });
            //当手指抬起的时候，判断图片滚动离左右的距离
            let that = this
            box.addEventListener("touchend", function (e) {
                console.log("1：" + startPoint);
                console.log("2：" + stopPoint);
                if (stopPoint == 0 || startPoint - stopPoint == 0) {
                    resetPoint();
                    return;
                }
                if (startPoint - stopPoint > 0) {
                    resetPoint();
                    that.$refs[key].next();
                    return;
                }
                if (startPoint - stopPoint < 0) {
                    resetPoint();
                    that.$refs[key].prev();
                    return;
                }
            });
        }
    },
    mounted() {
        this.slideBanner('gxCarousel')
        this.slideBanner('grCarousel')
    }
}
</script>
<style lang="less" scoped src="./style.less"></style>