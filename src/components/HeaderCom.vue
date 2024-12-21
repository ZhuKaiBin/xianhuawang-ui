<template>
    <div>
        <!-- 第一行 -->
        <el-row :span="24">
            <el-col>
                <ul>
                    <!-- @click="OpenLogin"点击登录的时候会调用登录的事件 -->
                    <li @click="OpenLogin">
                        <el-link :underline="false">登录</el-link>
                    </li >

                     <li @click="OPenRegister">
                        <el-link :underline="false">注册</el-link>
                    </li> 

                    <li>
                        <el-link :underline="false">张三</el-link>
                    </li>

                    <li>
                        <el-link :underline="false" href="/personcenter">个人中心</el-link>
                    </li>

                    <li>
                        <el-link :underline="false">注销</el-link>
                    </li>
                </ul>
            </el-col>
        </el-row>

        <!-- 第二行 -->
        <el-row :span="24">
            <el-col>
                <el-link :underline="false" href="/">
                    <el-image style="width: 200px; height: 200px; " />
                </el-link>
            </el-col>
            <el-col>
                <el-input v-model="searchInput" style="width: 240px" placeholder="商品搜索" :suffix-icon="Search"
                    @change="change" />
            </el-col>
        </el-row>

        <!-- 第三行 -->
        <el-row>
            <el-col :span="24">
                <el-menu :default-active="activeindex" router>
                    <el-menu-item index="/">首页</el-menu-item>
                    <el-menu-item index="/loverflower">爱情鲜花</el-menu-item>
                    <el-menu-item index="/birthdayflower">生日鲜花</el-menu-item>
                    <el-menu-item index="/friendflower">友情鲜花</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>


    </div>
    <LoginCom/>
    <RegisterCom/>
</template>

<script setup>

import {useStore} from 'vuex';
import { ElMessage } from 'element-plus';
import { ref } from 'vue';

import LoginCom  from './LoginCom.vue';
import RegisterCom from './RegisterCom.vue';

const searchInput = ref("");

const change = () => {
    ElMessage("你搜索的是" + searchInput.value);
};


const store=useStore();
const OpenLogin=()=>{
    store.commit('OpenLogin');//这里会提交一个【OpenLogin】的事件，就会触发store.js中的OpenLogin方法，进而修改 state.IsShowLogin = true;
}


 const OPenRegister=()=>{
     store.commit('OPenRegister');//这里会提交一个【OpenLogin】的事件，就会触发store.js中的OpenLogin方法，进而修改 state.IsShowLogin = true;
 }


</script>


<style lang="scss">
ul {
    list-style: none;
    padding-left: 80%;

    li {
        float: left;
        margin-left: 20px;

    }

    ;

}
</style>