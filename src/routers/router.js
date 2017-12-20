import Vue from 'vue'//引入vue
import router from 'vue-router'//引入vue
import Home from '../components/home.vue'
import Foo from '../components/foo.vue'
import Bar from '../components/bar.vue'

Vue.use(router)

//var Foo = { template: '<div>foo</div>' }
//var Bar = { template: '<div>bar</div>' }
//var Home = { template: '<div>home</div>' }

var routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/', component: Home },
]

var Router = new router({
  routes:routes// （缩写）相当于 routes: routes
})

export default Router




