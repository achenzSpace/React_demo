import * as actionType from '../config/config'
export const initString = {};
export default function cityRule(state=initString,action) {
    switch (action.type) {
        case actionType.CITYNAME:
            return action.data;
        default:
            return state;
    }
}