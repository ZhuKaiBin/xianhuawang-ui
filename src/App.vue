<template>
  <HeaderCom></HeaderCom>
  <router-view></router-view><!-- 路由视图 -->
  <FooterCom></FooterCom>
</template>



<script lang="ts" setup>


import HeaderCom from './components/HeaderCom.vue';//导入一个头组件
import FooterCom from './components/FooterCom.vue';//导入一个脚组件

</script>
