import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import {next} from "lodash/seq";
const originalPush = VueRouter.prototype.push
// 修改 原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err=>err)
}

Vue.use(VueRouter)
let router = new VueRouter({
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        //返回的这个y=0，代表的滚动条在最上方
        return { y: 0 };
    },

})
router.afterEach((to,from,next)=>{
    
})

export default router