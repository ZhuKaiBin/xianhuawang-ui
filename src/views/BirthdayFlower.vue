<template>
    <div>
        生日鲜花页面
    </div>
</template>


<script setup>
// import { onMounted } from 'vue';
import { ref } from 'vue';
import { GetFlowersAPIRequest } from '../http/index'

// onMounted(async () => {

//     console.log(await GetFlowersAPIRequest().value)
// })


const d= ref(await GetFlowersAPIRequest())
console.log(d.value)

</script>