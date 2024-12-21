<template>
  <el-dialog v-model="IsShowRegister" title="注册" width="30%" :before-close="handleClose">
  <p>{{ IsShowRegister }}</p>  <!-- 在页面上显示 IsShowRegister 的值 -->
  <el-form :model="form" label-width="120px">
    <el-form-item label="昵称">
      <el-input v-model="form.Nick"></el-input>
    </el-form-item>
    <el-form-item label="用户名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.pwd"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="Submint">确定</el-button>
      <el-button @click="CloseRegister">取消</el-button>
    </el-form-item>
  </el-form>
</el-dialog>

</template>
 
 <script lang="ts" setup>
 import { computed } from 'vue';
 import { useStore } from 'vuex';  // 使用 useStore 来获取 Vuex store 实例
 import { registerAPIRequest } from '../http/index';

 const store = useStore();  // 获取 Vuex store 实例
 
 const IsShowRegister = computed(() => store.state.IsShowRegister);
 
 const handleClose = (done: () => void) => {
   store.commit('CloseRegister');
   done();
 };


//定义一个form表单的对象，用于收集信息
 const form={
  Nick:'',
  name:'',
  pwd:''
 };

 // 提交表单的处理函数
const Submint = async () => {
  try {
    console.log(form);
    const response = await registerAPIRequest(form);  // 调用 API 发送表单数据
    console.log(response.data);  // 你可以根据需要处理返回的数据
    store.commit('CloseRegister');  // 成功后关闭弹窗
  } catch (error) {
    console.error('注册失败:', error);  // 错误处理
  }
};

// 关闭注册弹窗
const CloseRegister = () => {
  console.log('Before Close:', IsShowRegister.value);  // 打印关闭前的值
  store.commit('CloseRegister');
  console.log('After Close:', IsShowRegister.value);   // 打印关闭后的值
};


 </script>
 