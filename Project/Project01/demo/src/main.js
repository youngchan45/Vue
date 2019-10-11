import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import {
  NavBar,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Toast,
  Grid,
  GridItem,
  Image,
  Card
} from 'vant'


// Vue.prototype.$ajax=axios
// Vue.use(axios,VueAxios)
Vue.use(NavBar)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Toast)
Vue.use(Grid).use(GridItem)
Vue.use(Image)
Vue.use(Card)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
