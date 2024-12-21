import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './routes'
import store from './vuex/store'

const app=createApp(App)

/*启用elementPlus UI */
app.use(ElementPlus)

//挂载Vuex，状态管理
app.use(store);

app.use(router);
/*
app.mount('#app')是 Vue 3 中用于将 Vue 应用程序实例 挂载到 HTML 页面中的一个指定 DOM 元素上的方法。
这个方法是【 Vue 启动的关键步骤】，它将 Vue 的组件渲染到页面上，使页面内容变得动态。
*/
app.mount('#app')
