import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger  from 'redux-logger';
import todoApp from './reducers';

//一个打印日志的 Middleware
const loggerMiddleware = createLogger();
//applyMiddleware 用于加载多个插件增强createStore 的功能
const createStoreWithMiddleware = applyMiddleware(
    //thunk 使 reducer方法可以异步处理
    thunkMiddleware,
    loggerMiddleware
)(createStore);
//导出一个生成store 的方法 store里面包含 方法跟属性 => dispatch() 起命令方法  state 状态属性
export default function configureStore(initialState) {
    //最后createStore方法载入 自己写的 reducer，执行后就得到一个store
    return createStoreWithMiddleware(todoApp, initialState)
}
 
 