import {reqAddOrUpdateShopCart, reqGoodsInfo} from "@/api";
import {getUUID} from "@/utils/uuid";

const state={
    goodInfo:{},

    //游客身份
    uuid_token:getUUID()
}
const mutations={
    GETGOODSINFO(state,goodInfo){
        state.goodInfo=goodInfo
    }
}
const actions={
    async getGoodsInfo({commit},skuId){
        let result  = await reqGoodsInfo(skuId)
        if (result.code===200){
            commit('GETGOODSINFO',result.data)
        }
    },
    //加入购物车 || 修改某一个产品的个数
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result = await reqAddOrUpdateShopCart(skuId,skuNum)
        if(result.code===200){
           return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    }
}
const getters={
    skuInfo(state){
        return state.goodInfo.skuInfo ||{}
    },
    categoryView(state){
        return state.goodInfo.categoryView ||{}
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList ||[]
    },
    price(state){
        return state.goodInfo.price || ''
    },
    skuImageList(state){
        return state.goodInfo.skuInfo.skuImageList ||[]
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}