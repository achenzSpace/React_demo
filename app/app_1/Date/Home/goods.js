import {Get,Post,date} from '../dateRequires'

export function getInfomation() {
    var info = date();
    console.log(info)
    return info;
}