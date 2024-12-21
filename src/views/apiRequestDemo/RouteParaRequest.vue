<template>
  <div class="search-page">
    <h1>任务记录查询</h1>
    <input type="number" v-model="taskId" placeholder="请输入任务ID" @input="clearResult" />
    <button @click="search">查询</button>

    <!-- 显示结果或错误 -->
    <div v-if="loading">正在加载...</div>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    <div v-if="result !== null">
      <h3>查询结果：</h3>
      <pre>{{ result }}</pre>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  data() {
    return {
      taskId: '',     // 存储用户输入的 taskId
      result: null,   // 存储 API 返回的结果
      loading: false, // 控制加载状态
      errorMessage: '', // 存储错误信息
    };
  },
  methods: {
    // 清空结果，当用户改变输入时
    clearResult() {
      this.result = null;
      this.errorMessage = '';
    },
    // 搜索方法
    async search() {
      // 确保输入框有值
      if (!this.taskId) {
        this.errorMessage = '请输入有效的任务ID';
        return;
      }

      this.loading = true;
      this.errorMessage = '';
      try {
        // 使用 axios 动态传入 taskId 的值
        var dd=ref('/api')
        const response = await axios.get(dd.value+`/v1/shares/taskrecords/${this.taskId}`);

        // 将 API 返回的结果保存到 result 中
        this.result = response.data;
      } catch (error) {
        this.errorMessage = '请求失败，请稍后再试';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>













<style scoped>
.search-page {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

input {
  padding: 10px;
  width: 200px;
  margin-right: 10px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 20px;
}

pre {
  text-align: left;
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
}
</style>