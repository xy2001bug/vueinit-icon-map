import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './icons' // icon
// import AmapVue from '@amap/amap-vue' // 高德地图

// AmapVue.config.key = '97c2abd3c0454f1ebce3624da71aa3b8'
// Vue.use(AmapVue)
Vue.config.productionTip = false

// 进入路由前
router.beforeEach((to, from, next) => {
    next()
})
// 进入路由后
router.afterEach(() => {
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
