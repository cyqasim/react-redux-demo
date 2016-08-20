import React,{Component} from 'react';

import * as ActionTypes from './actionTypes';

import { connect } from 'react-redux';

//定义 List组件
class List extends Component{
    //初始化方法 默认执行  还有一个 main()方法
    constructor(props) {
        //获取父类的props属性
        super(props);
    }
    _renderImg(src){
        return(
            <img src={src}/>
        )
    }
    render() {
        //获取组件里的 dispatch方法及loaded, data属性
        const { dispatch, loaded, data } = this.props;
 
        let state = '获取图片';
        if(loaded == ActionTypes.FETCH_START){
            state = '加载中';
        }else if(loaded == ActionTypes.FETCH_END){
            state = '已获取';
        };

        let images = '';
        if(data.images){
            images = this._renderImg(data.images.large);
        };
        //因为上面已经把属性里面的 dispatch提取出来了，所以可以直接在组件里面用
       return (
           <div>
               <div onClick={()=>{dispatch(ActionTypes.fetchDataController())}}>{state}</div>
               <div>{images}</div>
           </div>
       );
    }
}
//在connect方法的时候 将state数据传入，返回 自定义名称， 传入组件成为属性的时候就用 名称获取
function select(state) {
    return {
        loaded : state.loadData.loaded,
        data: state.loadData.data
    };
}
//使用 react-redux 中间件的connect方法， reducer方法以及state数据传入组件 成为组件的props属性
export default connect(select)(List);