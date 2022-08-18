import {reqCategoryList, reqGetBannerList, reqGetFloorList} from "@/api";

const state = {
    //三级联动
    categoryList:[],
    //轮播图
    bannerList:[],
    //floor
floorList:[]
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList=floorList
    }
}
const actions = {
    //三级联动
    async categoryList({commit}) {
        let result = await reqCategoryList();
        console.log(result)
        if (result.code === 200) {
            commit("CATEGORYLIST", result.data)
        }
    },
    //轮播图
    async  getBannerList({commit}){
        let result = await reqGetBannerList()
        // console.log(result)
        if (result.code==200){
            commit("GETBANNERLIST",result.data)
        }
    },
    //floor
    async getFloorList({commit}){
        let result = await reqGetFloorList()
       if (result.code==200){
           commit("GETFLOORLIST",result.data)
       }
    }

    }
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}