<template>
    <div class="common-layout">
        <el-container>

            <el-aside width="200px">
                <div class="block">
                    <span class="demonstration">el-aside</span>
                    <el-image :src=images2 />
                </div>
            </el-aside>


            <el-main width="200px">
                <div class="block" style="height: 200px;width: 200px;" v-for="item in list" :key="item">
                    <span class="demonstration"> 后端GetFlowers接口返回的数据: {{ item.id }}+ {{ item.title }}</span>
                    <el-image :src=images3>                       
                    </el-image>
                </div>
            </el-main>


        </el-container>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { GetFlowersAPIRequest } from '../http/index'

const images2 = ref();
images2.value = "/images/1.jpg"

const images3 = ref();
images3.value = "/images/2.jpg"

const list = ref();
onMounted(async () => {
    list.value = await (await GetFlowersAPIRequest()).data
    console.log(await GetFlowersAPIRequest().data)
})





</script>