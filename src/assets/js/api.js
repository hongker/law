// 接口封装

import { post } from "@/request"

export const prefix = "http://pf.mayiyahei.net/app"


export const sendTrackListRequest = (data) => {
    const url = prefix + "/login/track_list";
    return post(url, data)
}

// 获取积分兑换列表
export const sendPrizeListRequest = (data) => {
    const url = prefix + "/prize/prize_list";
    return post(url, data)
}

// 获取兑奖记录
export const sendPrizeRecordRequest = (data) => {
    const url = prefix + "/prize/record";
    return post(url, data)
}

// 填写/修改收货地址
export const upsertPrizeAddressRequest = (data) => {
    const url = prefix + "/prize/address";
    return post(url, data)
}

// 兑换
export const sendPrizeExchangeRequest = (data) => {
    const url = prefix + "/prize/exchange";
    return post(url, data)
}

// 获取个人排行
export const sendUserPersonalRankRequest = (data) => {
    const url = prefix + "/user/personal_rank";
    return post(url, data)
}

// 获取高校排名
export const sendUserSchoolRankRequest = (data) => {
    const url = prefix + "/user/school_rank";
    return post(url, data)
}


// 获取区域排名
export const sendUserRegionRankRequest = (data) => {
    const url = prefix + "/user/region_rank";
    return post(url, data)
}

// 获取高校视频排行
export const sendUserVideoRankRequest = (data) => {
    const url = prefix + "/user/video_rank";
    return post(url, data)
}

// 获取个人/学校作品
export const sendUserWorksListRequest = (data) => {
    const url = prefix + "/user/works_list";
    return post(url, data)
}

// 发布视频（跳转落地页调用此请求）
export const sendReleasedVideoRequest = (data) => {
    const url = prefix + "/user/released_video";
    return post(url, data)
}