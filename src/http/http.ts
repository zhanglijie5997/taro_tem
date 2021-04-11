import { request, showToast } from "@tarojs/taro";

const baseUrl = "";

export const get = async (url: string, data: any) => {
    try {
        const _ = await request({
            url: baseUrl + url,
            method: "GET",
            data,
        });
        return _;
    } catch (error) {
        showToast({
            title: "网络错误",
            icon: "none",
            mask: true
        })
        return {
            status: 500,
            data: {}
        }
    }
} 

export const post = async (url: string, data: any) => {
    try {
        const _ = await request({
            url: baseUrl + url,
            method: "POST",
            data
        })
        return _;
    } catch (error) {
        showToast({
            title: "网络错误",
            icon: "none",
            mask: true
        })
        return {
            status: 500,
            data: {}
        }
    }
} 
