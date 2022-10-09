<template>
    <div class="container">
        <div class="area">
            <img class="title" src="@/assets/imgs/cash/cszm.png" >
            <p class="num">编号：20221015000001</p>
            <img class="avatar" src="https://placeholder.smart-tools.cn/100x200/" />
            <p class="name">团团</p>
            <p class="desc">恭喜您在【第十八届全国青少年学法用法网上知识竞赛】系列活动中完成全部挑战！通过参与知识竞答与视频征集活动，您积极主动、仔细认真，争当尊法学法守法用法的好青年，为法治中国建设贡献了青春力量！</p>
            <div class="inscription">
                <div>
                    <p>共青团中央维护青少年权益部</p>
                    <p>2022年10月</p>
                </div>
            </div>
        </div>
        <img class="code" src="@/assets/imgs/cash/code.png" >
        <img class="zs" src="https://placeholder.smart-tools.cn/100x200/" />
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.container {
    background-image: url('@/assets/imgs/bg1.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100vw;
    min-height: 100vh;
    padding: 150px 0 0 0;
    .area {
        background: #FFF9E6;
        box-shadow: 1px 11px 34px 0px rgba(239,156,36,0.38);
        border-radius: 12px;
        position: relative;
        width: 670px;
        padding: 100px 0 100px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        .title {
            width: 320px;
            height: 90px;
        }
        .num {
            font-size: 24px;
            color: #333333;
            margin-top: 16px;
        }
        .avatar {
            border: 5px solid #F2CA46;
            border-radius: 50%;
            width: 130px;
            height: 130px;
            margin-top: 56px;
        }
        .name {
            background: linear-gradient(to left, #FFF9E6 0%,#C2EAC5 50%, #FFF9E6 100%);
            height: 45px;
            line-height: 45px;
            color: #1E1E1E;
            font-size: 28px;
            width: 286px;
            margin-top: 14px;
            text-align: center;
        }
        .desc {
            font-size: 26px;
            font-weight: 500;
            color: #000000;
            line-height: 41px;
            margin-top: 52px;
            width: 586px;
            text-indent: 40px;
            letter-spacing: 4px;
        }
        .inscription {
            width: 100%;
            display: flex;
            flex-direction: row-reverse;
            margin-right: 120px;
            line-height: 41px;
            font-size: 26px;
            margin-top: 150px;
            text-align: center;
        }
    }
    .code {
        position: fixed;
        z-index: 2;
        width: 138px;
        height: 138px;
        bottom: 100px;
        left: 80px;
    }
    .zs {
        position: fixed;
        z-index: 1;
        width: 100%;
        height: 200px;
        bottom: 0;
        left: 0;
    }
}
</style>