import React from 'react';
import ReactDOM from 'react-dom';

import List from './components/list';

import { Provider } from 'react-redux';
import configureStore from './components/store';

//运行函数生成一个store
const store = configureStore();

console.log(store.getState());
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);
//创建一个全局的容器，react-redux的Provider包裹着自定义组件,在store属性里面传入自己写的store,然后组件就可以用connect方法载入dispatch方法跟state属性了
ReactDOM.render(<Provider store={store}>
        <List/>
    </Provider>,
    document.getElementById('box')
);