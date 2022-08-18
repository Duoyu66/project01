import {reqGetCode} from "@/api";

const state={
    code:''
}
const mutations={
    GETCODE(state,code){
        state.code=code
    }
}
const actions={
  async  getCode({commit},phone){
        let result =await reqGetCode(phone)
        console.log(result)
      console.log(result.code)
        if (result.code === 200) {
            commit("GETCODE",result.data);
        } else {
            // return Promise.reject(new Error("faile"));
        }
    }
}
const getters={}
export default { 
    state,
    mutations,
    actions,
    getters
}