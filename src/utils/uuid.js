import {v4 as uuidv4} from 'uuid'

export const getUUID = () => {
    //判断本地存储是否有uuid
    let uuid_token = localStorage.getItem('UUIDTOKEN');
    //如果没有uuid
    if (!uuid_token) {
        //生成uuid
        uuid_token=uuidv4()
        //2.2存储本地
        localStorage.setItem("UUIDTOKEN",uuid_token)
    }
    return uuid_token
}