//引入路由软件
import Login from "@/pages/Login";
import HomeIndex from "@/pages/Home/HomeIndex";
import Search from "@/pages/Home/Search";
import Detail from "@/pages/Detail"
import Register from '@/pages/Register'
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from "@/pages/ShopCart";

export default [
    {
        path: '/login',
        component: Login,
        meta: {isShow: true}
    },
    {
        path: '/home',
        component: HomeIndex,
        meta: {isShow: true}
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: Search,
        meta: {isShow: false}
    },
    //重定向
    {
        path: '*',
        redirect: "/home"
    },
    {
        name: 'detail',
        path: '/detail/:skuId',
        component: Detail,
    },
    {
        path: '/register',
        component: Register
    }, 
    {
        //加入购物车成功
        name:'addcartsuccess',
        path: '/addcartsuccess',
        component: AddCartSuccess,
        beforeEnter (to, from, next) {
            // 得到当前路由信息对象
            // const route = router.currentRoute  // route就是from

            // 得到要跳转到目路由的query参数
            const skuNum = to.query.skuNum
            // 读取保存的数据
            const skuInfo = JSON.parse(window.sessionStorage.getItem('SKU_INFO_KEY'))
            console.log('---', skuNum, skuInfo)
            // 只有都存在, 才放行
            if (skuNum && skuInfo) {
                next()
            } else { // 在组件对象创建前强制跳转到首页
                next('/')
            }
        }
    },
    {
        path:'/shopcart',
        component:ShopCart
    }
]
