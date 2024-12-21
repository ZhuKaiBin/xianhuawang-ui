import axios from 'axios'
import { ref } from 'vue'


// 这个是请求的前端自己的url地址
const jsonpath = ref("/json/banner.json")
export const getBanners = () => {
    return axios.get(jsonpath.value)
}


// 这个是请求后端的数据
const httpRequestAPI = ref("/api")
export const getAPiImagesRequest2 = () => {
    return axios.get(httpRequestAPI.value + '/Images/GetImages')
}



const GetFlowers = ref("/api")
export const GetFlowersAPIRequest = () => {
    return axios.get(GetFlowers.value + '/Flower/GetFlowers')
}



const register = ref("/api")
export const registerAPIRequest = (parms:{}) => {
    return axios.post(GetFlowers.value + '/Flower/register',parms)
}