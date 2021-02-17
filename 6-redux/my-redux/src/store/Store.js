/*
 * @Author: your name
 * @Date: 2021-02-17 00:15:58
 * @LastEditTime: 2021-02-17 11:55:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-kkb-prev\6-redux\my-redux\src\store\Store.js
 */

import { createStore } from 'redux';
const initState = {
    num: 0,
    handle: 'default'
}
const cunterReducer = (state = initState, actions) => {
    switch (actions.type) {
        case "ADD":
            return {
                num: state.num + 1,
                handle: "ADD"
            }
        case "MINUS":
            return {
                num: state.num - 1,
                handle: "MINUS"
            }
        default:
            return initState
    }
}

const store = createStore(cunterReducer);
export default store;