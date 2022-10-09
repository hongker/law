<template>
    <div class="container">
        <div class="record" @click="record_dialog = true">兑奖记录</div>
        <div class="area-out">
            <div class="area-in">
                <img class="title" src="@/assets/imgs/cash/title.png" >
                <div class="tabs">
                    <div class="tab-btns">
                        <div @click="changeTab(1)"></div>
                        <div @click="changeTab(2)"></div>
                    </div>
                    <img class="tab" src="@/assets/imgs/cash/tab1.png" v-show="tab === 1" >
                    <img class="tab" src="@/assets/imgs/cash/tab2.png" v-show="tab === 2" >
                </div>
                <div class="list">
                    <div class="item-out" v-for="item in 4" :key="item">
                        <div class="item-in">
                            <div class="left" :class="{'radius': tab === 1}">
                                <img src="https://placeholder.smart-tools.cn/100x200/">
                            </div>
                            <div class="right">
                                <p class="name">儿童手表</p>
                                <div class="text">
                                    <p>剩余：10台</p>
                                    <div>
                                        <div>
                                            <p>10</p>
                                            <p>积分</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <div class="disable" v-if="item == 1">已兑换</div>
                                    <div class="able" v-else @click="status_dialog = true">兑换</div>
                                    <div class="able" @click="checkProve">查看</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-group">
            <img src="@/assets/imgs/cash/prev.png" @click="changePage">
            <img src="@/assets/imgs/cash/next.png" @click="changePage">
        </div>
        <img class="tip" src="@/assets/imgs/cash/tip.png">

        <!-- 模态框-->
        <!-- 兑奖记录 -->
        <div class="dialog" v-if="record_dialog">
            <div class="wrapper">
                <div class="wrapper-in">
                    <img class="title" src="@/assets/imgs/cash/djjl.png">
                    <img class="title-bar" src="@/assets/imgs/cash/title-bar.png">
                    <div class="list">
                        <div class="item" v-for="item in 6" :key="item">
                            <p>电子证书</p>
                            <p>20220923</p>
                            <p>100</p>
                        </div>
                    </div>
                    <img class="close" src="https://placeholder.smart-tools.cn/100x200/" @click="record_dialog=false">
                </div>
            </div>
            <div class="btn-group">
                <img src="@/assets/imgs/cash/fhsy.png" @click="back">
                <img src="@/assets/imgs/cash/txdz.png" @click="record_dialog=false;address_dialog = true">
            </div>
        </div>

        <!-- 填写地址 -->
        <div class="dialog" v-if="address_dialog">
            <div class="wrapper">
                <div class="wrapper-in">
                    <img class="title" src="@/assets/imgs/cash/txdzt.png">
                    <div class="form">
                        <div class="item">
                            <p class="label">姓名</p>
                            <Input v-model="params.name" placeholder="名字"></Input>
                        </div>
                        <div class="item">
                            <p class="label">手机号码</p>
                            <Input v-model="params.tel" placeholder="手机号"></Input>
                        </div>
                        <div class="item">
                            <p class="label">地址</p>
                            <Input type="textarea" v-model="params.address" placeholder="北京市xxx区XXXXXXXXX路"></Input>
                        </div>
                    </div>
                    <img class="close" src="https://placeholder.smart-tools.cn/100x200/" @click="address_dialog=false">
                </div>
            </div>
            <div class="btn-group">
                <img src="@/assets/imgs/cash/bc.png" @click="submit">
            </div>
        </div>

        <!-- 兑换 -->
        <div class="dialog" v-if="status_dialog">
            <div class="wrapper">
                <div class="wrapper-in">
                    <img class="title" src="@/assets/imgs/cash/dhzt.png">
                    <div class="status">
                        <p>您使用100积分兑换【电子参赛证明】</p>
                        <p>兑换成功！</p>
                    </div>
                    <img class="close" src="https://placeholder.smart-tools.cn/100x200/" @click="status_dialog=false">
                </div>
            </div>
            <div class="btn-group">
                <img src="@/assets/imgs/cash/fhsyh.png" @click="back">
            </div>
        </div>
    </div>
</template>
<script>
import { Input, Message } from 'element-ui'
export default {
    data() {
        return {
            tab: 1,
            record_dialog: false,
            address_dialog: false,
            status_dialog: false,

            params: {
                name: '',
                tel: '',
                address: ''
            }
        }
    },
    components: {
        Input
    },
    methods: {
        changeTab(tab) {
            this.tab = tab
        },
        changePage() {
            console.log('changePage')
        },
        getList() {

        },
        submit() { // 提交地址
            // 是否为空
            // 验证手机号
            Message({type: 'success',message: '提交成功'})
            this.address_dialog = false
        },
        back() {
            this.$router.push({name: 'home'})
        },
        checkProve() {
            this.$router.push({name: 'prove'})
        }
    },
    mounted() {
        this.getList()
    }
}
</script>
<style lang="less" scoped src="./style.less"></style>