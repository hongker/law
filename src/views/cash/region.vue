<template>
    <div class="container">
        <img class="backicon" @click="$router.go(-1)" src="@/assets/imgs/back.png" />
        <div class="record" @click="getPrizeRecord">兑奖记录</div>
        <div class="area-out">
            <div class="area-in">
                <img class="title" src="@/assets/imgs/cash/title.png">
                <div class="tabs">
                    <div class="tab-btns">
                        <div @click="changeTab(1)"></div>
                        <div @click="changeTab(2)"></div>
                    </div>
                    <img class="tab" src="@/assets/imgs/cash/tab1.png" v-show="tab === 1">
                    <img class="tab" src="@/assets/imgs/cash/tab2.png" v-show="tab === 2">
                </div>
                <div class="list">
                    <div class="item-out" v-for="(item, index) in items" :key="index">
                        <div class="item-in">
                            <div class="left" :class="{'radius': tab === 1}">
                                <img :src="item.pic">
                            </div>
                            <div class="right">
                                <p class="name">{{item.title}}</p>
                                <div class="text">
                                    <p>剩余：{{item.num_desc}}</p>
                                    <div>
                                        <div>
                                            <p>{{item.score_desc}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <div class="disable" v-if="item.exchange == 1">已兑换</div>
                                    <div class="able" v-else @click="exchangePrize(item.id)">兑换</div>
                                    <div class="able" v-show="tab===1 && item.exchange == 1" @click="view(item.id, item.cert_code)">查看
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-group">
            <img src="@/assets/imgs/cash/prev.png" @click="changePage(-1)" v-if="listParam.page != 1">
            <img src="@/assets/imgs/cash/next.png" @click="changePage(1)" v-if="listParam.page != maxPage">
        </div>
        <img class="tip zs" src="@/assets/imgs/cash/tip.png">

        <!-- 模态框-->
        <!-- 兑奖记录 -->
        <div class="dialog" v-if="record_dialog">
            <div class="wrapper">
                <div class="wrapper-in">
                    <img class="title" src="@/assets/imgs/cash/djjl.png">
                    <img class="title-bar" src="@/assets/imgs/cash/title-bar.png">
                    <div class="list">
                        <div class="item" v-for="(item, index) in record.list" :key="index">
                            <p>{{item.title}}</p>
                            <p>{{dealTime(item.create_time)}}</p>
                            <p>{{item.score}}</p>
                        </div>
                    </div>
                    <img class="close" src="@/assets/imgs/close.png" @click="record_dialog=false">
                </div>
            </div>
            <div class="btn-group">
                <img src="@/assets/imgs/cash/fhsy.png" @click="back">
                <img src="@/assets/imgs/cash/txdz.png" v-if="record.is_address"
                    @click="record_dialog=false;address_dialog = true" alt="填写地址">
                <img src="@/assets/imgs/cash/txdz.png" v-else @click="record_dialog=false;address_dialog = true"
                    alt="修改地址">
            </div>
        </div>

        <!-- 填写地址 -->
        <div class="dialog" v-if="address_dialog">
            <div class="wrapper autoheight">
                <div class="wrapper-in">
                    <img class="title" src="@/assets/imgs/cash/txdzt.png">
                    <div class="form">
                        <div class="item">
                            <p class="label">姓名</p>
                            <Input v-model="addressParam.username" placeholder="名字"></Input>
                        </div>
                        <div class="item">
                            <p class="label">手机号码</p>
                            <Input type="number" v-model="addressParam.phone" maxlength="11" placeholder="手机号"></Input>
                        </div>
                        <div class="item">
                            <p class="label">地址</p>
                            <Input type="textarea" v-model="addressParam.address" maxlength="20"
                                placeholder="北京市xxx区XXXXXXXXX路"></Input>
                        </div>
                    </div>
                    <img class="close" src="@/assets/imgs/close.png" @click="address_dialog=false">
                </div>
            </div>
            <div class="btn-group">
                <img src="@/assets/imgs/cash/bc.png" @click="upsertPrizeAddress">
            </div>
        </div>

        <!-- 兑换 -->
        <div class="dialog" v-if="status_dialog">
            <div class="wrapper autoheight">
                <div class="wrapper-in">
                    <img class="title" src="@/assets/imgs/cash/dhzt.png">
                    <div class="status" v-show="exchangeStatus == 1">
                        <p>您使用{{exchangeResponse.score}}积分兑换【{{exchangeResponse.title}}】</p>
                        <p>兑换成功！</p>
                    </div>
                    <div class="status" v-show="exchangeStatus == 2">
                        <p>{{exchangeFailText}}</p>
                        <p>兑换失败！</p>
                    </div>
                    <img class="close" src="@/assets/imgs/close.png" @click="status_dialog=false">
                </div>
            </div>
            <!-- <div class="btn-group">
                <img src="@/assets/imgs/cash/fhsyh.png" @click="back">
            </div> -->
        </div>
    </div>
</template>
<script>
import {
    Input,
    Message,
} from 'element-ui'
import {
    sendPrizeListRequest,
    sendPrizeExchangeRequest,
    sendPrizeRecordRequest,
    upsertPrizeAddressRequest,
} from "@/assets/js/api.js";
export default {
    name: "region-list",
    data() {
        return {
            listParam: {
                page: 1,
                limit: 4,
                mode: 1, // 1-虚拟 2- 实物
            },


            items: [],
            record: {
                is_address: 0,
                list: []
            },
            maxPage: 1,
            tab: 1,
            record_dialog: false,
            address_dialog: false,
            status_dialog: false,


            addressParam: {
                username: "",
                address: "",
                phone: "",
            },
            copyAddressParam: {},
            exchangeResponse: {},
            exchangeFailText: '',
            exchangeStatus: 1, // 1是成功， 2是失败

        }
    },
    components: {
        Input
    },
    methods: {
        changeTab(tab) {
            this.tab = tab
            this.listParam.mode = tab
            this.listParam.page = 1
            this.getList()
        },
        changePage(direction) {
            let that = this;
            if (direction == -1 && that.listParam.page <= 1) {
                return
            }

            if (direction == 1 && that.listParam.page == that.maxPage) {
                return
            }

            that.listParam.page += direction

            that.getList()
        },
        // 填写地址
        upsertPrizeAddress() {
            let that = this;
            if (that.addressParam.username == '' || that.addressParam.phone == '' || that.addressParam.address == '') {
                Message.error('请填写完整信息')
                return
            }

            if (!/^1[3-9]\d{9}$/.test(that.addressParam.phone)) {
                Message.error('手机号格式不正确')
                return
            }
            if(that.addressParam.username == that.copyAddressParam.username && 
            that.addressParam.phone == that.copyAddressParam.phone && 
            that.addressParam.address == that.copyAddressParam.address) {
                Message.error('请修改信息')
                return
            }

            upsertPrizeAddressRequest(that.addressParam).then(function (ret) {
                if (ret.data.code != 0) {
                    Message.error(ret.data.msg)
                    return
                }
                ret = ret.data.data
                console.log(ret)
                that.address_dialog = false
                Message.success(ret.data.msg)

            });
        },
        getList() {
            let that = this;
            sendPrizeListRequest(that.listParam).then(function (ret) {
                if (ret.data.code != 0) {
                    Message.error(ret.data.msg)
                    return
                }
                ret = ret.data.data
                console.log(ret);
                that.page = ret.page;
                if (ret.count > 0) {
                    that.items = ret.list;
                    that.maxPage = ret.page_num;
                }
            });
        },
        // 兑换奖品
        exchangePrize(id) {
            let that = this;
            console.log(id);
            sendPrizeExchangeRequest({ id: id}).then(function (ret) {
                if (ret.data.code != 0) { // 兑换失败
                    // Message.error(ret.data.msg)
                    that.exchangeStatus = 2
                    that.exchangeFailText = ret.data.msg
                    that.status_dialog = true;
                    return
                }
                ret = ret.data.data
                console.log(ret);
                if (ret) {
                    that.exchangeStatus = 1
                    that.exchangeResponse = ret;
                    that.status_dialog = true;
                }

            });
        },
        getPrizeRecord() {
            let that = this;
            sendPrizeRecordRequest({ }).then(function (ret) {
                if (ret.data.code != 0) {
                    Message.error(ret.data.msg)
                    return
                }
                ret = ret.data.data
                console.log(ret);
                that.record_dialog = true
                if (ret) {
                    that.record = ret
                }
            });
        },

        back() {
            this.$router.push({ name: 'home' })
        },
        view(id, code) {
            this.$router.push({ name: 'prove' , query: {code:code}})
        },
        dealTime(t) {
            return t.split(' ')[0]
        }
    },
    mounted() {
        // TODO 获取现有用户信息的地址
        this.getList()
        let userInfo = JSON.parse(localStorage.getItem('userInfo'))
        this.addressParam.address = userInfo.address
        this.addressParam.phone = userInfo.phone
        this.addressParam.username = userInfo.username
        this.copyAddressParam = {
            address: userInfo.address,
            phone: userInfo.phone,
            username: userInfo.username
        }
    }
}
</script>
<style lang="less" scoped src="./style.less">
</style>