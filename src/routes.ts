import { createRouter,createWebHistory } from "vue-router";

import HomePage from "./views/HomePage.vue";
import LoveFlower from "./views/LoveFlower.vue";
import BirthdayFlower from "./views/BirthdayFlower.vue";
import FriendFlower from "./views/FriendFlower.vue";
import WeddingFlower from "./views/WeddingFlower.vue";
import FlowerDetail from "./views/FlowerDetail.vue";
import FlowerPay from "./views/FlowerPay.vue";
import PersonCenter from "./views/PersonCenter.vue";

import RouteParaRequest from "./views/apiRequestDemo/RouteParaRequest.vue"
import PostBodyRequest from "./views/apiRequestDemo/PostBodyRequest.vue"

const router=createRouter({
history:createWebHistory(),

//这里的配置是指：当url匹配到/loveflower的时候，就会跳转到component:BirthdayFlower这个页面中去
routes:[
    {path:'/',component:HomePage},
    {path:'/loveflower',component:LoveFlower},
    {path:'/birthdayflower',component:BirthdayFlower},
    {path:'/friendflower',component:FriendFlower},
    {path:'/WeddingFlower',component:WeddingFlower},
    {path:'/flowerdetail',component:FlowerDetail},
    {path:'/flowerpay',component:FlowerPay},
    {path:'/personcenter',component:PersonCenter},

    {path:'/RouteParaRequest',component:RouteParaRequest},
    {path:'/PostBodyRequest',component:PostBodyRequest},
    
]
})

export default router