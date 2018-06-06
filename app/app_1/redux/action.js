import * as actionType from '../config/config'
export function City(value) {

    const data = {
        type:actionType.CITYNAME,
        data:value
    };
    return data;
}

export function Login(val) {
    const data = {
        type: actionType.LOGIN,
        data: val
    }
    return data;
}