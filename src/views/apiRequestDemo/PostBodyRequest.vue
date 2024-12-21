<template>
  <div>
    <h1>上传数据</h1>
    <form @submit.prevent="submitData">
      <div>
        <label for="fileId">File ID:</label>
        <input type="text" id="fileId" v-model="fileId" />
      </div>
      <div>
        <label for="excelName">Excel Name:</label>
        <input type="text" id="excelName" v-model="excelName" />
      </div>
      <button type="submit">提交</button>
    </form>
    <p v-if="responseMessage">{{ responseMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      fileId: '',
      excelName: '',
      responseMessage: ''
    };
  },
  methods: {
    async submitData() {
      try {
        // 发送POST请求
        const response = await axios.post('/api'+
          'v1/basicDatas/circuitBreakerMaterials/startImport',
          {
            fileId: this.fileId,
            excelName: this.excelName
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'accept': 'application/json'
            }
          }
        );
        // 处理响应
        this.responseMessage = '数据上传成功: ' + JSON.stringify(response.data);
      } catch (error) {
        // 错误处理
        this.responseMessage = '请求失败: ' + error.message;
      }
    }
  }
};
</script>

<style scoped>
/* 你可以在这里添加一些样式 */
form {
  margin: 20px;
}

label {
  margin-right: 10px;
}
</style>
