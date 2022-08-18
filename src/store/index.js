import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import search from "@/store/search";
import detail from "@/store/detail";
import user from "@/store/user";
import shopcart from "@/store/shopcart";
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        home,
        search,
        detail,
        user,
        shopcart
    }
})