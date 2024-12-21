<!-- 主要是测试前端传入一个id，然后呼叫后端 -->
<template>
    <div>
      <input v-model="id" placeholder="请输入ID" /> <!-- 输入框，用于输入ID -->
      <button @click="fetchData">获取数据</button> <!-- 点击按钮触发获取数据 -->
  
      <div v-if="data">
        <h3>返回的值：</h3>
        <p>{{ data }}</p> <!-- 显示返回的结果 -->
      </div>
    </div>
  </template>
  
  <script>
import { ref } from 'vue';
import { GetDataByparaAPI } from '../http/index'; // 引入封装的 API 请求

export default {
  setup() {
    const id = ref('');  // 用于存储用户输入的ID
    const data = ref(null);  // 用于存储从后端获取的数据

    const fetchData = async () => {
      try {
        // 调用封装的 API 请求函数，传递 id 参数
        const response = await GetDataByparaAPI({ id: id.value });

        // 处理后端返回的结果
        data.value = response.data; // 假设后端返回的数据是需要的值
      } catch (error) {
        console.error('请求失败', error);
      }
    };

    return {
      id,
      data,
      fetchData
    };
  }
};
</script>