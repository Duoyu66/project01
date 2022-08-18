import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from "@/store";
import 'swiper/css/swiper.css'
import TypeNav from "@/components/TypeNav/TypeNav";
Vue.component(TypeNav.name,TypeNav)
import Carousel from './components/Carousel'
Vue.component(Carousel.name,Carousel)
import './pages/Home/mock/mockServe'
import Pagination from "./components/Pagination/Pagination";
import {reqCategoryList} from './api'
reqCategoryList();
Vue.component(Pagination.name,Pagination)

Vue.config.productionTip = false

const vm=new Vue({
  render: h => h(App),
  router,
  store,
 beforeCreate() {
    Vue.prototype.$bus=this
 }
}).$mount('#app')
