import Vue from 'vue'//引入vue
import router from './routers/router.js'//引入app。vue
import store from './store/store.js'
import App from './app.vue'//引入app。vue




new Vue({
	router,
	store,
  render:h=>h(App)//渲染dom
}).$mount('#app')//挂载