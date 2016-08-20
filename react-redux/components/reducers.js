import * as ActionTypes from './actionTypes'
import { combineReducers } from 'redux';

//定义 初始化数据
const loadState = {
    loaded: ActionTypes.FETCH_NORMAL,
    data:{}
};
//定义 reducer方法 即 监听事件，根据反馈的action.type执行对应的数据修改，返回新的state数据集修改当前的数据
//不要在reducer里进行下面的操作：
//  修改传入参数；
//  执行有副作用的操作，如 API 请求和路由跳转；
//  调用非纯函数，如 Date.now() 或 Math.random()。
function loadData(state=loadState,action) {
    switch (action.type){
        case ActionTypes.FETCH_START:
            //使用Object.assign方法， Object.assign(数据1，数据2，数据3) 即  数据2、数据3 赋值给数据1.变相地修改原来的state
            return Object.assign({},state,{
                loaded: ActionTypes.FETCH_START,
                data: {}
            });
        case ActionTypes.FETCH_END:
            return Object.assign({},state,{
                loaded: ActionTypes.FETCH_END,
                data: action.json
            });
        default:
            return state
    }
}
//通过 redux 里的combineReducers 方法， 打包多个reducer方法。
const todoApp = combineReducers({
    loadData
});

export default todoApp;