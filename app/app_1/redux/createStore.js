import {createStore} from 'redux'
import combineReducers from './combineReducers'

export default function createStores(initState) {
    var store = createStore(combineReducers,initState);
    return store;
}