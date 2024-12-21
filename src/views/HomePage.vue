<template>
    <div class="block text-center">
        <span class="demonstration">
            Switch when indicator is hovered (default)
        </span>

        <el-carousel height="550px" v-if="isShow">
            <el-carousel-item v-for="item in images2" :key="item">
                <el-link :href="item.skipUrl" target="_blank">
                    <el-image :src="item.picUrl"></el-image>
                </el-link>
            </el-carousel-item>
        </el-carousel>
    </div>

    <!-- 这里就相当于我这个页面里要嵌套homeContent这个页面 -->
     
<homeContent></homeContent>
</template>


<script setup>
//这里是导入的方法，一个from xx中可能会提供很多方法，所以需要用{}括起来
import { ref, onMounted } from 'vue';
import { getBanners } from '../http/index'
import { getAPiImagesRequest2 } from '../http/index'

//这个是导入的组件，不需要加{},供上面调用
import  homeContent from '../components/HomeContent.vue'

const images2 = ref();
const isShow = ref(false);
onMounted(async () => {
    // console.log(await getBanners())
    images2.value = (await getBanners()).data
    isShow.value = true;
})

onMounted(async () => {
    //输出从后端接口拿回来的数据  
    console.log(await getAPiImagesRequest2())
})

</script>




<style scoped>
.demonstration {
    color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>