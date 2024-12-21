//这里存储所有的HTTP请求的方法

import axios from 'axios'
import { ref } from 'vue'


// 这个是请求的前端自己的url地址
const jsonpath = ref("/json/banner.json")
export const getBanners = () => {
    return axios.get(jsonpath.value)
}


// 这个是请求后端的数据
const CommondRequestAPIUri = ref("/api")
export const getAPiImagesRequest2 = () => {
    return axios.get(CommondRequestAPIUri.value + '/Images/GetImages')
}


//Get方式，获取数据
export const GetFlowersAPIRequest = () => {
    return axios.get(CommondRequestAPIUri.value + '/Flower/GetFlowers')
}


//Post接口 注册新用户
export const registerAPIRequest = (parms:{}) => {
    return axios.post(CommondRequestAPIUri.value + '/Flower/register',parms)
}


// 传入一个ID值，后端按照id来筛选数据

export const GetDataByparaAPI = (params = {}) => {
  return axios.get(CommondRequestAPIUri.value + '/Flower/GetData', {
    params: params  // 将参数作为 query 参数传递给后端
  });
};


