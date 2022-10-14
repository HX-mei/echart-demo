//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false
// import store from './store'
//引入Element
import ElementUI from 'element-ui'
//引入样式
import 'element-ui/lib/theme-chalk/index.css'
// 引入Echarts
import echarts from "echarts"
Vue.prototype.$echarts = echarts
//引入router
import router from './router'

Vue.use(ElementUI);

new Vue({
    el: '#app',
    render: h => h(App),
    router,
  }).$mount('#app')
  