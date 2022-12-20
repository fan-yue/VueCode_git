/* 
    main.js 文件是整个项目的入口文件
*/
// 引入vue
import { createApp } from 'vue'
// 引入 App 组件，他是所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
// Vue.config.productionTip = false;
// 创建Vue实例对象
createApp(App).mount('#app');


